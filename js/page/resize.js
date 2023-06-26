function setupResizable() {
  const elements = document.querySelectorAll('div.col > div');
  elements.forEach((element) => {
    if(!element.closest('.controls')){
      element.classList.add('draggable', 'resizable', 'sortable', 'sectional');
    }
  });
  addResizable('.resizable', resizeStartCallback, resizeCallback, resizeStopCallback);
}

function addResizable(selector, startCallback, resizeCallback, stopCallback) {
  $(selector).resizable({
    start: startCallback,
    resize: resizeCallback,
    stop: stopCallback
  });
}

function resizeStartCallback(event, ui) {
  const img = event.target.querySelector('img');
  if(img){
    console.log("");
    img.classList.add('full');
  }
  

}

function resizeCallback(event, ui) {
  let resizedElement = ui.element;
  let children = resizedElement.find("p, h1, h2, h3, h4, h5, h6, label, input");
  updateChildrenCss(ui, children, updateElementFontSize);
}

function resizeStopCallback(event, ui) {
  saveStructure();
}

function disableSectionalResizable(selector, exclusionSelector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    if (!element.matches(exclusionSelector) && !element.closest(exclusionSelector)) {
      element.classList.remove('draggable', 'resizable', 'sortable');
    }
  });
}

function enableSectionalResizable(selector, exclusionSelector) {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    if (!element.matches(exclusionSelector) && !element.closest(exclusionSelector)) {
      element.classList.add('draggable', 'resizable', 'sortable');
    }
  });
}

function updateChildrenCss(ui, children) {

  children.each(function () {
    var element = $(this);

    if (element.is("input")) {
      updateInputSize(element, ui); 
    } else if (element.is("label")) {
      updateLabelFontSize(element, ui);
    } else {
      updateElementFontSize(element, ui);
    }
  });
}

function updateInputSize(input, ui) {
  var originalWidth = input.data("original-width") || input.width();
  var originalHeight = input.data("original-height") || input.height();
  var originalFontSize = input.data("original-font-size") || parseInt(input.css("font-size"), 10);

  var widthModifier = ui.size.width / originalWidth;
  var heightModifier = ui.size.height / originalHeight;
  var sizeModifier = Math.max(widthModifier, heightModifier);

  var newSize = Math.min(originalWidth, originalHeight) * sizeModifier;
  var fontSizeModifier = newSize / Math.min(originalWidth, originalHeight);

  var newFontSize = originalFontSize + Math.floor(fontSizeModifier * 15);

  input.data("original-width", originalWidth);
  input.data("original-height", originalHeight);
  input.data("original-font-size", originalFontSize);

  input.css("font-size", Math.max(originalFontSize, newFontSize) + "px");
}


function updateElementFontSize(element, ui) {
  var originalFontSize = element.data("original-font-size") || parseInt(element.css("font-size"), 10);

  var widthModifier = ui.size.width / ui.originalSize.width;
  var heightModifier = ui.size.height / ui.originalSize.height;
  var fontSizeModifier = Math.min(widthModifier, heightModifier);

  // Calculate the change in font size based on the pixel difference
  var pixelChange = Math.max(ui.size.width - ui.originalSize.width, ui.size.height - ui.originalSize.height);
  var newFontSize = originalFontSize + pixelChange * fontSizeModifier;

  element.css("font-size", newFontSize + "px");
}
