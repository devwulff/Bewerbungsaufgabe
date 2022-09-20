// Global variables
const burgerMenu = document.querySelector(".burger-menu");
const dropDownNavigation = document.querySelector(".dropdown-navigation");
const menuItems = document.querySelectorAll(".has-submenu");

let timer;

// Funktion für den Delay des Dropdown Menüs
menuItems.forEach((el) => {
  el.addEventListener("mouseover", function (event) {
    if (window.innerWidth < 768) return;
    this.className = "has-submenu open";
    clearTimeout(timer);
  });
  el.addEventListener("mouseout", function (event) {
    if (window.innerWidth < 768) return;
    timer = setTimeout(function (event) {
      document.querySelector(".has-submenu.open").className = "has-submenu";
    }, 700);
  });
});

// Funktion für die Bedienung des Dropdown Menüs mit Tastatur / Maus
menuItems.forEach((el) => {
  el.querySelector("a").addEventListener("click", function (event) {
    if (this.parentNode.className == "has-submenu") {
      menuItems.forEach((element) => {
        element.className = "has-submenu";
      });
      this.parentNode.className = "has-submenu open";
      this.setAttribute("aria-expanded", "true");
    } else {
      this.parentNode.className = "has-submenu";
      this.setAttribute("aria-expanded", "false");
    }
    event.preventDefault();
    return false;
  });
});

// Funktion zum wiederverwenden in mehreren Eventlistenern
const openBurgerMenu = () => {
  dropDownNavigation.classList.toggle("show-menu");
  burgerMenu.classList.toggle("menu-open");
  if (burgerMenu.getAttribute("aria-expanded") === "true") {
    burgerMenu.setAttribute("aria-expanded", "false");
  } else {
    burgerMenu.setAttribute("aria-expanded", "true");
  }
};

burgerMenu.addEventListener("click", openBurgerMenu);

burgerMenu.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    openBurgerMenu();
  }
});
