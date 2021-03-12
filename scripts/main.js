const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.header__about-link');
const popupCloseButton = popup.querySelector('.popup__close-button');
const imageBlock = popup.querySelector('.popup__image-block');
const imageOpenButton = popup.querySelector('.popup__image-link');
const imageCloseButton = popup.querySelector('.popup__close-button_small');

const openPopup = () => {
  popup.classList.add('popup_opened');
}

const closePopup = () => {
  popup.classList.remove('popup_opened');
}

const openImage = () => {
  imageBlock.classList.add('popup__image-block_opened');
  imageOpenButton.classList.add('popup__image-link_hidden');
}

const closeImage =() => {
  imageBlock.classList.remove('popup__image-block_opened');
  imageOpenButton.classList.remove('popup__image-link_hidden');
}

popupOpenButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
imageOpenButton.addEventListener('click', openImage);
imageCloseButton.addEventListener('click', closeImage);
