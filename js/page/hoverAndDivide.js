function addHoverAndDivide(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    element.addEventListener("mousemove", mousemoveListener);
    element.addEventListener("mouseleave", mouseleaveListener);
  });
}

function removeHoverAndDivide(className) {
  const elements = document.querySelectorAll(className);

  elements.forEach(element => {
    element.removeEventListener("mousemove", mousemoveListener);
    element.removeEventListener("mouseleave", mouseleaveListener);
    removeHoverLine(element); 
    removeDivideLine(element); 
  });
}

function mousemoveListener(event) {
  const element = event.target;
  const rect = element.getBoundingClientRect();
  const middleX = rect.left + rect.width / 2 - window.pageXOffset;
  const middleY = rect.top + rect.height / 2 - window.pageYOffset;
  const threshold = 30;
  const skip = element.classList.contains('tooltip') || element.closest('.tooltip') || element.classList.contains('hover-line') || element.closest('.hover-line');
  if (skip) {
    return;
  }

  let hoverDiv = element.hoverLine; 

  if (Math.abs(event.clientX - middleX) <= threshold && !hoverDiv) {
    hoverDiv = createHoverLine(element, "vertical-line");
    hoverDiv.addEventListener("click", () => divideElement(element, hoverDiv, "vertical"));
    element.hoverLine = hoverDiv; // Store the created hover line
  } else if (Math.abs(event.clientY - middleY) <= threshold && !hoverDiv) {
    hoverDiv = createHoverLine(element, "horizontal-line");
    hoverDiv.addEventListener("click", () => divideElement(element, hoverDiv, "horizontal"));
    element.hoverLine = hoverDiv; // Store the created hover line
  } else if (Math.abs(event.clientX - middleX) > threshold || Math.abs(event.clientY - middleY) > threshold) {
    if (hoverDiv) {
      removeHoverLine(hoverDiv);
      element.hoverLine = null; 
    }
  }
}

function mouseleaveListener(event) {
  const element = event.target;
  const hoverDiv = element.hoverLine;

  if (hoverDiv) {
    removeHoverLine(hoverDiv);
    element.hoverLine = null;
  }
}

function createHoverLine(element, lineClass) {
  const hoverDiv = document.createElement("div");
  hoverDiv.className = `hover-line ${lineClass}`;

  if (!currentViewEdit) {
    hoverDiv.classList.add('invisible');
  }
  element.appendChild(hoverDiv);
  return hoverDiv;
}

function removeHoverLine(hoverDiv) {
  document.querySelectorAll('.hover-line').forEach(element => element.remove());
  hoverDiv.remove();
}

function divideElement(element, hoverDiv, direction) {
  event.stopPropagation();
  removeHoverLine(hoverDiv); // Remove hover line from divided element
  const childCols = element.querySelectorAll(".col");

  if (childCols.length > 0) {
    console.log("childs", childCols);
    return;
  }

  let col1 = null;
  let col2 = null;
  let row1 = null;
  let row2 = null;
  let target = null;
  let childrenElms = null;
  const parentCol = element.closest(".col");
  parentCol.classList.remove('placeholder');
  if (hasChildren(parentCol)) {
    childrenElms = moveChildren(parentCol);
  }
  if (direction === "vertical") {
    col1 = getCol();
    col2 = getCol();
    row1 = getRow();
    col1.id = app.generateRandomString(8);
    col2.id = app.generateRandomString(8);
    row1.style.height = "100%";
    row1.style.width = "100%";
    col1.style.width = "50%";
    col2.style.width = "50%";
    col1.style.height = "100%";
    col2.style.height = "100%";
    row1.appendChild(col1);
    row1.appendChild(col2);
    parentCol.innerHTML = '';
    parentCol.appendChild(row1);
    target = '.row';
  } else if (direction === "horizontal") {
    col1 = getCol();
    col2 = getCol();
    col1.id = app.generateRandomString(8);
    col2.id = app.generateRandomString(8);
    row1 = getRow();
    row2 = getRow();
    row1.appendChild(col1);
    row2.appendChild(col2);
    row1.style.height = "50%";
    row1.style.width = "100%";
    row2.style.width = "100%";
    row2.style.height = "50%";
    col1.style.width = "100%";
    col1.style.height = "100%";
    col2.style.width = "100%";
    col2.style.height = "100%";
    parentCol.innerHTML = '';
    parentCol.appendChild(row1);
    parentCol.appendChild(row2);
    target = '.row';
  }
  if (childrenElms) {
    col1.appendChild(childrenElms);
  }
  parentCol.removeEventListener("mousemove", mousemoveListener); // Remove event listener from divided element
  parentCol.removeEventListener("mouseleave", mouseleaveListener); // Remove event listener from divided element

  col1.addEventListener("mousemove", mousemoveListener);
  col1.addEventListener("mouseleave", mouseleaveListener);
  col2.addEventListener("mousemove", mousemoveListener);
  col2.addEventListener("mouseleave", mouseleaveListener);

  currentPlaceholderPosition = col1.id;

  updatePlaceholders([col1, col2]);

  saveToDb(localPlaceholderKey, currentPlaceholderPosition);

  reloadScripts();
}

function removeDivideLine(element) {
  const divideLine = element.divideLine; // Retrieve the stored divide line

  if (divideLine) {
    divideLine.remove();
    element.divideLine = null; // Remove the stored divide line reference
  }
}

const getRow = () => {
  const div = document.createElement('div');
  div.className = "row draggable resizable sortable";
  return div;
}

const getCol = () => {
  const div = document.createElement('div');
  div.className = "col draggable resizable sortable placeholder";
  return div;
}

function hasChildren(element) {
  return element.hasChildNodes();
}

function moveChildren(element) {
  const clonedChildren = [];

  while (element.firstChild) {
    const clonedChild = element.firstChild.cloneNode(true);
    clonedChildren.push(clonedChild);
    element.removeChild(element.firstChild);
  }

  const fragment = document.createDocumentFragment();
  clonedChildren.forEach(child => {
    fragment.appendChild(child);
  });

  return fragment;
}
