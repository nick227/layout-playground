function updatePlaceholders(elements){
  elements.forEach((element) => {
    element.addEventListener('click', clickPlaceholder);
  });
}

function handlePlaceholders() {
  const placeholders = document.querySelectorAll('.placeholder');

  placeholders.forEach((placeholder) => {
    placeholder.addEventListener('click', clickPlaceholder);
  });

    setCurrentPlaceHolder();
}

function setCurrentPlaceHolder(){

  const placeholders = document.querySelectorAll('.placeholder');
  const savedPlaceholder = checkFromDb(localPlaceholderKey);
  if(savedPlaceholder && placeholders[savedPlaceholder]){
    currentPlaceholderId = placeholders[savedPlaceholder].id;
    placeholders[savedPlaceholder].classList.add('active');

  }else if(placeholders[defaultPlaceholderPosition]){
    currentPlaceholderId = placeholders[defaultPlaceholderPosition].id;
    placeholders[defaultPlaceholderPosition].classList.add('active');
  } else{
    currentPlaceholderId = placeholders[0].id;
    placeholders[0].classList.add('active');

  }

}

function clickPlaceholder(event){
  
    event.stopPropagation();

    if(event.currentTarget.classList.contains('active')){
      return false;
    }
    clearPlaceHolders(event);
    updatePlaceHolder(event);
    event.currentTarget.classList.toggle('active');
}

function hoverOutPlaceholder(event){
}

function hoverPlaceholder(event){
}

function clearPlaceHolders(event){
  const placeholders = document.querySelectorAll('.placeholder');
  placeholders.forEach((placeholder) => {
      placeholder.classList.remove('active');
  });
}

function updatePlaceHolder(event) {
  const placeholders = document.querySelectorAll('.placeholder');
  const currentPosition = Array.from(placeholders).indexOf(event.currentTarget);

  if (currentPosition !== -1) {
    currentPlaceholderId = placeholders[currentPosition].id;
    currentPlaceholderPosition = currentPosition;
    saveToDb(localPlaceholderKey, currentPosition);
  }
}