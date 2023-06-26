

const unsplashQueryPrompts = ['trending', 'amazing', 'beautiful', 'professional', 'abtract', 'transparent'];

  const alignmentCssList = [`display:flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;`,
                            `display:flex; flex-direction: row; justify-content: center; align-items: center;`, 
                            `display:flex; flex-direction: column; justify-content: center; align-items: center;`, 
                            `display:flex; flex-direction: row; justify-content: space-around; align-items: flex-start;`, 
                            `display:flex; flex-direction: row; justify-content: space-around; align-items: center;`, 
                            `display:flex; flex-direction: row; justify-content: space-around; align-items: flex-end;`, 
                            `display:flex; flex-direction: column; justify-content: flex-end; align-items: space-around;`, 
                            `display:flex; flex-direction: column; justify-content: center; align-items: space-around;`, 
                            `display:flex; flex-direction: column; justify-content: flex-start; align-items: space-around;`];

  const imageShapeCssList = ['border-radius: 75px;', 
                             'border-radius: 50%; width: 300px; height: 300px;',
                             'border-radius: 0; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);width: 300px; height: 300px;',
                             'border-radius: 0; clip-path: none;'];

  const inlineCssMap = {
    eventAlign: alignmentCssList,
    eventImageShape: imageShapeCssList
  };

  const menuIconMap = {
    input: [
      { class: 'fas fa-retweet', key: 'event-input-reload' },
      { class: 'fas fa-copy', key: 'event-input-copy' },
      { class: 'fas fa-comment-dots', key: 'event-input-comment' }
    ],
    image: [
      { class: 'fa-solid fa-shapes', key: 'event-image-shape' },
      { class: 'fa-solid fa-retweet', key: 'event-image-reload' },
      { class: 'fas fa-copy', key: 'event-image-copy' },
      { class: 'fa-solid fa-trash', key: 'event-image-delete' },
      { class: 'fas fa-comment-dots', key: 'event-image-comment' }
    ],
    placeholder: [
      { class: 'fa-solid fa-align-left', key: 'event-align' },
      { class: 'fas fa-border-all', key: 'event-borders' },
      { class: 'fas fa-palette', key: 'colors' },
      { class: 'fas fa-copy', key: 'copy' },
      { class: 'fas fa-comment-dots', key: 'event-comment' }
    ],
    align: [],
    colors: [
      { class: 'fa fa-font', key: 'event-font' },
      { class: 'fa-regular fa-square', key: 'event-background-color' },
      { html: `<input onchange="handleColorChange(event)" type="color" />`, key: 'event-color-picker' }
    ],
    borders: [],
    copy: [
      { text: 'duplicate', key: 'event-copy-to-self' },
      { text: 'replace', key: 'event-copy-to-all' }
    ],
    comment: []
  };

  const primaryMenuItems = ['input', 'image', 'placeholder'];

  const autoColorsList = ['#BDA784', '#F9AA7B', '#694D24', '#7688A1', '#525174', '#000000'];

function handleColorChange(event){
  const color = event.target.value;
  const placeholder = document.getElementById(currentPlaceholderId);
  placeholder.style.backgroundColor = color;
}

function setupTooltip() {
  const placeholders = document.querySelectorAll('.placeholder');
  placeholders.forEach((placeholder) => {
    placeholder.addEventListener('click', handlePlaceholderClick);
  });
}

function handlePlaceholderClick(event) {
  //if (event.target !== event.currentTarget) return;
  event.stopPropagation();
  if (!event.currentTarget.classList.contains('active')) return;
  if (currentTooltip || currentSubTooltip) {
    clearTooltip(event.currentTarget);
    return;
  }
  const key = event.target.tagName === 'IMG' ? 'image' : event.target.tagName === 'LABEL' || event.target.tagName === 'INPUT' ? 'input' : 'placeholder';
  if(key === 'image' || key === 'input'){
    activeElement = event.target;
  }
  addToolTip(event, key);
}

function addToolTip(event, key) {
  const allowedKeys = ['placeholder', 'image', 'colors', 'copy', 'input'];
  if (allowedKeys.indexOf(key) === -1) {
    return;
  }
  
  const container = document.body;
  const tooltip = createTooltip(key);
  
  container.appendChild(tooltip);
  positionTooltip(tooltip, container, event.clientX, event.clientY);
  tooltip.classList.add('show');
  if (key === 'placeholder' || key === 'image' || key === 'input') {
    currentTooltip = tooltip;
  } else {
    currentSubTooltip = tooltip;
  }
}

