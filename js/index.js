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
    console.log('header__burger')
    const isLayout = event.currentTarget === event.target;
    const isButton = event.target.classList.contains('header__burger-button');

    if (isLayout) headerBurger.classList.remove('active');
    if (isButton) headerBurger.classList.toggle('active');
  });
}
