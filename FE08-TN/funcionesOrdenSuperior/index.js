console.table(data);

//Métodos de array

data.push({ name: 'pikachu' })
console.table(data);

data.pop()
console.table(data);

data.splice( 0 , 2 , {name:'pikachu'} , {name: 'raichu'})
console.table(data);

// Funciones de orden superior

// 1 - SORT
let pokemones = ["bulbasaur", "weedle", "rattata", "squirtle"];
console.log(pokemones.sort());

let numerosPequeños = [1,2,7,9,3,4];
console.log(numerosPequeños.sort());

let numerosGrandes = [106,23,74,901,3023,42];
console.log(numerosGrandes.sort((a,b) => a-b));

// 2 - FOR EACH (Funcion Flecha)
console.log(data.forEach( pokemon => console.log(pokemon.name) )); 

// 2 - FOR EACH (Funcion Anónima)
console.log(data.forEach( function (pokemon) {console.log(pokemon.name)} ));

// 2 - FOR EACH (Funcion Nombrada)
console.log(data.forEach(imprimirNombre));

function imprimirNombre (pokemon) {
     console.log(pokemon.name)
}

// 3 - MAP
let tiposDePokemon = data.map( objeto => objeto.type)
console.log(tiposDePokemon);

let cumpleañosPokemon = data.map( objeto => objeto.birthday)
console.log(cumpleañosPokemon);

// 4 - FILTER

let pokemonesFuego = data.filter( objeto => objeto.type === "fire")
console.log(pokemonesFuego);
console.log(pokemonesFuego.sort());

let pokemonesConC = data.filter( pokemon => (pokemon.name.startsWith('c')))
console.table(pokemonesConC);

// 5 - FIND
let primerPokemonConC = data.find( pokemon => (pokemon.name == "bulbasaur"))
console.log(primerPokemonConC);

// 6 - SOME
let pokemonPesado = data.some( pokemon => pokemon.type == "tierra" )
console.log(pokemonPesado);

// 7 - REDUCE
let gananciasSemanales = [100,205,310,470,550];

// El valor inicial si no lo definimos es el primer elemento del array
let gananciaSemana = ganancias.reduce( (acumulador , valorActual) => {
     console.log(`${acumulador} x ${valorActual}`)
     return acumulador * valorActual
}, 2)
console.log(gananciaSemana);

let coloresPrimariosLuz = ["verde", "rojo", "azul"]

let arrayColoresPrimariosLuz =  coloresPrimariosLuz.reduce(  (valorAnterior, valorActual) => {
     console.log(valorAnterior + valorActual);
     return valorAnterior + valorActual
}, "Blanco = ")
console.log(arrayColoresPrimariosLuz);














//Invertir el ordenamiento alfabetico
// function ordenarInvertido (a,b){
//      if(a < b){
//           return 1;
//      } else if(a > b){
//           return -1;
//      } else {
//           return 0;
//      }
// }


//Funciones de orden superior

// 1A - ForEach (Recibiendo una función flecha)

// 1B - ForEach (Recibiendo una función anónima)

// 1C - ForEach (Recibiendo una función)

// 2A - Map 

// 2B - Map (Map retorna ForEach no retorna)

// 3A - Filter 

// 4A - Find 

// 5A - Some 

// 6A - Reduce 



