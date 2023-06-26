function setupListeners(){

const textarea = document.getElementById("data-input");
if(!textarea){
  return;
}
textarea.addEventListener("keydown", function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    //event.preventDefault(); // Prevent the default behavior of the Enter key (e.g., line break)
    convertData();
  }
});

// Add event listener for the paste event
textarea.addEventListener('paste', handlePaste);

// Handle the paste event
function handlePaste(event) {
  // Prevent the default paste behavior
  //event.preventDefault();
  convertData();
}

// Get the textarea or text input element
const inputElement = document.getElementById('data-input');

// Event listener for input event (new line)
inputElement.addEventListener('input', () => {
  autoGrow(inputElement);
});

// Event listener for paste event (pasting multiple lines)
inputElement.addEventListener('paste', () => {
  setTimeout(() => {
    autoGrow(inputElement);
  }, 0);
});
}
setupListeners();