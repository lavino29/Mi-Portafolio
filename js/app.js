const button_menu = document.querySelector("#button_menu");
const header_barra = document.querySelector("#header_barra");
const main_header = document.querySelector("#main_header");
const slider_menu_ul = document.querySelector(".slider_menu--ul");
const proyecto_1 = document.querySelector("#proyec");
const proyec_main = document.querySelector(".proyec--main");
const informacion = document.querySelector(".main_proyectos--informacion");
const slide1 = document.querySelector("#slide1");
const slide2 = document.querySelector("#slide2");
const slide3 = document.querySelector("#slide3");
const slide4 = document.querySelector("#slide4");
const slide5 = document.querySelector("#slide5");
const menu1 = document.querySelector("#menu1");
const menu2 = document.querySelector("#menu2");
const menu3 = document.querySelector("#menu3");
const menu4 = document.querySelector("#menu4");
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
  }  if (window.location.hash == "#proyecto5") {
    about_titulo.style.color = "#1490EC";
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

  if (window.location.hash == "") {
    slide1.children[0].style.background = "white";
  }
  if (window.location.hash == "#proyecto1") {
    button_menu.style.background = "#e44c24";
    main_header.style.background = "#e44c24";
    header_barra.style.background = "#e44c24";
    slide1.children[0].style.background = "white";
    proyecto_1.style.transform = `translateY(0%)`;
  }
  if (window.location.hash == "#proyecto2") {
    button_menu.style.background = "#1D8348";
    main_header.style.background = "#1D8348";
    header_barra.style.background = "#1D8348";
    slide2.children[0].style.background = "white";
    if (document.referrer.includes("about") == false) {
      proyecto_1.style.transform = `translateY(-100%)`;
    }
  }
  if (window.location.hash == "#proyecto3") {
    button_menu.style.background = "#6C3483";
    main_header.style.background = "#6C3483";
    header_barra.style.background = "#6C3483";
    slide3.children[0].style.background = "white";
    if (document.referrer.includes("about") == false) {
      proyecto_1.style.transform = `translateY(-200%)`;
    }
  }
  if (window.location.hash == "#proyecto4") {
    button_menu.style.background = "#616A6B";
    main_header.style.background = "#616A6B";
    header_barra.style.background = "#616A6B";
    slide4.children[0].style.background = "white";
    if (document.referrer.includes("about") == false) {
      proyecto_1.style.transform = `translateY(-300%)`;
    }
   
  }
  if (window.location.hash == "#proyecto5") {
    button_menu.style.background = "#1490EC";
    main_header.style.background = "#1490EC";
    header_barra.style.background = "#1490EC";
    slide5.children[0].style.background = "white";
    if (document.referrer.includes("about") == false) {
      proyecto_1.style.transform = `translateY(-400%)`;
    }}
});
slide1.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(0%)`;
  button_menu.style.background = "#e44c24";
  main_header.style.background = "#e44c24";
  header_barra.style.background = "#e44c24";
  deleteSelectSlider();
  slide1.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto1";
  }, 500);
});
slide2.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(-100%)`;
  button_menu.style.background = "#1D8348";
  main_header.style.background = "#1D8348";
  header_barra.style.background = "#1D8348";
  deleteSelectSlider();
  slide2.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto2";
  }, 500);
});
slide3.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(-200%)`;
  button_menu.style.background = "#6C3483 ";
  main_header.style.background = "#6C3483 ";
  header_barra.style.background = "#6C3483 ";
  deleteSelectSlider();
  slide3.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto3";
  }, 500);
});
slide4.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(-300%)`;
  button_menu.style.background = "#616A6B ";
  main_header.style.background = "#616A6B ";
  header_barra.style.background = "#616A6B ";
  deleteSelectSlider();
  slide4.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto4";
  }, 500);
});
slide5.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(-400%)`;
  button_menu.style.background = "##1490EC ";
  main_header.style.background = "##1490EC ";
  header_barra.style.background = "##1490EC ";
  deleteSelectSlider();
  slide5.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto5";
  }, 500);
});
menu1.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(0%)`;
  button_menu.style.background = "#e44c24";
  main_header.style.background = "#e44c24";
  header_barra.style.background = "#e44c24";
  deleteSelectSlider();
  slide1.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto1";
  }, 500);
});
menu2.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(-100%)`;
  button_menu.style.background = "#1D8348";
  main_header.style.background = "#1D8348";
  header_barra.style.background = "#1D8348";
  deleteSelectSlider();
  slide2.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto2";
  }, 500);
});
menu3.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(-200%)`;
  button_menu.style.background = "#6C3483 ";
  main_header.style.background = "#6C3483 ";
  header_barra.style.background = "#6C3483 ";
  deleteSelectSlider();
  slide3.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto3";
  }, 500);
});
menu4.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
  proyecto_1.style.transform = `translateY(-300%)`;
  button_menu.style.background = "#616A6B ";
  main_header.style.background = "#616A6B ";
  header_barra.style.background = "#616A6B ";
  deleteSelectSlider();
  slide4.children[0].style.background = "white";
  setTimeout(() => {
    window.location.hash = "proyecto4";
  }, 500);
});
window.addEventListener("touchstart", (e) => {
  inicial = e.changedTouches[0].clientY;
});
window.addEventListener("touchend", (e) => {
  if (inicial - e.changedTouches[0].clientY > 20 && flag == true) {
    subir();
  } else if (inicial - e.changedTouches[0].clientY < 0 && flag == true) {
    bajar();
  }

  coloresDinamico();
});

