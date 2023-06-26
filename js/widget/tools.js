const toolSteps = {
  padding: 0.1,
  colors: 1,
  layout: 1,
  width: 1,
  height: 1
};

const toolMaxes = {
  padding: 200,
  colors: dataObj.colorProfiles.length-1,
  layout: Object.keys(dataObj.structures).length-1,
  width: window.innerWidth,
  height: window.innerHeight
};

const toolMins = {
  padding: 0,
  colors: 0,
  layout: 0,
  width: 0,
  height: 0
};

function createToolSlider(tool) {
  // Create the HTML elements for the slider
  var slider = document.createElement('input');
  slider.type = 'range';
  slider.min = toolMins[tool];
  slider.max = toolMaxes[tool];
  slider.value = 0;
  slider.step = toolSteps[tool];

  slider.addEventListener('change', function(event) {
    var value = parseInt(event.target.value, 10);

    toolEvents[tool](parseInt(value));
  });

  return slider;
}

const toolEvents = {
  padding: function(value){

    var placeholders = document.querySelectorAll('img');
    placeholders.forEach(function(placeholder) {
      var paddingValue = value * 0.75;
      console.log("paddingValue",paddingValue);
      placeholder.style.margin = paddingValue + 'px';
    });
    
    saveStructure();

  },
  colors: function(value){
    const key = dataObj.colorProfiles[value];
    const colors = Object.values(dataObj[key]);
    const newStructure = applyColorsToColumns(colors);
    //app.init(newStructure);
    //reloadScripts();
    //saveStructure();

  },
  layout: function(value){
    const key = Object.keys(dataObj.structures)[value];
    const structure = dataObj.structures[key];
    const structureObj = parseLayoutStructure(structure);
    app.init(dataObj.structures[key]);
    reloadScripts();
    //saveStructure();

  },
  width: function(value){
    updateCssValue(value, '.col', 'width');
  },
  height: function(value){
    updateCssValue(value, '.row', 'height');
  }
};

function updateCssValue(value, className, prop) {
  var items = document.querySelectorAll(className);
  items.forEach(function(item) {
    let currentVal = prop === 'width' ? item.offsetWidth : item.offsetHeight;
    if(!item.dataset.originalValue){
      item.dataset.originalValue = currentVal;
    }
    let newVal = (parseInt(item.dataset.originalValue) + value);
    item.style[prop] = newVal + 'px';
  });
}


function calculateRowHeights(layouts) {
  for (const layoutKey in layouts) {
    const layout = layouts[layoutKey];
    const numRows = layout.length;

    let totalHeight = 100;
    let rowHeight = totalHeight / numRows;

    for (const row of layout) {
      const numColumns = row.length;

      for (const column of row) {
        if (column.css) {
          column.css += ` min-height: ${rowHeight}vh;`;
        } else {
          column.css = `min-height: ${rowHeight}vh;`;
        }
      }
    }
  }

  return layouts;
}

// Usage example
const layout = {
  // layout objects here
};

const updatedLayout = calculateRowHeights(dataObj.structures);