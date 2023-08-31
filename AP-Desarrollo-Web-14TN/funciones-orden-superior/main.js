console.log(arrayObjetos);
// DECLARACION Y LLAMADO

// Primero la declaracion
// Declaracion funcion que consologuea
function sumar(){
     console.log(1+1);
}
// después el llamado
// llamado o ejecución
// sumar()

// Declaracion funcion que retorna
function sumar2(){
     return 1+1;
}
// llamado o ejecución
let resultado = sumar2()
// console.log(resultado);

// ------------------------------------------------------
// PARAMETRO Y ARGUMENTO

// Cuánto vale acá el parámetro!?
function suma3 (numeroX, numeroY){
     console.log(numeroX + numeroY);
}

// Forma en que se asignan los argumentos
// suma3(3,5)

// Declaracion imprimirEnHTML - parámetro sin valor
function imprimirEnHTML(objeto){
     let template = ""
     template = `
     <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${objeto.nombre}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
     </div>
     `
     return template
}

let estructura;
for(let objetoMentor of arrayObjetos){
     // llamado imprimirEnHTML - argumento con valor
     estructura += imprimirEnHTML(objetoMentor)
}
// console.log(estructura);


// ------------------------------------------------------
// PASO DE PARAMETROS INTRO FN ORDEN SUP

// Declaración
// function imprimirPorConsola(elementoActual, indice, array){
//      console.log(elementoActual);
//      console.log(indice);
//      console.log(array);
// }

// Variables
let actual = {
     nombre: "Fede",
     edad: 39
}
let i = 0;
let arreglo = [
     {
          nombre: "Fede",
          edad: 39
     },
     {
          nombre: "Flor",
          edad: 26
     }
]

// Llamado
// imprimirPorConsola(actual, i, arreglo)

// ------------------------------------------------------
// FUNCIONES FLECHA

// Quitamos function
// Quitamos el nombre, son anónimas
// Agregamos una flecha entre () y {}
// La guardamos en una variable
// let flecha = (elementoActual,indice,array) => {
//      console.log(elementoActual);
//      console.log(indice);
//      console.log(array);
// }
// Ejecutamos
// flecha(actual, i, arreglo)

// Patiendo de este ejemplo
// function imprimirPorConsola(indice){
//      return indice + 1
// }

// Quitamos function
// Quitamos el nombre, son anónimas
// Agregamos una flecha entre () y {}
// La guardamos en una variable
// Si es 1 sola instruccion 1 lo podemos hacer en 1 línea
// Si tiene 1 solo parámetro, podemos sacar los ()
// Si la instrucción es 1 sola línea podemos sacar las {}
// Si es una sola línea podemos sacar el return y queda implícito
// let flecha2 = indice => indice + 1 

// console.log(flecha2(2));

// Patiendo de este ejemplo
// function imprimirPorConsola(indice){
//      let resultado = indice + 1
//      return resultado
// }

// let flecha3 = (indice) => {
//           let resultado = indice + 1
//           return resultado
//      }

// console.log(flecha3(5));

// ------------------------------------------------------
// FUNCIONES DE ORDEN SUPERIOR
// Forma en que la función callback recibe los 3 argumentos

// function imprimirPorConsola(elementoActual, indice, array){
//      console.log("Elemento Actual", elementoActual);
//      console.log("indice", indice);
//      console.log("array original", array);
// }

// Se pasa al forEach como una función sin ejecutar, si se la paso ejecutada le paso el return, como no tiene da undefined
// imprimirPorConsola

// 1 - For Each (No retorna nada)
// arrayObjetos.forEach( imprimirPorConsola )

// 2 - Map (Retorna un array con la misma cantidad de elementos)
// Para que retorne debe retornar algo la función callback
// function imprimirPorConsola(elementoActual, indice, array){
//      return elementoActual
// }

// let map = arrayObjetos.map( imprimirPorConsola ) 
// console.log(map);


// Ahora armamos la función flecha dentro del map
// function imprimirPorConsola(elementoActual, indice, array){
//      return elementoActual
// }