window.addEventListener("wheel", (event) => {
  if (event.deltaY >= 100 && flag) {
    subir();
  } else if (event.deltaY <= -100 && flag) {
    bajar();
  }
  coloresDinamico();
});
const deleteSelectSlider = () => {
  slide1.children[0].style.background = "none";
  slide2.children[0].style.background = "none";
  slide3.children[0].style.background = "none";
  slide4.children[0].style.background = "none";
  slide5.children[0].style.background = "none";
};
const coloresDinamico = () => {
  if (proyecto_1.style.transform == "translateY(0%)") {
    button_menu.style.background = "#e44c24";
    main_header.style.background = "#e44c24";
    header_barra.style.background = "#e44c24";
    deleteSelectSlider();
    setTimeout(() => {
      window.location.hash = "proyecto1";
    }, 500);
    slide1.children[0].style.background = "white";
  }
  if (proyecto_1.style.transform == "translateY(-100%)") {
    button_menu.style.background = "#1D8348";
    main_header.style.background = "#1D8348";
    header_barra.style.background = "#1D8348";
    deleteSelectSlider();
    setTimeout(() => {
      window.location.hash = "proyecto2";
    }, 500);
    slide2.children[0].style.background = "white";
  } else if (proyecto_1.style.transform == "translateY(-200%)") {
    button_menu.style.background = "#6C3483 ";
    main_header.style.background = "#6C3483 ";
    header_barra.style.background = "#6C3483 ";
    deleteSelectSlider();
    setTimeout(() => {
      window.location.hash = "proyecto3";
    }, 500);
    slide3.children[0].style.background = "white";
  } else if (proyecto_1.style.transform == "translateY(-300%)") {
    button_menu.style.background = "#616A6B ";
    main_header.style.background = "#616A6B ";
    header_barra.style.background = "#616A6B ";
    deleteSelectSlider();
    setTimeout(() => {
      window.location.hash = "proyecto4";
    }, 500);
    slide4.children[0].style.background = "white";
  }
  else if (proyecto_1.style.transform == "translateY(-400%)") {
    button_menu.style.background = "#1490EC";
    main_header.style.background = "#1490EC";
    header_barra.style.background = "#1490EC";
    deleteSelectSlider();
    setTimeout(() => {
      window.location.hash = "proyecto5";
    }, 500);
    slide5.children[0].style.background = "white";
  }
};
const subir = () => {
  flag = false;
  a += 100;
  if (a > 400) {
    proyecto_1.style.transform = `translateY(0%)`;
    a = 0;
  } else if (a <= 400) {
    proyecto_1.style.transform = `translateY(-${a}%)`;
  }

  setTimeout(() => {
    flag = true;
  }, 500);
};
const bajar = () => {
  flag = false;
  a -= 100;

  if (a == -100) {
    proyecto_1.style.transform = `translateY(-400%)`;

    a = 400;
  } else if (a <= 400) {
    proyecto_1.style.transform = `translateY(-${a}%)`;
  }

  setTimeout(() => {
    flag = true;
  }, 500);
};
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
