var operaciona;
var operacionb;
var operacion;
var resultado;
var display = document.getElementById('display')

//asignar elemento del DOM
var calculadora={
init: function(){
var self=this
var signo = document.getElementById('sign');
var reset = document.getElementById('on');
var suma = document.getElementById('mas');
var resta = document.getElementById('menos');
var multiplicacion = document.getElementById('por');
var division = document.getElementById('dividido');
var igual = document.getElementById('igual');
var punto = document.getElementById('punto');
var uno = document.getElementById("1");
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');

//Asignar valor a numeros

uno.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "1";
} else {
display.innerHTML += "1";
}
}
})
dos.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "2";
} else {
display.innerHTML += "2";
}
}
})
tres.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "3";
} else {
display.innerHTML += "3";
}
}
})
cuatro.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "4";
} else {
display.innerHTML += "4";
}
}
})
cinco.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "5";
} else {
display.innerHTML += "5";
}
}
})
seis.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "6";
} else {
display.innerHTML += "6";
}
}
})
siete.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "7";
} else {
display.innerHTML += "7";
}
}
})
ocho.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "8";
} else {
display.innerHTML += "8";
}
}
})
nueve.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "9";
} else {
display.innerHTML += "9";
}
}
})
cero.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
if (display.innerHTML == "0") {
display.innerHTML = "0";
} else {
display.innerHTML += "0";
}
}
})
punto.addEventListener('click', function() {
if (display.innerHTML.length <= 1) {
if (display.innerHTML == "0") {
display.innerHTML = ".";
} else {
display.innerHTML += ".";
}
}
})
on.addEventListener('click', function() {
 display.innerHTML = "0"})
 signo.addEventListener('click', function() {
if (display.innerHTML.length <= 7) {
     if (display.innerHTML != "0") {
display.innerHTML = "-" + display.innerHTML;
 } else {
  display.innerHTML = "0";
 }
}})

//operaciones

suma.addEventListener('click', function() {
  display.innerHTML = display.innerHTML.substring(0, 7)
  operaciona = display.innerHTML;
       operacion = "+";
       display.innerHTML = "";})

       resta.addEventListener('click', function() {
         display.innerHTML = display.innerHTML.substring(0, 7)
         operaciona = display.innerHTML;
              operacion = "-";
              display.innerHTML = "";})
              multiplicacion.addEventListener('click', function() {
                display.innerHTML = display.innerHTML.substring(0, 7)
                operaciona = display.innerHTML;
                     operacion = "*";
                     display.innerHTML = "";})
                     division.addEventListener('click', function() {
                       display.innerHTML = display.innerHTML.substring(0, 7);
                       operaciona = display.innerHTML;
                            operacion = "/";
                            display.innerHTML = "";})

//funcion tecla igual
igual.addEventListener('click', function() {
  operacionb = display.innerHTML;
        if(operacion == "+"){
        resultado = parseFloat(operaciona) + parseFloat(operacionb);
        display.innerHTML = display.innerHTML.substring(0, 7);
        }
        if(operacion == "-"){
        resultado = parseFloat(operaciona) - parseFloat(operacionb);
        display.innerHTML = display.innerHTML.substring(0, 7);
        }
        if(operacion == "*"){
        resultado = parseFloat(operaciona) * parseFloat(operacionb);
        display.innerHTML = display.innerHTML.substring(0, 7);
        }
        if(operacion == "/"){
        resultado = parseFloat(operaciona) / parseFloat(operacionb);
        display.innerHTML = display.innerHTML.substring(0, 7);
        }
        if(display.innerHTML.length <= 8){
        display.innerHTML =  resultado
        }else{
        display.innerHTML = resultado}})

