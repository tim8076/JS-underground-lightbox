const images = [
  'https://images.unsplash.com/photo-1540428562593-4d82f4083688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1522162363424-d29ded2ad958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
  'https://images.unsplash.com/photo-1540153448870-af780343526e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1500479694472-551d1fb6258d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1501707305551-9b2adda5e527?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1153&q=80',
  'https://images.unsplash.com/photo-1551725301-5183dc1dbb83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
];

const gridContainer = document.querySelector('[data-grid-container]');
const modal = document.querySelector('[data-modal]');
const modalCloseButton = document.querySelector('[data-modal-close-btn]');
const modalImage = document.querySelector('[data-modal-image]');
const imageNumber = document.querySelector('[data-modal-image-number]');
const leftButton = document.querySelector('[data-modal-left-button]');
const rightButton = document.querySelector('[data-modal-right-button]');
let currentImageIndex = 0;


function createImageElem(imgSrc) {
  const gridItem = document.createElement('div');
  const imgBox = document.createElement('div');
  const img = document.createElement('img');
  img.setAttribute('src', imgSrc);
  img.classList.add('image');
  imgBox.classList.add('imgBox');
  gridItem.classList.add('grid-item');
  imgBox.append(img);
  gridItem.append(imgBox);
  return gridItem;
}

function loadImages() {
  images.forEach((img) => {
    const gridItem = createImageElem(img);
    gridContainer.append(gridItem);
  })
}

function setImageNumber(num) {
  imageNumber.innerText = num + 1;
}

gridContainer.addEventListener('click', (e) => {
  if (e.target.matches('.image')) {
    const imgSrc = e.target.getAttribute('src');
    const imgIndex = images.findIndex((img) => img === imgSrc);
    currentImageIndex = imgIndex;
    setImageNumber(currentImageIndex);
    modal.classList.add('open');
    modalImage.setAttribute('src', images[currentImageIndex]);
  }
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('open');
});

leftButton.addEventListener('click', () => {
  if (currentImageIndex === 0) {
    currentImageIndex = images.length - 1;
  } else {
    currentImageIndex -= 1;
  }
  setImageNumber(currentImageIndex);
  modalImage.setAttribute('src', images[currentImageIndex]);
})

rightButton.addEventListener('click', () => {
  if (currentImageIndex >= images.length - 1) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }
  setImageNumber(currentImageIndex);
  modalImage.setAttribute('src', images[currentImageIndex]);
})

// 初始化
function init() {
  loadImages();
}
init();
