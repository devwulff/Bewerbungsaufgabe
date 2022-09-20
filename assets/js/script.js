let menuItems = document.querySelectorAll(".has-submenu");
Array.prototype.forEach.call(menuItems, function (el, i) {
  el.addEventListener("mouseover", function (event) {
    this.className = "has-submenu open";
    clearTimeout(timer);
  });
  el.addEventListener("mouseout", function (event) {
    timer = setTimeout(function (event) {
      document.querySelector(".has-submenu.open").className = "has-submenu";
    }, 700);
  });
});

let menuItems2 = document.querySelectorAll(".has-submenu");
Array.prototype.forEach.call(menuItems, function (el, i) {
  el.querySelector("a").addEventListener("click", function (event) {
    console.log("function click");
    if (this.parentNode.className == "has-submenu") {
      console.log("zeile 19");
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

// let menuItems = document.querySelectorAll("li.has-submenu");
// Array.prototype.forEach.call(menuItems, function (el, i) {
//   var activatingA = el.querySelector("a");
//   var btn =
//     '<button><span><span class="visuallyhidden">show submenu for “' +
//     activatingA.text +
//     "”</span></span></button>";
//   activatingA.insertAdjacentHTML("afterend", btn);

//   el.querySelector("button").addEventListener("click", function (event) {
//     if (this.parentNode.className == "has-submenu") {
//       this.parentNode.className = "has-submenu open";
//       this.parentNode.querySelector("a").setAttribute("aria-expanded", "true");
//       this.parentNode
//         .querySelector("button")
//         .setAttribute("aria-expanded", "true");
//     } else {
//       this.parentNode.className = "has-submenu";
//       this.parentNode.querySelector("a").setAttribute("aria-expanded", "false");
//       this.parentNode
//         .querySelector("button")
//         .setAttribute("aria-expanded", "false");
//     }
//     event.preventDefault();
//   });
// });

// const dropDown = document.querySelectorAll(".dropdown");
// const dropBtns = document.querySelectorAll(".dropbtn");

// let leaveMenuTimeout;
// const showMenu = (element) => {
//   clearTimeout(leaveMenuTimeout);
//   element.querySelector(".dropdown-content").style.display = "block";
// };

// const hideMenu = (element) => {
//   leaveMenuTimeout = setTimeout(() => {
//     element.querySelector(".dropdown-content").style.display = "none";
//   }, 750);
// };

// dropDown.forEach((element) =>
//   element.addEventListener("mouseenter", () => showMenu(element))
// );

// dropDown.forEach((element) =>
//   element.addEventListener("click", () => showMenu(element))
// );

// dropDown.forEach((element) =>
//   element.addEventListener("mouseleave", () => hideMenu(element))
// );

// dropBtns.forEach((element) =>
//   element.addEventListener("focus", () => {
//     element.parentElement.querySelector(".dropdown-content").style.display =
//       "block";
//   })
// );

// dropBtns.forEach((element) =>
//   element.addEventListener("blur", () => {
//     if (!element.closest(".dropdown")) {
//       element.parentElement.querySelector(".dropdown-content").style.display =
//         "none";
//     }
//   })
// );

// document.body.addEventListener("keydown", (event) => {
//   console.log(event);
//   if (event.key === " ") {
//     console.log("hallo ich hab space geklickt");
//   }
//   if (event.key === "ArrowDown") {
//   }
// });
