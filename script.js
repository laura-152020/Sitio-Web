let btns;

window.onload = init;

function init() {
    btns = document.querySelectorAll(".btn");
    btn1 = document.getElementById("seccion_1");
    btn2 = document.getElementById("seccion_2");
    btn3 = document.getElementById("seccion_3");
    btn4 = document.getElementById("seccion_4");
    btn5 = document.getElementById("seccion_5");
    cambiarSeccion(1);
}

function seleccionar(indice) {
    for (var i = 0; i < btns.lenght; i++) {
        btns[i].classListremove("seleccion");
    }
    btns[indice].classList.add("seleccion")

}

function cambiarSeccion(indice_pagina) {
    for (var i = 0; i < btns.lenght; i++) {
        console.log(btns[i]);
    }
}
