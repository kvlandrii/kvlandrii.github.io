let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carousel = document.querySelector('.carousel');

let count = 0;

nextBtn.addEventListener('click', () => {
  count++;
  carousel.style.transform = `translateX(-${count * 33.33}%)`;
  if (count > 2) {
    count = 0;
    carousel.style.transform = `translateX(0)`;
  }
});

prevBtn.addEventListener('click', () => {
  count--;
  carousel.style.transform = `translateX(-${count * 33.33}%)`;
  if (count < 0) {
    count = 2;
    carousel.style.transform = `translateX(-${count * 33.33}%)`;
  }
});


const burgerMenu = document.querySelector('.burger-menu');
const headLogo = document.getElementById('header_logo');
const headCart = document.getElementById('header_cart')

burgerMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  if(this.classList[1])
  {
    headLogo.style.display = 'none';
    headCart.style.display = 'none';
    burgerMenu.innerHTML = '&#9587;';
  }
  else
  {
    headLogo.style.display = 'contents';
    headCart.style.display = 'contents';
    burgerMenu.innerHTML = '&#9776;';
  }
});