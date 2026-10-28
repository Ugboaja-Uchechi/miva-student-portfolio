const menuIcon = document.querySelector(".mobile-menu");
const container = document.querySelector(".mobile-nav");
const closeIcon = document.querySelector(".close-icon");
//const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

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