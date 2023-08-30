const MENOSDE5= 1400
const MASDE5= 1000
let total
let cantpro=prompt(`cuantas pelotas quiere comprar?`)
if(cantpro>=5){
    total=cantpro*MASDE5
    alert(`debe pagar ${total}`)}
    else{
        total=cantpro*MENOSDE5
        alert(`debe pagar ${total}`)
    }
