
function tomarDatos(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
}

function sumar(){
    tomarDatos();
    let resultado =  parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado)){    
    document.getElementById('resultado').innerHTML = (resultado = 'la operacion no incluye numeros');
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }
}

function restar(){
    tomarDatos();

    let resultado =  parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado)){    
    document.getElementById('resultado').innerHTML = (resultado = 'la operacion no incluye numeros');
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }
}

function multiplica(){
    tomarDatos();

    let resultado =  parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado)){    
    document.getElementById('resultado').innerHTML = (resultado = 'la operacion no incluye numeros');
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }
}

function dividir(){
    tomarDatos();
    if(parseInt(operandoB.value) != 0){
        let resultado =  parseFloat(operandoA.value) / parseFloat(operandoB.value);
        if(isNaN(resultado)){    
        document.getElementById('resultado').innerHTML = (resultado = 'la operacion no incluye numeros');
        }else{
            document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
            console.log(`Resultado: ${resultado}`);
        }
    }else{
        document.getElementById('resultado').innerHTML = (resultado = 'no se puede dividir por cero');
    }
}

function modulo(){
    tomarDatos();
    let resultado =  parseInt(operandoA.value) % parseInt(operandoB.value);
    if(isNaN(resultado)){    
    document.getElementById('resultado').innerHTML = (resultado = 'la operacion no incluye numeros');
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }
}

function exponente(){
    tomarDatos();
    let resultado =  parseInt(operandoA.value) ** parseInt(operandoB.value);
    if(isNaN(resultado)){    
    document.getElementById('resultado').innerHTML = (resultado = 'la operacion no incluye numeros');
    }else{
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
        console.log(`Resultado: ${resultado}`);
    }
}

function raices(){
    tomarDatos();
    let resultado1 = Math.sqrt(parseFloat(operandoA.value)); 
    let resultado2 = Math.sqrt(parseFloat(operandoB.value));
    if(resultado1 >= 0 && resultado2 >= 0){
        if(isNaN(resultado1) && isNaN(resultado2)){    
        document.getElementById('resultado').innerHTML = (resultado1 = 'la operacion no incluye numeros');
        }else{
        document.getElementById('resultado').innerHTML = `Resultado operador 1: ${resultado1} | Resultado operador 2: ${resultado2}`;
           console.log(`Resultado: ${resultado}`);
        }
    }else{
        document.getElementById('resultado').innerHTML = (resultado1 = 'la operacion no se realiza en numeros negativos');
    }
}