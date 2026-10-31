const menuIcon = document.querySelector(".mobile-menu");
const container = document.querySelector(".mobile-nav");
const closeIcon = document.querySelector(".close-icon");
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

const currentPath = window.location.pathname.endsWith("/")
  ? `${window.location.pathname}index.html`
  : window.location.pathname;

navLinks.forEach(link => {
  if (link.pathname === currentPath) {
    link.setAttribute("aria-current", "page");
  }
});

// Mobile menu
function openBar() {
  container.style.display = 'flex';
}

function close() {
  container.style.display = 'none';
}


// mobileNavLinks.forEach(item => {
//   item.addEventListener("click",
//     container.style.display = "none"
//   )
// });

// Mobile menu
menuIcon.addEventListener('click', openBar);
closeIcon.addEventListener('click', close);