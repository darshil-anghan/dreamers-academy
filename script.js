// function onclick() {
//   document.getElementById("menu").classList.toggle("menu");
//   document.getElementById("navigation").classList.toggle("change");
// }

const nav = document.querySelector("#navigation");
const menu = document.querySelector("#menu");
const bar = document.querySelector(".bar");
const headerLink = document.querySelector(".link-block");
// nav.addEventListener("toggle", function () {
//   menu.classList.add("icon");
//   nav.classList.add("change");
// });

// nav.addEventListener("toggle", function () {
//   console.log("ab");
// });

function onClickMenu() {
  menu.classList.toggle("icon");
  headerLink.classList.toggle("change");
}
