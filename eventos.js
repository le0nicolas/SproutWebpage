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