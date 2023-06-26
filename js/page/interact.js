function addClickToCells(){
  document.addEventListener('click', function(event) {
  const clickedElement = event.target.closest('.col');
  
  if (clickedElement && !event.target.closest('.col > *')) {
    if (clickedElement.classList.contains('selected')) {
      removeCellStyling(clickedElement);
    } else {
      removeCellStyling();
      addCellStyling(clickedElement);
    }
  }
});
}

function removeCellStyling(cell) {
  const cells = document.querySelectorAll('.col');
  cells.forEach(function(cell) {
    cell.classList.remove('selected');
  });
}

function addCellStyling(cell) {
  cell.classList.add('selected');
}

function setupViewChange(){
  const btn = document.querySelector('.view-change');
  btn.addEventListener('click', handleViewChange);
  const status = checkFromDb(localViewStatusKey);
  if(status){
    currentViewEdit = status;
    handleViewChange();
    btn.classList.add('active');
  }

}

function handleViewChange(){
  const body = document.querySelector('body');
  body.classList.toggle('grid-view');
    currentViewEdit = true;
    saveToDb(localViewStatusKey, true);
    event.currentTarget.classList.toggle('active');
}