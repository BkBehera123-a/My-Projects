window.addEventListener('scroll', function() {
  var navbar = document.querySelector('header');
  var logoText = document.getElementById('logo-text');
  var logoImg = document.getElementById('logo-img');

  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#3399ff';
    logoText.style.display = 'NONE';
    logoImg.style.display = 'block';
  } else {
    navbar.style.backgroundColor = 'transparent';
    logoText.style.display = 'inline';
    logoImg.style.display = 'none';
  }
});

document.getElementById('menu-icon').addEventListener('click', function() {
  document.querySelector('ul').classList.toggle('show');
});

function animateElement(element, start, end) {
  gsap.from(element, {
    y: start,
    yEnd: end,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: ".part-2",
      start: "0%, 50%",
      end: "50%, 50%",
      
      scrub: true,
    },
  });
}




// Call the animateElement function for each element
animateElement("#one", "100vh", "-50vh");
animateElement("#two", "100vh", "-50vh");
animateElement("#three", "50vh", "0vh");
animateElement("#four", "100vh", "-50vh");
animateElement("#five", "100vh", "-50vh");

// Animation for "rewards for paying credit card bills" section
gsap.from('.part1', {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
});

