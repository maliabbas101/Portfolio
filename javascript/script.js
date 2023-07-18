window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  var secondSection = document.getElementById('about');

  if (secondSection && window.scrollY >= secondSection.offsetTop) {
    navbar.classList.add('show-navbar');
  } else {
    navbar.classList.remove('show-navbar');
  }
});
