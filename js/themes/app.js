const app = {};

app.attachPageCss = function() {
  const styleElement = document.createElement('style');
  styleElement.textContent = dataObj.pageCss;
  document.head.appendChild(styleElement);
};

app.generateElement = function(type, className, css) {
  const elm = document.createElement(type);

  if (className === 'col') {
    elm.classList.add('placeholder');
    elm.classList.add('sortable');
    elm.id = app.generateRandomString(8);
  }

  elm.classList.add(className);

  if (css && css.length > 0) {
    app.applyCssToElm(elm, css);
  }
  
  return elm;
};

app.applyCssToElm = function(elm, css) {

  if (css && css.length > 0) {
    const cssProps = css.split(';');

    cssProps.forEach((prop) => {
      const trimmedProp = prop.trim();

      if (trimmedProp.length > 0) {
        const [key, val] = trimmedProp.split(':').map(part => part.trim());
        if (key && val) {
          elm.style[key] = val.replace(/"/g, '');
        }
      }
    });
  }
};

app.generateColumnCss = function(width, css) {
  return `width: ${width}; ${dataObj.cellCss} ${css}`;
};

app.generateRowCss = function() {
  return `${dataObj.rowCss}`;
};

app.addRow = function(rowData) {
  const body = document.querySelector('body');
  const row = app.generateElement('div', 'row', false);
  app.appendCols(row, rowData.columns);
  body.appendChild(row);
};

app.appendCols = function(row, colData) {
  colData.forEach(col => {
    const colElement = app.generateElement('div', 'col', col.css);
    colElement.innerHTML = col.content;
    row.appendChild(colElement);
  });
};

app.generateTemplate = function(structure) {
  return structure.map(rowStructure => {
    const columns = rowStructure.map(({ width, content, css }) => {
      return { width, content, css };
    });
    return { columns };
  });
};

app.generateRows = function(template) {
  return template.map(row => {
    const css = app.generateRowCss();
    const columns = row.columns.map(column => {
      const columnCss = app.generateColumnCss(column.width, column.css);

      return { content: column.content, css: columnCss };
    });
    return { css, columns };
  });
};

app.generateRandomString = function(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const characterLength = characters.length;

  let randomString = '';
  const randomValues = new Uint32Array(length);

  window.crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    randomString += characters[randomValues[i] % characterLength];
  }

  return randomString;
}

app.clearRows = function(){
  const rows = document.querySelectorAll('.row');
  rows.forEach((row) => {
    row.remove();
  });
}

app.init = function(structure){
  const body = document.querySelector('body');
  const template = app.generateTemplate(structure);
  const rows = app.generateRows(template);
  app.clearRows();
  rows.forEach(app.addRow);

}

const savedRows = JSON.parse(checkFromDb('currentRows'));
app.attachPageCss();
let template = null;
if(savedRows){
  app.init(savedRows);
}else{
  app.init(dataObj.structure);
}
