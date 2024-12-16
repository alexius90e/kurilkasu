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