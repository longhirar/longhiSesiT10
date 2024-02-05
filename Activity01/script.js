const somar = () => {
    var n1 = document.getElementById("soma-n1").valueAsNumber; 
    var n2 = document.getElementById("soma-n2").valueAsNumber;
    var resultado = n1 + n2

    console.log(n1, "+", n2, "=", resultado)

    document.getElementById("soma-resultado").textContent = resultado;
    
}
const sub = () => {
    var n1 = document.getElementById("sub-n1").valueAsNumber; 
    var n2 = document.getElementById("sub-n2").valueAsNumber;
    var resultado = n1 - n2

    console.log(n1, "-", n2, "=", resultado)

    document.getElementById("sub-resultado").textContent = resultado;
    
}
const mul = () => {
    var n1 = document.getElementById("mul-n1").valueAsNumber; 
    var n2 = document.getElementById("mul-n2").valueAsNumber;
    var resultado = n1 * n2

    console.log(n1, "*", n2, "=", resultado)

    document.getElementById("mul-resultado").textContent = resultado;
    
}
const divi = () => {
    var n1 = document.getElementById("divi-n1").valueAsNumber; 
    var n2 = document.getElementById("divi-n2").valueAsNumber;
    var resultado = n1 / n2

    console.log(n1, "/", n2, "=", resultado)

    document.getElementById("divi-resultado").textContent = resultado;
    
}

const med = () => {
    var n1 = document.getElementById("med-n1").valueAsNumber; 
    var n2 = document.getElementById("med-n2").valueAsNumber; 
    var n3 = document.getElementById("med-n2").valueAsNumber;
    var resultado = (n1+n2+n3)/3

    console.log(n1, "med", n2, "=", resultado)

    document.getElementById("med-resultado").textContent = resultado;
    
}
