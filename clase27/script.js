// ej1
function MiFuncion(){
    console.log("soy una funcion")
}
MiFuncion()

// ej2
function CantarCumple(){
    console.log("que los cumplas feliz")
    console.log("que los cumplas feliz")
    console.log("que los cumplas julieta")
    console.log("que los cumplas feliz")
}
CantarCumple()
CantarCumple()
CantarCumple()
CantarCumple()

// EJ3
function CantarCumpleA (Nombre) //<-PARAMETRO// 
{
    console.log("que los cumplas feliz")
    console.log("que los cumplas feliz")
    console.log("que los cumplas julieta")
    console.log("que los cumplas feliz " + Nombre)
}
CantarCumpleA("LOLA")//<-ARGUMENTO//
CantarCumpleA("MARTINA")
CantarCumpleA("JULIAN")
CantarCumpleA("JOSE")

//EJ4 hechoxmi
function saludo(nombre){
    console.log("Hola, tanto tiempo "+ nombre)
}
saludo("lola")
saludo("señora")
saludo("julian")

//ej5 multiples parametros
function SaludarA(nombre, dia){
    alert(`que tengas un lindo ${dia}, ${nombre}`)
}
SaludarA("Jorge", "lunes")

//ej6 variable como parametro
function cantarcumple(persona){
    console.log("que los cumplas feliz "+persona)
}
let nommbre=prompt("quien cumple años hoy?")
cantarcumple(nommbre)

//ej7 por default
function multiply(a,b=5){
    console.log(a*b)
}
multiply(5,2)
multiply(5)