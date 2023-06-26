
function setupDraggable() {
  const gridContainers = document.querySelectorAll('.col');
  gridContainers.forEach((container) => {
    let group = 'draggable-group';
    const sortable = new Sortable(container, {
      animation: 150, // Animation duration in milliseconds
      draggable: '.draggable', // Class name of draggable elements
      group: group, // Specify the group name for elements
    });
  });
}

function makePanelDraggable(selector) {
  
  $(document).on('mousedown', selector, startDrag);
  $(document).on('mousemove', drag);
  $(document).on('mouseup', stopDrag);

  restorePositions();

  function startDrag(event) {
    const target = $(event.target).closest(selector);
    if (target[0] === event.target) {
      target.addClass('dragging');
      const offset = target.offset();
      target.data('offsetX', event.clientX - offset.left);
      target.data('offsetY', event.clientY - offset.top);
    }
  }

  function drag(event) {
    const draggingElement = $(`${selector}.dragging`);
    if (draggingElement.length) {
      const offsetX = draggingElement.data('offsetX');
      const offsetY = draggingElement.data('offsetY');
      const left = event.clientX - offsetX;
      const top = event.clientY - offsetY ;

      const viewportWidth = $(window).width();
      const viewportHeight = $(window).height();
      const elementWidth = draggingElement.outerWidth();
      const elementHeight = draggingElement.outerHeight();
      const maxLeft = viewportWidth - elementWidth;
      const maxTop = viewportHeight - elementHeight;



      draggingElement.css({
        left: Math.min(Math.max(left, 0), maxLeft) + 'px',
        top: Math.min(Math.max(top, 0), maxTop) + 'px',
      });
    }
  }

  function stopDrag() {
    const draggingElement = $(`${selector}.dragging`);
    if (draggingElement.length) {
      draggingElement.removeClass('dragging');
      const id = draggingElement.attr('id');
      const position = {
        x: parseInt(draggingElement.css('left')),
        y: parseInt(draggingElement.css('top')),
      };
      sessionStorage.setItem(id, JSON.stringify(position));
    }
  }

  function restorePositions() {
    $(selector).each(function () {
      const id = $(this).attr('id');
      const storedPosition = sessionStorage.getItem(id);

      if (storedPosition) {
        const position = JSON.parse(storedPosition);
        $(this).css({ left: position.x + 'px', top: position.y + 'px' });
      }
    });
  }
}

