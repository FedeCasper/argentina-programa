// ¿Cómo hago para que contador llegue a numeroLimite y no se pase?
// let contador = 1
// let numeroLimite = 5

// contador = contador + 1
// console.log(contador);

// contador = contador + 1
// console.log(contador);

// contador = contador + 1
// console.log(contador);

// contador = contador + 1
// console.log(contador);
// Acá se pasa
// contador = contador + 1
// console.log(contador);

// if(contador < numeroLimite){
//      contador = contador + 1
// }
// console.log(contador);

// if(contador < numeroLimite){
//      contador = contador + 1
// }
// console.log(contador);

// if(contador < numeroLimite){
//      contador = contador + 1
// }
// console.log(contador);

// if(contador < numeroLimite){
//      contador = contador + 1
// }
// console.log(contador);
// Acá ya no se pasa
// if(contador < numeroLimite){
//      contador = contador + 1
// }
// console.log(contador);

// for ( let contador = 1 ; contador <= numeroLimite ; contador = contador + 1){
//      console.log(`Contador en la vuelta ${contador} va a valer ${contador}`);
// }

// function imprimirIntervalo(numero){
//      for(let contador = numero ; contador >= 1 ; contador = contador - 1){
//           console.log(contador);
//      }
// }
// imprimirIntervalo(10)

// function tablasDeMultiplicar(num){
//      for(let i = 1 ; i <= 10 ; i++){
//           console.log(`${num} x ${i} = ${num*i}`);
//      }
// }
// tablasDeMultiplicar(5)

// let contador = 1
// while(contador <= 10){
//      console.log(`En la vuelta número ${contador} el valor de contador es ${contador}`)
//      contador++
// }

let numeroSecreto = 7
let numero = 0

while( numero != numeroSecreto){
     numero = Math.round(Math.random()*10)
     console.log(numero);

}
console.log(`el número secreto era ${numero}`);