// 1
let animo = prompt("hola usuario como se encuentra")
if(animo == "triste"){
    console.log("no estes triste cris morena dice que detras de las nubes siempre el cielo es azul")
} 
else{
    console.log("me alegro segui asi")
}
// 2
const CORRECTA= "lolasoslomas"
let contraseña= prompt("ingrese una contraseña")
if(contraseña != CORRECTA){
    alert("la contraseña es incorrecta")
}
else{ window.location = "http://www.google.com"
}
// 3
let numero =parseInt(prompt("ingrese un numero"))
if((numero/2) !=0){
    alert("su numero no es par")
}
else{
    alert("su numero es par")
}
// 4
let edad= prompt("ingrese su edad")
if(edad<=0){
    alert("Error, su edad no es válida.")
}
else if (edad<=21 ){
    if (edad<18){
        alert("No puede pasar al bar.")
    }
    else if (edad==21)
    {alert("Felicitaciones por cumplir 21, puede pasar al bar y tomar alcohol.")
    }
        else {alert("Puede pasar al bar pero no tomar alcohol.")
        }
}
 else{
    alert("Puede pasar al bar y tomar alcohol.")
 }
 if ((edad%2)!= 0){alert("Sabías que tu edad es impar?")
}
 else {alert("Sabías que tu edad es par?")
} 
// 5
const NUMSECRETO = 16
let respuesta = parseInt(prompt("Cúal es el número secreto?"))
if (respuesta===NUMSECRETO){
    alert("Has acertado el número secreto")
}
else{
   if (respuesta<NUMSECRETO){
     alert("tu número es menor que el secreto")
   }
     else{
        alert("tu número es mayor que el secreto")
    }
}
6
let genero=prompt("usted es hombre o mujer")
let age=prompt("cual es su edad")
if((genero=="hombre") &&(age>=65)){
    alert("usted ya puede jubilarse")
    }else if ((genero=="mujer") &&(age>=60)){
        alert("usted ya puede jubilarse")
    }
else{
    alert("usted no esta en edad de jubilarse, siga trabajando")
}
 