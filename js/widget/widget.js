
function setupAutoComplete(){
  const mainTextarea = document.getElementById('data-input');
  mainTextarea.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value;
    const searchType = event.target.dataset.type;

    updateDropdownMenu(searchTerm, searchType);
  });
}

function showSelectedCount(){
  const num = activeFields.length;
  const containerElement = document.querySelector('.numSelected-container');
  const valElement = document.querySelector('.numSelected');

  if(num > 0){ 
    containerElement.classList.remove('hidden');
    valElement.innerHTML = num;
  }else{
    containerElement.classList.add('hidden');
    valElement.innerHTML = 0;
  }
}

function clearDropDownMenu(){
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.innerHTML = '';
}

async function updateDropdownMenu(searchTerm, searchType) {
  const container = document.getElementById('controls-container');
  const dropdownMenu = document.getElementById('dropdown-menu');
  let filteredObjects = [];

  if(searchType === 'media' && searchTerm){
    clearDropDownMenu();
    dropdownMenu.classList.add('media-items');
    filteredObjects = await filterMediaObjects(searchTerm);
    loadDropDownResults(filteredObjects, searchType);
  } else {
    dropdownMenu.classList.remove('media-items');
  }
  if(searchType === 'fields' && searchTerm) {
    filteredObjects = filterFieldObjects(searchTerm);
    container.addEventListener('click', handleDropDownItemClick);
    loadDropDownResults(filteredObjects, searchType);
  }
  if(searchType === 'tools' && searchTerm){
    filteredObjects = filterSettingsObjects(searchTerm);

    loadDropDownResults(filteredObjects, searchType);
  }
  if(searchType === 'tools'){
    showTools();

  }
  if(searchType === 'map'){}
  if(searchType === 'view'){}
  if(searchType === 'broadcast'){}
}

function filterSettingsObjects(searchTerm) {
  const uniqueValues = new Set();
  return settingObj.filter(obj => {
    if (typeof obj.value === 'string') {
      const lowercaseValue = obj.value.toLowerCase();
      if (!uniqueValues.has(lowercaseValue) && lowercaseValue.startsWith(searchTerm.toLowerCase())) {
        uniqueValues.add(lowercaseValue);
        return true;
      }
    }
    return false;
  });
}

function showTools(){
  const div = document.createElement('div');
  tools.forEach((tool) => {
    let row = document.createElement('div');
    row.textContent = tool;
    let content = createToolSlider(tool);
    row.appendChild(content);
    row.dataset.tool = tool;
    row.className = 'tool-row';
    
    div.appendChild(row);
  });
  const dropdownMenu = document.getElementById('dropdown-menu');
  dropdownMenu.appendChild(div);
}

function loadDropDownResults(filteredObjects, searchType){
  const dropdownMenu = document.getElementById('dropdown-menu');
  clearDropDownMenu();
  let li = '';
  filteredObjects.forEach(field => {
    if(searchType === 'tools'){
      li = generateToolItem(field);
    }else if(searchType === 'media'){
      li = generateMediaItem(field);
    }else{
      li = generateDropdownItem(field);
    }
    dropdownMenu.appendChild(li);
  });
}

function generateToolItem(setting){
  const dummyElements = [`<input type="range" />`, `<input type="checkbox">`, `<input type="text" />`];
  const randomElement = dummyElements[Math.floor(Math.random() * dummyElements.length)];
  const li = document.createElement('li');
  const control = document.createElement('div');
  const value = document.createElement('div');
  const element = document.createElement('div');
  const type = document.createElement('div');
  control.innerHTML = randomElement;
  li.className = 'setting-row';
  value.textContent = setting.value;
  type.textContent = setting.type;
  element.textContent = setting.element;
  li.appendChild(value);
  li.appendChild(control);
  return li;
}

function generateMediaItem(field){
  const li = document.createElement('li');
  const img = document.createElement('img');
  img.src = field.thumb_url;
  img.title = field.description + ' ' + field.alt_description;
  img.dataset.id = field.id;
  img.dataset.full = field.full_url;
  img.dataset.thumb = field.thumb_url;
  img.addEventListener("click", handleImageClick);
  li.appendChild(img);

  return li;
}

function handleImageClick(event){
      textToMediaToggle(event.target.dataset.thumb);
      event.target.classList.add('selected');
}

function generateDropdownItem(field){
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener("click", handleCheckBoxClick);
    const span = document.createElement('span');
    li.title = field.label;
    span.textContent = field.label;
    li.appendChild(span);
    li.dataset.key = Object.keys(fieldObjects).find(key => fieldObjects[key] === field);
    li.appendChild(checkbox);

    return li;
}

function handleDropDownItemClick(event) {
  if(event.target.tagName === 'INPUT'){
    return;
  }
  if (event.currentTarget.contains(event.target) && (event.target.tagName !== 'LI' || event.target.tagName !== 'SPAN')) {
    const targetElement = event.target.tagName === 'LI' ? event.target : event.target.closest('li');
    if(!targetElement){
      return;
    }
    targetElement.classList.toggle('active');
    tooggleChildList(targetElement);
    toggleCheckbox(targetElement);
  }
}

function tooggleChildList(targetElement){
  if(targetElement.parentNode.classList.contains('sublist')){
    return;
  }
  if(targetElement.querySelector('ul')){
    const ul = targetElement.querySelector('ul');
    ul.classList.toggle('hidden');
    return;
  }
  const ul = document.createElement('ul');
  ul.className = 'sublist';
  const key = targetElement.dataset.key;
  const currentObject = fieldObjects[key];
  const keys = Object.keys(fieldObjects);
  keys.forEach((subkey) => {
    let field = fieldObjects[subkey];
    if(hasMatchingElements(field.categories, currentObject.categories) && subkey !== key){
      let sublist = generateDropdownItem(field);
      ul.appendChild(sublist);
    }
  });
  targetElement.appendChild(ul);
};

function checkboxClickedHandler(state, key){
      const field = fieldObjects[key];
      state ? activeFields.push(field) : activeFields.splice(activeFields.indexOf(field), 1);
      showSelectedCount();
      textToFieldToggle(field, state, key);
}

function handleCheckBoxClick(event){
  const targetElement = event.target.closest('li');
  targetElement.classList.toggle('active');
  checkboxClickedHandler(event.target.checked, targetElement.dataset.key);
}

function toggleCheckbox(targetElement){
  const sublist = targetElement.querySelector('ul');
    const checkbox = targetElement.querySelector('input');
  if(sublist && checkbox.checked){
    return;
  }
    checkbox.checked = !checkbox.checked;
    if(checkbox.checked){
      checkboxClickedHandler(checkbox.checked, targetElement.dataset.key);
    }
}

function hasMatchingElements(array1, array2) {
  return array1.some(item => array2.includes(item));
}