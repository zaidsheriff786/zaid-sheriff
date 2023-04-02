const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLinks = document.querySelectorAll('#hLink');
let showMenu = false;

hamburger.addEventListener('click', () => {
  if (!showMenu) {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('text-white');
    hamburger.children[0].classList.remove('fa-bars');
    hamburger.children[0].classList.add('fa-close');
    // Reset the menu state
    showMenu = true;
  } else {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('text-white');
    hamburger.children[0].classList.remove('fa-close');
    hamburger.children[0].classList.add('fa-bars');
    // Reset the menu state
    showMenu = false;
  }
});

hLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    hamburger.classList.toggle('text-white');
    hamburger.children[0].classList.remove('fa-close');
    hamburger.children[0].classList.add('fa-bars');
    showMenu = false;
  });
});
