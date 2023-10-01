const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItem = [nav1, nav2, nav3, nav4, nav5];
// control navigation animation
function navAnimation(direaction1, direaction2) {
  navItem.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direaction1}-${i + 1}`,
      `slide-${direaction2}-${i + 1}`
    );
  });
}
function toggleNav() {
  // toggle: Menu bars open/close
  menuBars.classList.toggle('change');
  // toggle: menu active
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    // Animation in overyaly
    // overlay.classList.add('overlay-slide-right');
    // overlay.classList.remove('overlay-slide-left');
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
    // animate in nav items
    navAnimation('out', 'in');
  } else {
    // Animate out overlay
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    // animate in nav items
    navAnimation('in', 'out');
  }
}
// event listeners
menuBars.addEventListener('click', toggleNav);
navItem.forEach(nav => {
  nav.addEventListener('click', toggleNav);
});
