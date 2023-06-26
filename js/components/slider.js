
  function createSlider(containerElement) {
 
  const sliderContainer = document.createElement('div');
  sliderContainer.classList.add('slider-container');

  const sliderWrapper = document.createElement('div');
  sliderWrapper.classList.add('slider-wrapper');

  const sliderItems = [
    'https://picsum.photos/600/400?random=1',
    'https://picsum.photos/600/400?random=2',
    'https://picsum.photos/600/400?random=3',
    'https://picsum.photos/600/400?random=4',
    'https://picsum.photos/600/400?random=5',
    'https://picsum.photos/600/400?random=6',
    'https://picsum.photos/600/400?random=7',
    'https://picsum.photos/600/400?random=8',
    'https://picsum.photos/600/400?random=9',
    'https://picsum.photos/600/400?random=10',
    'https://picsum.photos/600/400?random=11',
    'https://picsum.photos/600/400?random=12',
    'https://picsum.photos/600/400?random=1',
    'https://picsum.photos/600/400?random=2',
    'https://picsum.photos/600/400?random=3',
    'https://picsum.photos/600/400?random=4'
  ];

  sliderItems.forEach(item => {
    const sliderItem = document.createElement('div');
    sliderItem.classList.add('slider-item');
    const image = document.createElement('img');
    image.src = item;
    image.alt = 'Image';
    sliderItem.appendChild(image);
    sliderWrapper.appendChild(sliderItem);
  });

  sliderContainer.appendChild(sliderWrapper);
  containerElement.appendChild(sliderContainer);

  const style = document.createElement('style');
  style.innerHTML = `
    .slider-container {
      overflow: hidden;
      height: 200px;
      width: 100%;
      position: relative;
    }

    .slider-wrapper {
      display: flex;
      height: 100%;
      transition: transform 0.5s ease;
      position: absolute;
    }

    .slider-item {
      flex: 0 0 25%;
      height: 100%;
      overflow: hidden;
      position: relative;
    }

    .slider-item img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .slider-item:nth-child(odd) {
      margin-top: 20px;
    }
  `;

  document.head.appendChild(style);

  let scrollTimeout;
  let scrollCounter = 0;
  const step = 1;

  function handleScroll(event) {
    event.preventDefault();
    const currentScrollPos = event.deltaY;
    const scrollDirection = currentScrollPos > 0 ? 'down' : 'up';
    scrollCounter += scrollDirection === 'up' ? 1 : -1;
    animateSlider(scrollDirection, scrollCounter);
  }

  function animateSlider(scrollDirection, scrollCounter) {
    const currentPosition = parseInt(sliderWrapper.style.left);
    const currentTransform = sliderWrapper.style.transform.substring(sliderWrapper.style.transform.indexOf("(")+1, sliderWrapper.style.transform.indexOf(")"));
    const pixelsToScroll = ((isNaN(currentPosition) ? 0 : currentPosition) + (scrollCounter * 50));
    const sliderWidth = sliderWrapper.offsetWidth;
    const imageWidth = sliderWrapper.offsetWidth;
    const maxScrollLeft = (sliderWrapper.children.length) * imageWidth;
    const minScrollLeft = 0;

    if(scrollCounter < 0 && maxScrollLeft > Math.abs(pixelsToScroll)){
      sliderWrapper.style.transform = `translateX(${pixelsToScroll + 'px'})`;
    }
  }

  window.addEventListener('wheel', handleScroll);
}

function setupSlider() {
  const elm = document.querySelector('#image-slider');
  if(elm){
    createSlider(elm);

  }
};