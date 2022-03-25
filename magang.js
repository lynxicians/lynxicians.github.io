const icon = document.querySelector('.search-icon');
const input = document.querySelector('.search-input');
const container = document.querySelector('.search');

icon.addEventListener('click', () => {
  if (!input.classList.contains('input-open')) {
    input.classList.add('input-open');
    container.classList.add('search-open');
    icon.classList.remove('search-icon');
    icon.classList.add('icon-open');
  } else {
    input.classList.remove('input-open');
    container.classList.remove('search-open');
    icon.classList.remove('icon-open');
    icon.classList.add('search-icon');
  }
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

document.getElementById('span').addEventListener('click', function () {
  document.getElementById('container').classList.toggle('active');
});

document.getElementById('more').addEventListener('click', function () {
  document.getElementById('container2').classList.toggle('active');
});
