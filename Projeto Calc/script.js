/*DarkMode*/

const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    bgCaixa: getStyle(html, "--bg-caixa"),
    bgImage: getStyle(html, "--bg-image"),
    colorCasco: getStyle(html, "--color-casco"),
    colorH5: getStyle(html, "--color-h5"),
    colorLeg: getStyle(html, "--color-leg"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
    bgCaixa: "#333333",
    colorCasco: "#8e9aaf",
    colorLeg: "#edf2f4",
    colorH5: "#edf2f4",
    colorText: "#edf6f9",
    bgImage: "linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(https://storage.googleapis.com/projetocalc.appspot.com/img/background_dark.jpeg)",   
  
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})



/*Acessibilidade*/

tamanho = 10;
function diminuir() {
    tamanho --;
    document.body.style.fontSize = tamanho +"px";
}
function aumentar() {
    tamanho ++;
    document.body.style.fontSize = tamanho +"px";
}

/*Conversões*/


converter = () => {
    var r = document.getElementById("real").value;
    r = parseFloat(r);
    var select = document.getElementById("moeda");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;
    if(opcaoValor == "dolar"){
        dolar = r/5.06;
        document.getElementById("resultado").innerHTML = `${dolar}`;
    }
    else if(opcaoValor == "euro"){
        euro = r/6.00;
        document.getElementById("resultado").innerHTML = `${euro}`;
    }
    console.log(opcaoTexto); 
    console.log(opcaoValor); 
    }
   
convertertemperatura = () => {
    var c = document.getElementById("celsius").value;
    c = parseFloat(c);
    var select = document.getElementById("temperatura");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;
    if(opcaoValor == "fahrenheit"){
        fahrenheit = ((c*9)/5) + 32;
        document.getElementById("resultadotemperatura").innerHTML = `${fahrenheit}`;
    }
    else if(opcaoValor == "kelvin"){
        kelvin = c + 273.15;
        document.getElementById("resultadotemperatura").innerHTML = `${kelvin}`;
    }
    
    console.log(opcaoTexto); 
    console.log(opcaoValor); 
    }
   
   /*Calculadora*/

   function calcNum(num) {
    if (typeof gvisor == 'undefined') {
       document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
 }
 
 
 function calcLimpar() {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    delete gvisor;
 }

 function calcOper(oper, valor1, valor2) {
    if (oper == "somar") {
       var valor = parseFloat(valor1) + parseFloat(valor2);
    } else {
        if (oper == "mod") {
            var valor = valor1 % valor2;
        } else { 
            if (oper == "potencia") {
                var valor = Math.pow(valor1, 2);
            } else {
                if (oper == "subtrair") {
                    var valor = valor1 - valor2;
                } else{
                    if(oper == "potencia1") {
                        var valor = Math.pow(valor2, 2);
                    } else {
                        if (oper == "multiplicar") {
                            var valor = valor1 * valor2;
                        } else {
                            if (oper == "potencia3") {
                                var valor = Math.pow (valor1, valor2);
                            } else {
                                var valor = valor1 / valor2;
                            }
                        }
                    }
                }
            }
        }
    }  
    return(valor);
 }

 function calcParse(oper) {
    var valor = document.calcform.visor.value;
    delete gvisor;
 
    if (typeof goper != 'undefined' && oper == 'resultado') {
       gvalor = calcOper(goper, gvalor, valor);
       document.calcform.visor.value = gvalor;
       delete oper;
       delete gvalor;
       return(0);
    }
 
    if (typeof gvalor != 'undefined') {
       gvalor = calcOper(goper, gvalor, valor);
       goper = oper;
       document.calcform.visor.value = gvalor;
    } else {
       gvalor = valor;
       goper = oper;
    }
 
 }

