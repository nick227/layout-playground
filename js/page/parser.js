function updateColorStructure(colors = []) {
  const rows = Array.from(document.querySelectorAll('.row'));

  const parsedStructure = rows.map(row => {
    const columns = Array.from(row.querySelectorAll('.col')).map((col, index) => {
      const width = (col.offsetWidth / col.parentNode.offsetWidth * 100).toFixed(2) + '%';
      let css = col.getAttribute('style');
      const content = col.innerHTML.trim();

      // Check if colors array is provided and has colors
      if (colors.length > 0) {
        // Set the background color based on the colors array
        const colorIndex = index % colors.length;
        const color = colors[colorIndex];
        col.style.backgroundColor = color;
        css = `${css}background-color: ${color};`;
      }

      return { width, css, content };
    });

    return columns;
  });
  
  const compatibleStructure = parsedStructure.map(row => [ ...row ]); 

  if (colors.length > 0) {
    while (compatibleStructure[0].length > colors.length) {
      compatibleStructure.forEach(row => {
        const lastCol = row.pop();
        row.unshift(lastCol);
      });
    }
  }

  return compatibleStructure;
  
}

function applyColorsToColumns(colors) {
  const columns = document.querySelectorAll('.col');
  const numColumns = columns.length;

  for (let i = 0; i < numColumns; i++) {
    const colorIndex = i % colors.length;
    const color = colors[colorIndex];
    columns[i].style.backgroundColor = color;
  }
}

function saveStructure() {
  //const compatibleStructure = parseBodyElements();
  //updateLocalStorage('currentRows', compatibleStructure);
}

function parseLayoutStructure(structure) {
  const draggableElements = Array.from(document.querySelectorAll('.placeholder .draggable'));
  const draggableCount = draggableElements.length;
  
  let currentRow = 0;
  let currentCol = 0;

  draggableElements.forEach((draggable) => {
    removeResizableHandles(draggable);
    structure[currentRow][currentCol].css = getColCss(draggable, structure[currentRow][currentCol].css);
    structure[currentRow][currentCol].content = structure[currentRow][currentCol].content + draggable.outerHTML;

    if (structure[currentRow][currentCol + 1]) {
      currentCol++;
    } else {
      currentCol = 0;
      if (structure[currentRow + 1] && structure[currentRow + 1][0]) {
        currentRow++;
      } else {
        currentRow = 0;
      }
    }
  });

  function getColCss(draggable, currentCss) {
    if (currentCss.indexOf('background-color') > -1) {
      return currentCss;
    }

    const col = draggable.closest('.col');
    if (col) {
      const color = getComputedStyle(col).backgroundColor;
      return `${currentCss}background-color: ${color};`;
    }

    return currentCss;
  }

  function removeResizableHandles(draggable) {
    const resizableHandles = Array.from(draggable.querySelectorAll('.ui-resizable-handle'));
    resizableHandles.forEach((handle) => {
      handle.parentNode.removeChild(handle);
    });
  }

  return structure;
}
