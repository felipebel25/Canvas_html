var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

console.log(teclas);



document.addEventListener("keyup",dibujarTeclado);
var d =document.getElementById("area_de_dibujo");
var lienzo = d.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149,149,151,151, lienzo);


function dibujarlineas(colorcito, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = colorcito;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}
dibujarlineas("yellow",299,1,299,299,lienzo);
dibujarlineas("yellow",1,1,1,299,lienzo);
dibujarlineas("yellow",1,1,299,1,lienzo);
dibujarlineas("yellow",1,299,299,299,lienzo);

function dibujarTeclado(evento)
{
  var colorcito = "green";
  var movimiento = 10;

  switch (evento.keyCode)

  {
    case teclas.UP:
      console.log("ARRIBA");
      dibujarlineas(colorcito, x ,y, x, y - movimiento, lienzo);
      y = y - movimiento;
      break;
    case teclas.DOWN:
      console.log("ABAJO");
      dibujarlineas(colorcito, x ,y, x, y + movimiento, lienzo);
      y = y + movimiento;
      break;
    case teclas.LEFT:
      dibujarlineas(colorcito, x ,y, x - movimiento, y, lienzo);
      x = x - movimiento;
      console.log("IZQUIERDA");
        break;
    case teclas.RIGHT:
      dibujarlineas(colorcito, x ,y, x + movimiento, y , lienzo);
      x = x + movimiento;
      console.log("DERECHA");

      break;
    default:
      console.log("OTRA TECLA");
    break;
  }
}

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

