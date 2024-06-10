var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 850) {
      navLinks.classList.remove('active');
  }
});

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background" , "blue");
    } else {
      $(".navbar").css("background" , "rgba(255, 255, 255, 0.5)"); 
    }
  });
});



gsap.to(".navbar", {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom top",
    scrub: true
  },
  backgroundColor: "rgba(255, 255, 255, 0.5)" // Adjust the background color as needed
});