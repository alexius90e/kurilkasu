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
