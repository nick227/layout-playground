const specialElements = ['dateRangePicker'];

function textToFieldToggle(fieldData, state, key) {
  const targetElement = document.getElementById(currentPlaceholderId);

  if (!targetElement) {
    console.error('Target element not found');
    return;
  }

  if (!state) {
    removeField(targetElement, key);
    return;
  }

  const { element, type, label, options } = fieldData;
  const newElement = createFieldElement(element, type, key, options);

  if (label) {
    const labelElement = createLabelElement(label, newElement, key);
    targetElement.appendChild(labelElement);
  } else {
    targetElement.appendChild(newElement);
  }

  //addResizable();
  //setupDraggable();
    //saveStructure();
    reloadScripts()
}

function removeField(targetElement, key) {
  const existingField = targetElement.parentElement.querySelector(`label[data-key="${key}"]`);
  existingField.remove();
}

function createFieldElement(element, type, key, options) {
  let newElement;
  if (element === 'select') {
    newElement = createSelectElement(options);
  } else if (type === 'checkbox') {
    newElement = createCheckboxElement(options);
  } else if (type === 'radio') {
    newElement = createRadioElement(options);
  } else if (element === 'textarea') {
    newElement = createTextareaElement(key);
  } else if (specialElements.indexOf(element) > -1) {
    newElement = createSpecialElement(key);
  } else if (element === 'graphical') {
    newElement = createGraphicalElement(options);
  } else {
    newElement = createInputElement(type);
  }
  newElement.dataset.key = key;
  const container = document.createElement('div');
  container.classList.add('draggable', 'resizable', 'sortable', 'field-container');
  container.appendChild(newElement);
  return container;
}

function createCloseButton(){
	const button = document.createElement('div');
	button.textContent = 'x';
	button.className = 'close';
	button.addEventListener("click", handleElementRemoveClick);
	return button;
}

function handleElementRemoveClick(event) {
  const label = event.target.closest('label');
  const key = label.dataset.key;
  label.remove();
  updateControls(key)
}

function updateControls(key){
  const fieldData = fieldObjects[key];
  const fieldList = document.querySelector('ul#dropdown-menu');
  const li = fieldList.querySelector(`li[data-key="${key}"]`);
  const checkbox = li.querySelector('input');
  const state = false;
  checkbox.checked = state;
  li.classList.toggle('active');
  activeFields.splice(activeFields.indexOf(fieldData), 1);
  showSelectedCount();
}


function createSpecialElement(key){
  const elements = {
    dateRangePicker: dateRangePicker.createDateRangePicker
  };
  return elements[key]();
}

function createInputElement(type) {
  const newElement = document.createElement('input');
  newElement.type = type;
  return newElement;
}

function createTextareaElement(key){
  const newElement = document.createElement('textarea');
  return newElement;
}

function createSelectElement(options) {
  const newElement = document.createElement('select');
  if (Array.isArray(options)) {
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.text = option;
      newElement.add(optionElement);
    });
  }
  return newElement;
}

function createGraphicalElement(options) {
  const containerElement = document.createElement('div');
  containerElement.classList.add('graphical-choice');

  options.forEach((option) => {
    const label = option[0];
    const defaultImageUrl = option[1];
    const preloadImageUrl = option[2];

    const labelElement = document.createElement('label');
    labelElement.textContent = label;

    const imageElement = document.createElement('img');
    imageElement.src = defaultImageUrl;

    // Preload the second image
    const preloadImage = new Image();
    preloadImage.src = preloadImageUrl;

    // Toggle the image source on click
    imageElement.addEventListener('click', () => {
      if (imageElement.src === defaultImageUrl) {
        imageElement.src = preloadImageUrl;
      } else {
        imageElement.src = defaultImageUrl;
      }
    });

    labelElement.appendChild(imageElement);
    containerElement.appendChild(labelElement);
  });

  return containerElement;
}

function createCheckboxElement(options) {
  const containerElement = document.createElement('div');
  containerElement.classList.add('checkbox-group');

  options.forEach((option) => {
    const labelElement = document.createElement('label');
    labelElement.textContent = option;
    const checkboxElement = document.createElement('input');
    checkboxElement.type = 'checkbox';
    checkboxElement.value = option;

    labelElement.appendChild(checkboxElement);

    containerElement.appendChild(labelElement);
  });

  return containerElement;
}

function createRadioElement(options) {
  const containerElement = document.createElement('div');
  containerElement.classList.add('radio-group');

  options.forEach((option) => {
    const labelElement = document.createElement('label');
    labelElement.textContent = option;
    const radioElement = document.createElement('input');
    radioElement.type = 'radio';
    radioElement.value = option;

    labelElement.appendChild(radioElement);

    containerElement.appendChild(labelElement);
  });

  return containerElement;
}

function createLabelElement(text, fieldElement, key) {
  const labelElement = document.createElement('label');
  labelElement.className = 'draggable';
  labelElement.textContent = text;
  labelElement.dataset.key = key
  
  labelElement.appendChild(fieldElement);
  labelElement.appendChild(createCloseButton());
  return labelElement;
}