// let map = arrayObjetos.map( (elementoActual, indice,  array) =>  elementoActual  ) 
// console.log(map);

// Ahora la fn flecha tiene más de una sentencia
// let map = arrayObjetos.map( elementoActual =>  {
//      elementoActual.id = Math.round(Math.random()*1000)
//      return elementoActual
// }  ) 
// console.log(map);

// 3 - Filter (Retorna un array cada vez que la función callback devuelva true)
// let filtrado = arrayObjetos.filter( (elementoActual) =>  elementoActual.edad > 30 )
// console.log(filtrado);

// let filtrado2 = arrayObjetos.filter( (elementoActual) =>  elementoActual.tecnologias.includes("ReactJS") )
// console.log(filtrado2);

// 4 - Find (Retorna el primer elemento que de como true en la fn callback)
// let encontrado = arrayObjetos.find( (elementoActual) =>  elementoActual.edad == 38 )
// console.log(encontrado);

// 5 - Some (Retorna un booleano si esxite algún elemento que cumple la condición)
// let booleano = arrayObjetos.some( (elementoActual) =>  elementoActual.edad == 38 )
// console.log(booleano);

// 6 - FindIndex (Retorna un la posición del elemento que cumple la condición)
// let indice = arrayObjetos.findIndex( (elementoActual) =>  elementoActual.nombre == "Fede" )
// console.log(indice);

// 6 - Every (Retorna un booleano si todos los elementos cumplen la condición)
// let booleano = arrayObjetos.every( (elementoActual) =>  elementoActual.nombre != "" )
// console.log(booleano);

// 7 - Sort (Modifica el array original y ordena los elementos según el valor que retorne la fn callback)
let numerosUnaCifra = [1,8,6,5,4,2,3,1] 
let numeroMayores = [20,30,101,50,15,800,7500,94,621]

let numeroOrdenados1 = numerosUnaCifra.sort( (a,b) => a-b )
console.log(numerosUnaCifra);

// Esto es lo que hace la fn callback
function ordenar(a,b){
     if(a>b){
          return 1 // b tiene que ir antes que a
     }else if(a<b){
          return -1 // a tiene que ir antes que b
     }else{
          0 // si a y b son iguales
     }
}

let numeroOrdenados2 = numeroMayores.sort( (a,b) => a-b )
console.log(numeroOrdenados2);

// 8 - Reduce (Reduce un array a un solo elemento)
// Recibe más parámentros que las otras funciones

// function callback(accumulador, elementoActual, indice, arrayOriginal){
//      console.log("acumulador", accumulador);
//      console.log("Elemento Actual", elementoActual);
//      console.log("indice", indice);
//      console.log("array original", arrayOriginal);
//      return 1+1
// }

// let arrayReducido = arrayObjetos.reduce( callback, 0 )
// console.log(arrayReducido);

let array = [1,2,3,4,5,6,7,8,9,10]

// let reduce2 = array.reduce((accumulador, elementoActual) => {
//      console.log(`${accumulador} = ${accumulador} + ${elementoActual}`);
//      return accumulador + elementoActual
// }, 0)
// console.log(reduce2);

let arrayGanancias = [
     {
          mes: "Enero", 
          ganancias: 500,
          perdidas: 300,
     },
     {
          mes: "Febrero", 
          ganancias: 1500,
          perdidas: 600,
     },
     {
          mes: "Marzo", 
          ganancias: 4500,
          perdidas: 100,
     },
     {
          mes: "Abril", 
          ganancias: 200,
          perdidas: 500,
     },
     {
          mes: "Mayo", 
          ganancias: 700,
          perdidas: 300,
     },
     {
          mes: "Junio", 
          ganancias: 1500,
          perdidas: 300,
     },
]

let gananciasSemestre = arrayGanancias.reduce((acumulador, elementoActual) => {
     acumulador.gananciasSemestrales += elementoActual.ganancias
     acumulador.perdidasSemestrales += elementoActual.perdidas
     return acumulador
}, {
     gananciasSemestrales: 0,
     perdidasSemestrales: 0
     }
)
console.log(gananciasSemestre);