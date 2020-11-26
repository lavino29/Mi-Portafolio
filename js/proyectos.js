const button_menu = document.querySelector("#button_menu");
const header_barra = document.querySelector("#header_barra");
const main_header = document.querySelector("#main_header");

const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const modal_Loader = document.querySelector("#modal--Loader");
const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");
const titulo_loader = document.querySelector(".titulo--loader");
const mainloader = document.querySelector(".main--loader");
const about_titulo = document.querySelector(".about");
let counter = 0;
let flag = true;
let a = 0;
let inicial = 0;

about_titulo.addEventListener("mouseover", () => {
  if (window.location.hash == "" || window.location.hash == "#proyecto1") {
    about_titulo.style.color = "#e44c24";
  }
  if (window.location.hash == "#proyecto2") {
    about_titulo.style.color = "#1D8348";
  }
  if (window.location.hash == "#proyecto3") {
    about_titulo.style.color = "#6C3483";
  }
  if (window.location.hash == "#proyecto4") {
    about_titulo.style.color = "#616A6B";
  }
});
about_titulo.addEventListener("mouseout", () => {
  about_titulo.style.color = "white";
});
window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  e.stopPropagation();

  setTimeout(() => {
    modal_Loader.classList.add("modal--Loader--active");
  }, 1000);
  setTimeout(() => {
    container1.classList.add("container1--active");
    container2.classList.add("container2--active");
    titulo_loader.style.display = "none";
    setTimeout(() => {
      mainloader.style.display = "none";
    }, 500);
  }, 3000);

 
});



button_menu.addEventListener("click", () => {
  button_menu.children[0].classList.add("button--is-active");
  button_menu.children[1].classList.add("button--active--top");
  button_menu.children[2].classList.add("button--active--bot");
  header_barra.classList.toggle("header--barra--active");
  setTimeout(() => {
    main_header.classList.toggle("main--header--active");

    setTimeout(() => {
      main_header.children[0].classList.toggle("main_header--ul--active");
    }, 400);
  }, 900);

  counter++;

  if (counter == 2) {
    header_barra.classList.toggle("header--barra--active");
    counter = 0;
    setTimeout(() => {
      button_menu.children[0].classList.remove("button--is-active");
      button_menu.children[1].classList.remove("button--active--top");
      button_menu.children[2].classList.remove("button--active--bot");
      header_barra.classList.toggle("header--barra--active");
    }, 1750);
  }
});
