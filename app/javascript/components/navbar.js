const navbarBurger = () => {
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li')
  const burger = document.querySelector('.burger');



  nav.classList.toggle('nav-active');
  navLinks.forEach((link, index) =>{
    if (link.style.animation) {
      link.style.animation = '';
    }
    else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
    }
  });
  burger.classList.toggle('burger-open');
}




const navBarOpacity = () => {
  const navBar = document.querySelector('.navigation');
  const navItems = document.querySelectorAll('.nav-item');
  const bannerHeader = document.querySelector('.banner-header');
  const logo = document.querySelector('.logo-aylin');

  

  if(window.pageYOffset >= (bannerHeader.offsetTop)){
    navBar.classList.add('scrolled')
    navItems.forEach((item) => {
      item.classList.add('scrolled-nav-item');
    })
    logo.classList.remove('hidden');
    bannerHeader.classList.add('hidden');
  }
  else
  {
    navBar.classList.remove('scrolled')
    navItems.forEach((item) => {
      item.classList.remove('scrolled-nav-item');
    })
    logo.classList.add('hidden');
    bannerHeader.classList.remove('hidden');
  }
};



const debounce = (func, wait = 20, immediate = true) => {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


export{navbarBurger};
export{navBarOpacity};