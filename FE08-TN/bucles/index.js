//Estructuras de control

//Bucle FOR
// inicialización (let i = 0) se ejecuta 1 vez al entrar (let i = 0)
// condicion (i < 5) se comprueba en cada iteración
// step (i++) se ejecuta despues del body pero antes de la condicion

// for (let i = 0 ; i < 5 ; i++){
//      console.log(i);
// }

//Ejemplo práctico tabla de 5
// for(let i = 1 ; i < 11 ; i++){
//      console.log(5*1);
//      console.log(`5 * ${i} = ${5*1}`);
// };

//Ejemplo práctico con array de colores
// let colores = ["violeta", "magenta", "aquamarine", "naranja", "cyan"];
// for(let i = 0 ; i < colores.length ; i++) {
//      console.log(colores[i]);
// }

//FOR IN (Para objetos)
// let pelicula = {
//      titulo: "Indiana Jones",
//      genero: "comedia-accion",
//      duracion: "168",
// }

// for(let propiedades in pelicula){
//      console.log(propiedades);
//      console.log(pelicula[propiedades]);
// }

//FOR OF  (Para Arrays o cadenas de texto)
// let frutas = ["Banana", "Manzana", "Naranja"];

// for(let fruta of frutas){
//      console.log(fruta);
// }

//WHILE
// let contador = 0;

// while(contador < 5){
//      console.log(contador);
//      contador++
// }

//Ejemplo práctico de while y prompt
// let numeros = [];
// let num = prompt('Ingrese un número : (termina en 0)');

// while(num != 0){
//      numeros.push(num)
//      num = prompt('Ingrese un número : (termina en 0)');
// }

// console.log(numeros);


