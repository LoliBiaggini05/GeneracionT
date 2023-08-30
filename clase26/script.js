// 1
let a=1
while(a<=100){
    console.log(a)
    a++
}
// 2
let b=100
while(b>=1){
    console.log(b)
    b--
}
// 3
let c=0
while(c<=200){
    console.log(c)
    c+=2
}
// 4
let d= 1
while (d<=100){
  if(d%3==0 && d%5==0){
    console.log(`${d}|FizzBuzz`)}
    else if (d%5== 0){
    console.log(`${d}|Buzz`)}
    else if (d%3==0){
    console.log(`${d}|Fizz`)}
   else{console.log(d)
}d++
}
// 5
let num1 = parseInt(prompt("Hola, por favor ingrese su primer número."))
let num2 = parseInt(prompt("Por favor ingrese su segundo número."))
if(num1<num2){
    while(num1<=num2){
        console.log(num1)
        num1++
    }
 }
else if(num1>num2){
     while(num1>=num2){
         console.log(num1)
         num1--
    }
}
else{
    console.log(num1)
}

//6
let numLimite = parseInt(prompt("Ingrese el número máximo para generar el numero random"))
let numRandom = parseInt(Math.random()* numLimite)
let numUsuario = parseInt(prompt("Ingrese un número"))
let contIntentos = 0
 while(numUsuario != numRandom){
     if(numUsuario>numRandom){
         alert(`el numero es menor a ${numUsuario}`)
    }
    else if(numUsuario<numRandom){
         alert(`el numero es mayor a ${numUsuario}`)
    }
    contIntentos++
    numUsuario= parseInt(prompt("Ingrese un número"))
}
alert(`le pegaste en el intento N° ${contIntentos}`)
