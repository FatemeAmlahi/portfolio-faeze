let portfiliolinks = document.getElementsByClassName("titles");
let portfiliocontents = document.getElementsByClassName("porfolio-content");
function opentab(name) {
  for (portfiliolink of portfiliolinks) {
    portfiliolink.classList.remove("active-link");
  }
  for (portfiliocontent of portfiliocontents) {
    portfiliocontent.classList.remove("active-content");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(name).classList.add("active-content");
}

let swiperCards = new Swiper(".card-content", {
  loop: true,
  spaceBetween: 32,
  grabCurser: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
var sidemenu = document.getElementsById("sidemenu");
let isOpen = false;

function openmenu() {
  if (!isOpen) {
    sidemenu.style.right = "0px";
  } else {
    sidemenu.style.right = "-200px";
  }
  isOpen = !isOpen;
}

const menuButton = document.querySelector("#menu-button");
menuButton.addEventListener("click", openmenu);

function closemenu() {
  sidemenu.style.right = "-200px";
}
