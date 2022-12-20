// const menubtn = document.querySelector('.mobile-menu');
// const icon = menubtn.querySelector('.menu-btn');

// menubtn.onclick = function(){
//   if(icon.classList.contains('menu-btn')){
//     icon.classList.replace('menu-btn', 'bi-x')
//   };
//   else {
//     icon.classList.replace('bi-x', 'menu-btn')
//   };
// };

const navMenu = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-icon');

navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
})
