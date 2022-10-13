var primerNum;
var operador;
var resultado;

function dibuja(num){
    document.getElementById('pantalla').value= document.getElementById('pantalla').value + num;
}

function dibujaPunto(){
    if(!document.getElementById('pantalla').value.includes(".")){
        document.getElementById('pantalla').value= document.getElementById('pantalla').value + '.';
    }
}

function suma(){
    primerNum = document.getElementById('pantalla').value;
    operador = "+";
    document.getElementById('pantalla').value= ""; //limpia la pantalla
}

function resta(){
    primerNum = document.getElementById('pantalla').value;
    operador = "-";
    document.getElementById('pantalla').value= ""; //limpia la pantalla
}

function multiplica(){
    primerNum = document.getElementById('pantalla').value;
    operador = "*";
    document.getElementById('pantalla').value= ""; //limpia la pantalla
}

function divide(){
    primerNum = document.getElementById('pantalla').value;
    operador = "/";
    document.getElementById('pantalla').value= ""; //limpia la pantalla
}

function igual(){
    if(operador != null){
        calcula();
        document.getElementById('pantalla').value = resultado;
    }
}

function calcula(){
    var pantalla = document.getElementById('pantalla').value;
    var segundoNum = pantalla;

    switch (operador) {
        case '+':
            resultado = parseFloat(primerNum) + parseFloat(segundoNum);
            break;
        case '-':
            resultado = parseFloat(primerNum) - parseFloat(segundoNum);
            break;
        case '*':
            resultado = parseFloat(primerNum) * parseFloat(segundoNum);
            break;
        case '/':
            resultado = parseFloat(primerNum) / parseFloat(segundoNum);
            break;
    }
}

function limpia(){
    document.getElementById('pantalla').value= "";
    primerNum = null;
    operador = null;
    resultado = null;
}







