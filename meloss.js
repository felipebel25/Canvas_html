var d = document.getElementById("dibujo");
var papel = d.getContext("2d");
var empezarLinea = false;
var colorcito = "pink";
var x_Inicial, y_Inicial;

d.addEventListener("mousedown", empezarMouse);
d.addEventListener("mouseup", soltarMouse);
d.addEventListener("mousemove", moverMouse);


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function empezarMouse(inicio){
    empezarLinea = true;
    x_Inicial = inicio.layerX;
    y_Inicial = inicio  .layerY;
    dibujarLinea(colorcito, x_Inicial-1, y_Inicial-1, x_Inicial + 1, y_Inicial +1, papel )
}

function moverMouse(evento){
    if(empezarLinea == true){
        dibujarLinea(colorcito,x_Inicial, y_Inicial, evento.layerX, evento.layerY, papel);
        x_Inicial = evento.layerX;
        y_Inicial = evento.layerY;
    }
    
}

function soltarMouse(evento){
    empezarLinea = false;
}
alert("si sirve ");