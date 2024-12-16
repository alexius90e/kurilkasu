import './custom-select.js';

const headerSearch = document.querySelector('.header__search');
const headerSearchInput = document.querySelector('.header__search-form-input');

if (headerSearch && headerSearchInput) {
  headerSearchInput.addEventListener('input', (event) => {
    if (event.currentTarget.value) {
      headerSearch.classList.add('active');
    } else {
      headerSearch.classList.remove('active');
    }
  });

  headerSearch.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    if (isLayout) {
      headerSearch.classList.remove('active');
    }
  });
}

const headerBurger = document.querySelector('.header__burger');

if (headerBurger) {
  headerBurger.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isButton = event.target.classList.contains('header__burger-button');

    if (isLayout) headerBurger.classList.remove('active');
    if (isButton) headerBurger.classList.toggle('active');
  });
}

const headerLocation = document.querySelector('.header__location');

if (headerLocation) {
  headerLocation.addEventListener('click', (event) => {
    const isLayout = event.currentTarget === event.target;
    const isButtonLocation = event.target.classList.contains('header__location-button');
    const isButtonOk = event.target.classList.contains('header__location-modal-buttons-ok');
    const isButtonChoose = event.target.classList.contains('header__location-modal-buttons-choose');

    if (isLayout) headerLocation.classList.remove('active');
    if (isButtonLocation) headerLocation.classList.add('active');
    if (isButtonOk) headerLocation.classList.remove('active');
    if (isButtonChoose) headerLocation.classList.remove('active');
  });
}

///

const searchResultCards = document.querySelectorAll('.search-result__card');

searchResultCards.forEach((card) => {
  const slider = card.querySelector('.swiper');
  if (slider) {
    const swiper = new Swiper(slider, {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
});

///

const modals = {
  basket: 'modal-basket',
  order: 'modal-order',
  city: 'modal-city',
  thanks: 'modal-thanks',
};

const modalElements = document.querySelectorAll('.modal');

modalElements.forEach((modal) =>
  modal.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;
    const isClose = event.target.classList.contains('modal__close');
    if (isLayout || isClose) event.currentTarget.classList.remove('active');
  })
);

function openModal(modalClassName) {
  const modal = document.querySelector(`.${modalClassName}`);
  if (modal) modal.classList.add('active');
}

function closeModal(modalClassName) {
  const modal = document.querySelector(`.${modalClassName}`);
  if (modal) modal.classList.remove('active');
}

const headerBasketButton = document.querySelector('.header__basket-button');

if (headerBasketButton)
  headerBasketButton.addEventListener('click', () => openModal(modals.basket));

const chooseCityButton = document.querySelector('.header__location-modal-buttons-choose');

if (chooseCityButton)
  chooseCityButton.addEventListener('click', () => openModal(modals.city));

const basketOrderButton = document.querySelector('.modal-basket__controls-order');

if (basketOrderButton) basketOrderButton.addEventListener('click', () => {
  closeModal(modals.basket)
  openModal(modals.order)
});

const orderSubmitButton = document.querySelector('.modal-order__form-submit-button');

if (orderSubmitButton) orderSubmitButton.addEventListener('click', () => {
  closeModal(modals.order)
  openModal(modals.thanks)
});