function createTooltip(key) {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  attachButtons(tooltip, key);
  if (key) {
    const className = primaryMenuItems.indexOf(key) === -1 ? 'sub-menu' : 'primary-menu';
    tooltip.classList.add(className);
    tooltip.classList.add('menu-' + key);
  }

  return tooltip;
}

function attachButtons(tooltip, key) {

  const iconsData = key ? menuIconMap[key] : menuIconMap.placeholder;

  for (const iconData of iconsData) {
    const { class: iconClass, key: buttonKey, text: textString, html } = iconData;

    const button = document.createElement('button');
    if (textString) {
      button.innerHTML = textString;
    } else if (html) {
      button.innerHTML = html;
    } else {
      const iconElement = document.createElement('i');
      iconElement.className = iconClass;
      button.appendChild(iconElement);
    }

    button.dataset.key = buttonKey;
    button.addEventListener('click', handleBtnClick);
    tooltip.appendChild(button);
  }
}

function handleBtnClick(event) {
  event.stopPropagation();
  const key = event.currentTarget.dataset.key;
  
  if (key === 'placeholder' || key === 'image') {
    if (currentSubTooltip) {
      currentSubTooltip.remove();
      currentSubTooltip = null;
    }
  } else {
    clearSubTooltip(currentSubTooltip, key);
    handleEvent(event, key);
    addToolTip(event, key);
  }
}

function clearSubTooltip(currentSubTooltip, key){
  
    if (currentSubTooltip) {
      currentSubTooltip.remove();
      currentSubTooltip = null;
    }
}

function handleEvent(event, key){
  const newKey = snakeToCamelCase(key);
  
  if(inlineCssMap[newKey]){
    appendInlineCss(event, newKey);
  }
  if(newKey === 'eventImageReload'){
    reloadActiveImage();
  }
  if(newKey === 'eventImageStyle'){
    restyleActiveImage();
  }
  if(newKey === 'eventImageCopy'){
    duplicateActiveImage();
  }
  if(newKey === 'eventImageDelete'){
    deleteActiveImage();
  }
  if(newKey === 'eventBackgroundColor'){
    changeBackgroundColor();
  }
}

function changeBackgroundColor(){
  const placeholder = document.getElementById(currentPlaceholderId);
  placeholder.style.backgroundColor = autoColorsList[Math.floor(Math.random() * autoColorsList.length)];

}

function deleteActiveImage(){
  clearTooltip(activeElement);
  const container = activeElement.closest('div');
  activeElement.remove();
  container.remove();
}

function duplicateActiveImage(){
  const placeholder = document.getElementById(currentPlaceholderId);
  addImage(placeholder, activeElement.src);
}

function restyleActiveImage(){}

async function reloadActiveImage(){
  const searchTerm = unsplashQueryPrompts[Math.floor(Math.random() * unsplashQueryPrompts.length)];
  const imgSearchResults = await filterMediaObjects(searchTerm, 1);
  activeElement.src = imgSearchResults[0].thumb_url;
}                                                

function appendInlineCss(event, key){
  let target = null;
  const currentListPosition = typeof event.currentTarget.dataset[key] !== 'undefined' ? event.currentTarget.dataset[key] : 0;
  const nextValue = inlineCssMap[key][parseInt(currentListPosition) + 1] ? parseInt(currentListPosition) + 1 : 0;
  event.currentTarget.dataset[key] = nextValue;
  if(key === 'eventAlign'){
    target = document.getElementById(currentPlaceholderId);
  }
  if(key === 'eventImageShape'){
    target = activeElement;
  }
  replaceInlineCss(target, inlineCssMap[key][currentListPosition])
}

function replaceInlineCss(target, cssString) {
  const cssRules = cssString.split(';').map(rule => rule.trim());
  const targetStyle = target.style;

  cssRules.forEach(cssRule => {
    const [property] = cssRule.split(':').map(rule => rule.trim());
    targetStyle[property] = '';
  });

  targetStyle.cssText += cssString;
}




function positionTooltip(tooltip, container, clientX, clientY) {
  const containerRect = container.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();

  const containerOffsetX = containerRect.left - window.pageXOffset;
  const containerOffsetY = containerRect.top - window.pageYOffset;
                       
  const x = clientX - 45;
  const y = clientY - 45;

  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function clearTooltip(element) {
  const tooltipParent = element.closest('.tooltip');
  if (tooltipParent) {
    return;
  }
  if (currentSubTooltip) {
    currentSubTooltip.remove();
    currentSubTooltip = null;
  }
  if (currentTooltip) {
    currentTooltip.remove();
    currentTooltip = null;
  }
}


function snakeToCamelCase(str) {
  return str.replace(/([-_]\w)/g, (match) =>
    match.charAt(1).toUpperCase()
  );
}
