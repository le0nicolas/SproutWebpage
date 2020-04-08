let sliderImages=document.querySelectorAll(".slide");
let flechaIzq= document.querySelector("#flecha-izq");
let flechaDer= document.querySelector("#flecha-der");
let current=0;

//resetea todas las imagenes
function reset(){
    for(let i=0; i < sliderImages.length;i++){
        sliderImages[i].style.display='none';
    }
}

//inicia el slider
function startSlide(){
    reset();
    sliderImages[current].style.display="block";
    if(current < sliderImages.length - 1)
    {
        current++;
    }else{
        current = 0;
    }
    
    setTimeout("startSlide()",5000);
}

//mostrar anterior
function slideLeft(){
    reset();
    sliderImages[current -1].style.display="block";
    current--;
}

//flecha izq al clickear
flechaIzq.addEventListener('click', function(){
    if (current === 0){
        current=sliderImages.length;
    }
    slideLeft();
})

//mostrar siguiente
function slideRight(){
    reset();
    sliderImages[current+1].style.display="block";
    current++;
}

//flecha der al clickear
flechaDer.addEventListener('click', function(){
    if (current === sliderImages.length -1){
        current=- 1;
    }
    slideRight();
});

startSlide();


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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var botones = document.getElementsByClassName("btn_barra")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
for (let k = 0; k < botones.length; k++) {
    botones[k].addEventListener('click', function() {
        switch (k) {
            case 0:
                document.getElementById("titulo_0").innerHTML = "Desayuno & Merienda";
                document.getElementById("titulo_1").innerHTML = "Licuados";
                document.getElementById("titulo_2").innerHTML = "Facturas";
                document.getElementById("titulo_3").innerHTML = "Tostados";
                document.getElementById("titulo_4").innerHTML = "Pancakes";
                modal.style.display = "block";
                break;
            case 1:
                document.getElementById("titulo_0").innerHTML = "Almuerzo & Cena";
                document.getElementById("titulo_1").innerHTML = "Entradas";
                document.getElementById("titulo_2").innerHTML = "Carnes";
                document.getElementById("titulo_3").innerHTML = "Pastas";
                document.getElementById("titulo_4").innerHTML = "Menú Vegano";
                modal.style.display = "block";
                break;
            case 2:
                document.getElementById("titulo_0").innerHTML = "Postres";
                document.getElementById("titulo_1").innerHTML = "Helados";
                document.getElementById("titulo_2").innerHTML = "Tortas";
                document.getElementById("titulo_3").innerHTML = "Copas Heladas";
                document.getElementById("titulo_4").innerHTML = "Especiales";
                modal.style.display = "block";
                break;
            case 3:
                document.getElementById("titulo_0").innerHTML = "Cervezas Artesanales";
                document.getElementById("titulo_1").innerHTML = "PORTER";
                document.getElementById("titulo_2").innerHTML = "STOUT";
                document.getElementById("titulo_3").innerHTML = "STRONG GOLDEN ALE";
                document.getElementById("titulo_4").innerHTML = "WEIZENBOCK";
                modal.style.display = "block";
                break;
        }
    })
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//----------------------------------------------------------------------------
//código para mostrar lightbox con imágenes y sliders dependiendo que botón del gird se toca

//variable para el modal del grid
var grid_modal = document.getElementById("grid_modal");
//variable para los botones del grid y abrir el modal
var grid_modal_Btn=document.getElementsByClassName("btn-grid");
//variable para cerrar el modal
var close_Btn= document.getElementById("close_modal");
//variables para saber que botón se clickeó, y mostrar las imágenes correspondientes
var burgerModal=false;
var CervezaModal=false;
var pancakeModal=false;

//variable para tomar todas las imagenes del slider 1
let modalImages=document.querySelectorAll(".slide_modal");
//variable para tomar todas las imagenes del slider 2
let modalImagesCerv=document.querySelectorAll(".slideCerv_modal");
//variable para tomar todas las imagenes del slider 3
let modalImagesPan=document.querySelectorAll(".slidePan_modal");

//depende en que boton del grid se hace click, se muestran distintas imágenes
for (let c = 0; c < grid_modal_Btn.length; c++) {
    grid_modal_Btn[c].addEventListener ('click', openModalGrid);
    //funcion para abrir el modal    
    function openModalGrid(){
        switch (c) {
            case 0: //burgers
                burgerModal=true; 
                CervezaModal=false;
                pancakeModal=false;
                resetear(); //resetea todas las imágenes en 0 cada vez que se hace click en el botón
                grid_modal.style.display='block'; //para mostrar el cuerpo del lightbox
                modalImages[0].style.display='block'; //para mostrar la primer imagen
                break;
            case 1: //cervezas
                CervezaModal=true;
                pancakeModal=false;
                burgerModal=false;
                resetear();
                grid_modal.style.display='block';
                modalImagesCerv[0].style.display='block';
                break;
            case 2: //pancakes
                pancakeModal=true;
                burgerModal=false;
                CervezaModal=false;
                resetear();
                grid_modal.style.display='block';
                modalImagesPan[0].style.display='block';
                break;
        }
    }
}

//funcion para cerrar el modal con la cruz
close_Btn.addEventListener ('click', closeModalGrid);

function closeModalGrid(){
    grid_modal.style.display='none';
}

//funcion para cerrar el modal si clickeamos afuera del modal
window.addEventListener('click', clickOutside);

function clickOutside(e){
    if (e.target==grid_modal){ // "e" es evento, que seria mi click. Si hago click en el modal (la parte oscura), quiero que salga
        grid_modal.style.display='none';
    }
}

//slider del modal

let flechaIzqModal= document.querySelector("#flecha_izq_modal");
let flechaDerModal= document.querySelector("#flecha_der_modal");
let seleccionado=0;
 
//resetea todas las imagenes
function resetear(){
    for(let x=0; x < modalImages.length;x++){
        modalImages[x].style.display='none';
        modalImagesCerv[x].style.display='none';
        modalImagesPan[x].style.display='none';
    }
}

//mostrar anterior
function slideIzq(){
    resetear();

    if (burgerModal==true){
    modalImages[seleccionado -1].style.display="block";
    }

    if (CervezaModal==true){
        modalImagesCerv[seleccionado -1].style.display="block";
    }

    if (pancakeModal==true){
        modalImagesPan[seleccionado -1].style.display="block";
    }

    seleccionado--;
}

//flecha izq al clickear
flechaIzqModal.addEventListener('click', function(){
    if (seleccionado === 0){
        seleccionado=modalImages.length;
    }
    slideIzq();
})

//mostrar siguiente
function slideDer(){
    resetear();

    if (burgerModal==true){
        modalImages[seleccionado+1].style.display="block";
    }

    if (CervezaModal==true){
        modalImagesCerv[seleccionado+1].style.display="block";
    }

    if (pancakeModal==true){
        modalImagesPan[seleccionado+1].style.display="block";
    }

    seleccionado++;
}

//flecha der al clickear
flechaDerModal.addEventListener('click', function(){
    if (seleccionado === modalImages.length -1){
        seleccionado=- 1;
    }
    slideDer();
});

//----------------------------------------------------------------------------