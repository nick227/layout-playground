
async function showElements(selector) {
  const elements = document.querySelectorAll(selector);
  const shuffleArray = Array.from(elements).sort(() => Math.random() - 0.5);
  await shuffleArray.forEach(async (element, count) => {
  	setTimeout(() => {
    	element.classList.add('fade-in');
  	}, 24*count);
  });
  setTimeout(() => {
    const tag = document.querySelector('#preloader-css');
    if(tag){ tag.remove(); }
  }, 3000);
}
