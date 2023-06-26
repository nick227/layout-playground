
function setupToolbar(){
  const localSearchType = checkFromDb(localSearchTypeKey);
  const toolbar = document.querySelector('.controls .toolbar-main');
  const btns = toolbar.querySelectorAll('button.search-type');
  btns[0].classList.add('active');
  btns.forEach((btn) => {
    btn.addEventListener('click', handleBtnClick);
    if(localSearchType === btn.dataset.type){
      clearActive();
      setPanelType(localSearchType);
      btn.classList.add('active');
      updateDropdownMenu('', localSearchType);
    }
  });

function handleBtnClick(event) {
  const searchType = event.currentTarget.dataset.type;
  setPanelType(searchType);
  saveToDb(localSearchTypeKey, searchType);
  clearActive();
  clearDropDownMenu();
  updateDropdownMenu('', searchType);
  event.currentTarget.classList.add('active');
}

function setPanelType(key){
  const mainTextarea = document.getElementById('data-input');
  mainTextarea.dataset.type = key;
  mainTextarea.value = '';
  mainTextarea.setAttribute('placeholder', lang[key]);
  clearActive();
}
function clearActive() {
  const toolbar = document.querySelector('.controls .toolbar-main');
  const btns = toolbar.querySelectorAll('button.search-type');
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
}
}