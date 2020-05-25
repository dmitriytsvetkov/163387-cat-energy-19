var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var catalogBtn = document.querySelectorAll('.product-card__link');
var showMoreBtn = document.querySelector('.show-more-block__show-all');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed')
  }
})

for (var i = 0; i < catalogBtn.length; i++) {
  catalogBtn[i].addEventListener('click', function openPopup(evt) {
    evt.preventDefault();
    alert('Модальное окно');
  })
}

showMoreBtn.addEventListener('click', function getProducts(evt) {
  evt.preventDefault();
  alert('Ajax загрузка товаров');
})
