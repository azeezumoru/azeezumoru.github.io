// eslint-disable-next-line linebreak-style
// const menuBtn = document.querySelector('.menu-btn');
// const closeBtn = document.querySelector('.cancel-btn');
// const menu = document.querySelector('.mobile-menu-container ul .menu-link');

// menuBtn.addEventListener('click', () => {
//   menu.style.display = 'block';
//   menuBtn.style.display = 'none';
//   closeBtn.style.display = 'inline-block';
// });

// const mobileNavBtn = document.querySelector('.menu-btn');
// const removeBtn = document.querySelector('.cancle-btn');
// const mobileNav = document.querySelector('#mobile-nav');
// const mobileNavLinks = document.querySelectorAll('.menu-link');

// const navToggle = () => {
//   mobileNav.classList.toggle('active');
//   removeBtn.classList.toggle('hidden');
// };

// mobileNavBtn.addEventListener('click', navToggle);
// removeBtn.addEventListener('click', navToggle);

// mobileNavLinks.forEach((link) => {
//   link.addEventListener('click', navToggle);
// });

// const menu = document.querySelector('#mobile-nav');
// const menuItems = document.querySelectorAll('.menu-link');
// const hamburger = document.querySelector('.hamburger');
// const closeIcon = document.querySelector('.closeIcon');
// const menuIcon = document.querySelector('.menuIcon');

// function toggleMenu() {
//   if (menu.classList.contains('showMenu')) {
//     menu.classList.remove('showMenu');
//     closeIcon.style.display = 'none';
//     menuIcon.style.display = 'block';
//   } else {
//     menu.classList.add('showMenu');
//     closeIcon.style.display = 'block';
//     menuIcon.style.display = 'none';
//   }
// }

// hamburger.addEventListener('click', toggleMenu);

// menuItems.forEach(
//   (menuItem) => {
//     menuItem.addEventListener('click', toggleMenu);
//   },
// );

// eslint-disable-next-line no-unused-vars
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

// eslint-disable-next-line no-unused-vars
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

window.onscroll = function() {myFunction()};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

