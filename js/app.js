//2. Objeto calculadora


function Calculadora() {
    //------------Variables----------------------------
    var opcion;
    var numUno;
    var numDos;

    var resultado = document.getElementById('display');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    var reset = document.getElementById('on');
    var signo = document.getElementById('sign');
    var suma = document.getElementById('mas');
    var resta = document.getElementById('menos');
    var multiplicacion = document.getElementById('por');
    var division = document.getElementById('dividido');
    var igual = document.getElementById('igual');
    var punto = document.getElementById('punto');

    //------------------Eventos de los botones -----------------------------
    function validar(){
        if(resultado.textContent.length ==7){
           
        } else if(resultado.textContent.length >7) {
            resultado.textContent = resultado.textContent.substr(0,7);
        } 
    }

    
    uno.onclick = function (e) {
        validar();
        //si el contenido es "cero", reemplaza el cero y escribe el numero correspondiente
        if (resultado.textContent == "0") {
            resultado.textContent = "1";
        } else {
            //sino respesta el contenido y escribe el numero correspondiente a la derecha
            resultado.textContent = resultado.textContent + "1";
        }
        //El metodo setAttribute() permite cambiar un atributo espcifico de un elemento
        //Sintaxis variable.setAttribete("nombre del atributo", "valor del atributo")
        uno.setAttribute("style","transform:scale(0.9,0.9)");
        //Funcion que regresa a tamaño normal el boton al retirar el maouse sobre el
        uno.onmouseout = function(){
            uno.setAttribute("style","transform:scale(1,1)");
        }
    }
    dos.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "2";
        } else {
            resultado.textContent = resultado.textContent + "2";
        }
        dos.setAttribute("style","transform:scale(0.9,0.9)");
        dos.onmouseout = function(){
            dos.setAttribute("style","transform:scale(1,1)");
        }
    }
    tres.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "3";
        } else {
            resultado.textContent = resultado.textContent + "3";
        }
        tres.setAttribute("style","transform:scale(0.9,0.9)");
        tres.onmouseout = function(){
            tres.setAttribute("style","transform:scale(1,1)");
        }
    }
    cuatro.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "4";
        } else {
            resultado.textContent = resultado.textContent + "4";
        }
        cuatro.setAttribute("style","transform:scale(0.9,0.9)");
        cuatro.onmouseout = function(){
            cuatro.setAttribute("style","transform:scale(1,1)");
        }
    }
    cinco.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "5";
        } else {
            resultado.textContent = resultado.textContent + "5";
        }
        cinco.setAttribute("style","transform:scale(0.9,0.9)");
        cinco.onmouseout = function(){
            cinco.setAttribute("style","transform:scale(1,1)");
        }
    }
    seis.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "6";
        } else {
            resultado.textContent = resultado.textContent + "6";
        }
        seis.setAttribute("style","transform:scale(0.9,0.9)");
        seis.onmouseout = function(){
            siete.setAttribute("style","transform:scale(1,1)");
        }
    }
    siete.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "7";
        } else {
            resultado.textContent = resultado.textContent + "7";
        }
        siete.setAttribute("style","transform:scale(0.9,0.9)");
        siete.onmouseout = function(){
            siete.setAttribute("style","transform:scale(1,1)");
        }
    }
    ocho.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "8";
        } else {
            resultado.textContent = resultado.textContent + "8";
        }
        ocho.setAttribute("style","transform:scale(0.9,0.9)");
        ocho.onmouseout = function(){
            ocho.setAttribute("style","transform:scale(1,1)");
        }
    }
    nueve.onclick = function (e) {
        validar();
        if (resultado.textContent == "0") {
            resultado.textContent = "9";
        } else {
            resultado.textContent = resultado.textContent + "9";
        }
        nueve.setAttribute("style","transform:scale(0.9,0.9)");
        nueve.onmouseout = function(){
            nueve.setAttribute("style","transform:scale(1,1)");
        }
    }
    cero.onclick = function (e) {
        if (resultado.textContent == "0") {
            resultado.textContent = "0";
        } else {
            resultado.textContent = resultado.textContent + "0";
        }
        cero.setAttribute("style","transform:scale(0.9,0.9)");
        cero.onmouseout = function(){
            cero.setAttribute("style","transform:scale(1,1)");
        }
    }
    //CEro
    punto.onclick = function (e) {
        if (resultado.textContent == "0") {
            resultado.textContent = "0.";
            
        } else if (resultado.textContent.indexOf('.') == -1) {
            resultado.textContent += ".";
        }
        punto.setAttribute("style","transform:scale(0.9,0.9)");
        punto.onmouseout = function(){
            punto.setAttribute("style","transform:scale(1,1)");
        }

    }
    reset.onclick = function (e) {
        resetear();
        reset.setAttribute("style","transform:scale(0.9,0.9)");
        reset.onmouseout = function(){
            reset.setAttribute("style","transform:scale(1,1)");
        }
    }
    function resetear() {
        resultado.textContent = "0";
        numUno = 0;
        numDos = 0;
        operacion = "";
    }

    suma.onclick = function (e) {
        numUno = resultado.textContent;
        operacion = "+";
        borrar();
        suma.setAttribute("style","transform:scale(0.9,0.9)");
        suma.onmouseout = function(){
            suma.setAttribute("style","transform:scale(1,1)");
        }
    }
    
    resta.onclick = function (e) {
        numUno = resultado.textContent;
        operacion = "-";
        borrar();
        resta.setAttribute("style","transform:scale(0.9,0.9)");
        resta.onmouseout = function(){
            resta.setAttribute("style","transform:scale(1,1)");
        }
    }
    multiplicacion.onclick = function (e) {
        numUno = resultado.textContent;
        operacion = "*";
        borrar();
        multiplicacion.setAttribute("style","transform:scale(0.9,0.9)");
        multiplicacion.onmouseout = function(){
            multiplicacion.setAttribute("style","transform:scale(1,1)");
        }
    }
    division.onclick = function (e) {
        numUno = resultado.textContent;
        operacion = "/";
        borrar();
        division.setAttribute("style","transform:scale(0.9,0.9)");
        division.onmouseout = function(){
            division.setAttribute("style","transform:scale(1,1)");
        }
    }

    igual.onclick = function (e) {
        numDos = resultado.textContent;
        resolver();
        igual.setAttribute("style","transform:scale(0.9,0.9)");
        igual.onmouseout = function(){
            igual.setAttribute("style","transform:scale(1,1)");
        }
    }

    function borrar() {
        resultado.textContent = "";
    }
    //---------Signo negativo
    signo.onclick = function (e) {
        if (resultado.textContent == "0") {

        } else if (resultado.textContent.indexOf('-') == -1) {
            resultado.textContent = "-" + resultado.textContent;
        } else if (resultado.textContent.indexOf('-') == 0) {
            resultado.textContent = resultado.textContent.substring(1);
        }
        signo.setAttribute("style","transform:scale(0.9,0.9)");
        signo.onmouseout = function(){
            signo.setAttribute("style","transform:scale(1,1)");
        }
    }
    //---------------Funcion con las operaciones----------------------------
    function resolver() {
        var res = 0;
        switch (operacion) {
            case "+":
                res = parseFloat(numUno) + parseFloat(numDos);
                break;
            case "-":
                res = parseFloat(numUno) - parseFloat(numDos);
                break;
            case "*":
                res = parseFloat(numUno) * parseFloat(numDos);
                break;
            case "/":
                res = parseFloat(numUno) / parseFloat(numDos);
                break;
        }
        resultado.textContent = res
    }
}


Calculadora();


