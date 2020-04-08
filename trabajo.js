/* this is the code for the hamburguer button */
var header = document.querySelector(".btn-header-container");
var btn_header= document.querySelectorAll(".btn_header");

function myFunction(x) {
    header.classList.toggle("btn-header-toggle");
    for (let i = 0; i < btn_header.length; i++) {
        btn_header[i].classList.toggle("btn_toggle");
    }
    x.classList.toggle("change");
}

document.getElementById("form_trabajo").onmouseover = function() {mouseOver()};
document.getElementById("form_trabajo").onmouseout = function() {mouseOut()};

function mouseOver() {
    var element = document.getElementById("img_fondo");
    element.classList.remove("img_fondo");
    element.classList.add("img_fondo_hover");
  }

  function mouseOut() {
    var element = document.getElementById("img_fondo");
    element.classList.remove("img_fondo_hover");
    element.classList.add("img_fondo");
  }