//cambiar tamaño de numero
        uno.addEventListener("mousedown",function(){
     uno.setAttribute("style","transform:scale(0.9,0.9)")
 })
 uno.addEventListener("mouseout",function(){
     uno.setAttribute("style","transform:scale(1,1)")
 })
 dos.addEventListener("mousedown",function(){
       dos.setAttribute("style","transform:scale(0.9,0.9)")
   })
   dos.addEventListener("mouseout",function(){
       dos.setAttribute("style","transform:scale(1,1)")
   })
   tres.addEventListener("mousedown",function(){
       tres.setAttribute("style","transform:scale(0.9,0.9)")
   })
   tres.addEventListener("mouseout",function(){
       tres.setAttribute("style","transform:scale(1,1)")
   })
   cuatro.addEventListener("mousedown",function(){
       cuatro.setAttribute("style","transform:scale(0.9,0.9)")
   })
   cuatro.addEventListener("mouseout",function(){
       cuatro.setAttribute("style","transform:scale(0.9,0.9)")
   })
   cinco.addEventListener("mousedown",function(){
       cinco.setAttribute("style","transform:scale(0.9,0.9)")
   })
   cinco.addEventListener("mouseout",function(){
       cinco.setAttribute("style","transform:scale(1,1)")
   })
   seis.addEventListener("mousedown",function(){
       seis.setAttribute("style","transform:scale(0.9,0.9)")
   })
   seis.addEventListener("mouseout",function(){
       seis.setAttribute("style","transform:scale(1,1)")
   })
   siete.addEventListener("mousedown",function(){
       siete.setAttribute("style","transform:scale(0.9,0.9)")
   })
   siete.addEventListener("mouseout",function(){
       siete.setAttribute("style","transform:scale(1,1)")
   })
   ocho.addEventListener("mousedown",function(){
       ocho.setAttribute("style","transform:scale(0.9,0.9)")
   })
   ocho.addEventListener("mouseout",function(){
       ocho.setAttribute("style","transform:scale(1,1)")
   })
   nueve.addEventListener("mousedown",function(){
       nueve.setAttribute("style","transform:scale(0.9,0.9)")
   })
   nueve.addEventListener("mouseout",function(){
       nueve.setAttribute("style","transform:scale(1,1)")
   })
   cero.addEventListener("mousedown",function(){
       cero.setAttribute("style","transform:scale(0.9,0.9)")
   })
   cero.addEventListener("mouseout",function(){
       cero.setAttribute("style","transform:scale(1,1)")
   })
   sign.addEventListener("mousedown",function(){
       sign.setAttribute("style","transform:scale(0.9,0.9)")
   })
   sign.addEventListener("mouseout",function(){
       sign.setAttribute("style","transform:scale(1,1)")
   })
   raiz.addEventListener("mousedown",function(){
       raiz.setAttribute("style","transform:scale(0.9,0.9)")
   })
   raiz.addEventListener("mouseout",function(){
       raiz.setAttribute("style","transform:scale(1,1)")
   })
   dividido.addEventListener("mousedown",function(){
       dividido.setAttribute("style","transform:scale(0.9,0.9)")
   })
   dividido.addEventListener("mouseout",function(){
       dividido.setAttribute("style","transform:scale(1,1)")
   })
   por.addEventListener("mousedown",function(){
       por.setAttribute("style","transform:scale(0.9,0.9)")
   })
   por.addEventListener("mouseout",function(){
       por.setAttribute("style","transform:scale(1,1)")
   })
   punto.addEventListener("mousedown",function(){
       punto.setAttribute("style","transform:scale(0.9,0.9)")
   })
   punto.addEventListener("mouseout",function(){
       punto.setAttribute("style","transform:scale(1,1)")
   })
   menos.addEventListener("mousedown",function(){
       menos.setAttribute("style","transform:scale(0.9,0.9)")
   })
   menos.addEventListener("mouseout",function(){
       menos.setAttribute("style","transform:scale(1,1)")
   })
   igual.addEventListener("mousedown",function(){
       igual.setAttribute("style","transform:scale(0.9,0.9)")
   })
   igual.addEventListener("mouseout",function(){
       igual.setAttribute("style","transform:scale(1,1)")
   })
   mas.addEventListener("mousedown",function(){
       mas.setAttribute("style","transform:scale(0.9,0.9)")
   })
   mas.addEventListener("mouseout",function(){
       mas.setAttribute("style","transform:scale(1,1)")
   })
   on.addEventListener("mousedown",function(){
       on.setAttribute("style","transform:scale(0.9,0.9)")
   })
   on.addEventListener("mouseout",function(){
       on.setAttribute("style","transform:scale(1,1)")
   })





}}
calculadora.init();
