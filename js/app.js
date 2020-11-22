const faqBoxes = Array.from(document.querySelectorAll('.faq-boxes li'));

faqBoxes.forEach(box => {
  box.onclick = e => {
    if (e.target.className == 'text-line' || e.target.parentElement.className == 'text-line') {
      e.target.parentElement.querySelector('.content').style.height = '100px';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('active')) {
      e.target.parentElement.querySelector('.content').style.height = '0px';
      e.target.classList.remove('active');
    }
    }
});

const openNav = document.querySelector('#open-nav');
const closeNav = document.querySelector('#close-nav');
const navList = document.querySelector('.nav-list');
const btns = document.querySelector('.btns');
let def = window.pageYOffset;


openNav.onclick = () => {
  navList.style.left = '0';
  closeNav.style.cssText = 'opacity: 1; pointer-events: auto;';
  window.onscroll = () => {
    scrollTo(0, def);
  }
  
}
closeNav.onclick = () => {
  navList.style.left = '-200vw';
  closeNav.style.cssText = 'opacity: 0; pointer-events: none;';
  window.onscroll = () => {
    scrollTo(0, window.pageYOffset);
  }
}

const showcaseHeader = document.querySelector('#showcase h1');
showcaseHeader.style.cssText = 'opacity: 0; position: relative; left: -50%; transition: all 0.5s; pointer-events: none;';
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    showcaseHeader.style.cssText = 'opacity: 1; position: relative; left: 0; transition: all 1s; pointer-events: auto;';
  }, 2000);
});

const cards = Array.from(document.querySelectorAll('#pricing .items .item'));
console.log(cards);

cards.forEach(card => {
  card.style.cssText = 'opacity: 0; pointer-events: none; position: relative; top: 5rem; transition: all 1s;';
});

document.onscroll = () => {
  cards.forEach(card => {
    if (window.pageYOffset >= (card.offsetTop - window.innerHeight + 200)) {
      card.style.cssText = 'opacity: 1; pointer-events: auto; position: relative; top: 0; transition: all 0.5s;';
    }
  });
}
