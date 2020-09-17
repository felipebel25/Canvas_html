
var c = document.getElementById("canva_Mouse");
var papel = c.getContext("2d");     

var empezarLinea = false;
var color = "gold";
var x_Inicial, y_Inicial;
dibujarLinea("red",299,1,299,299,papel);
dibujarLinea("red",1,1,1,299,papel);
dibujarLinea("red",1,1,299,1,papel);
dibujarLinea("red",1,299,299,299,papel);

c.addEventListener("mousedown", empezarMouse);
c.addEventListener("mouseup", soltarMouse);
c.addEventListener("mousemove", moverMouse);

function dibujarLinea(color, x_Inicial, y_Inicial, xFinal, yFinal, papel){
    papel.beginPath();
    papel.strokeStyle = color;
    papel.lineWidth = 3;
    papel.moveTo(x_Inicial, y_Inicial);
    papel.lineTo(xFinal, yFinal);
    papel.stroke();
    papel.closePath();
}

function empezarMouse(inicio){
    empezarLinea = true;
    x_Inicial = inicio.layerX;
    y_Inicial = inicio.layerY;
    dibujarLinea(color, x_Inicial-1, y_Inicial-1, x_Inicial + 1, y_Inicial +1, papel)
}

function moverMouse(event){
    if(empezarLinea == true){
        dibujarLinea(color,x_Inicial, y_Inicial, event.layerX, event.layerY, papel)
        x_Inicial = event.layerX;
        y_Inicial = event.layerY;
    }
    
}

function soltarMouse(event)
{
    empezarLinea = false;
}

console.log(canva_Mouse);