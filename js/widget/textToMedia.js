function textToMediaToggle(url){
  const targetElementId = currentPlaceholderId;
  const targetElement = document.getElementById(targetElementId);

  if (!targetElement) {
    console.error('Target element not found');
    return;
  }

  addImage(targetElement, url);

}

function addImage(targetElement, url){
  const img = new Image();
  targetElement.classList.toggle('loading');
  img.onload = () => {
    const container = document.createElement('div');
    container.classList.add('draggable', 'resizable', 'sortable');
    const img = document.createElement('img');
    img.src = url;
    img.className = 'rendered';
    container.appendChild(img);
    targetElement.appendChild(container);
    targetElement.classList.toggle('loading');
    reloadScripts()
  };

  img.onerror = () => {
    console.error('Error loading image:', url);
  };
  img.src = url;

}

function addImageBackground(targetElement, url) {
  const img = new Image();
  targetElement.classList.toggle('loading');
  img.onload = () => {
    targetElement.style.backgroundImage = `url('${url}')`;
    targetElement.classList.toggle('loading');
  };

  img.onerror = () => {
    console.error('Error loading image:', url);
  };
  img.src = url;
}

function expandShrinkImage(event){
  event.target.classList.toggle('expanded');
}

function refreshImageListeners(){
  const images = document.querySelectorAll('.placeholder img');/*
  images.forEach((image) => {
    image.addEventListener('click', handleImageClick);
  });
*/
  function setWidth(img){
    const width = img.naturalWidth;
    img.style.width = width+'px';
  }

  function handleImageClick(event){
    const img = event.currentTarget;
    if(!img.dataset.naturalWidth){
      img.dataset.naturalWidth = img.naturalWidth;
      img.style.width = img.dataset.naturalWidth + 'px';
    }
    const sizeModifiers = ['25%','10%', 1];
    img.dataset.sizeIndex = typeof img.dataset.sizeIndex !== 'undefined' ? parseInt(img.dataset.sizeIndex) : 0;
    const newWidth = typeof sizeModifiers[img.dataset.sizeIndex] === 'string' ? sizeModifiers[img.dataset.sizeIndex] : (parseInt(img.dataset.naturalWidth) * sizeModifiers[img.dataset.sizeIndex]) + 'px';
    console.log("newWidth", newWidth);
    img.dataset.sizeIndex = sizeModifiers[parseInt(img.dataset.sizeIndex) + 1] ? parseInt(img.dataset.sizeIndex) + 1 : 0;
    img.style.width = newWidth;
  }
}