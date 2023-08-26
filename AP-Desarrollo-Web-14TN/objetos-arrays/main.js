let persona = {
     nombre: "Federico",
     apellido: 'Rouyere',
     edad: 39,
     esMentor: true
}

let personaX = persona

let persona2 = {
     apodo: "Flor",
     colorDePelo: "Negro"
}

let persona3 = {
     nombre: "Ian",
     edad: 22
}

// console.log(persona);

// Forma de acceder a una propiedad de un objeto
// Más fácil y legible
// console.log(persona.nombre);
// console.log(persona.edad);
// Permite trabajar con propiedades dinámicas
// console.log(persona['edad'])

// Crear una propiedad
// persona.colorFavorito = "Violeta"
// console.log(persona);

// Modificar
// persona.nombre = "Fede"
// persona.edad = 25
// console.log(persona);

// console.log(persona);
// persona.nombre += " conocido como Fede"
// persona.edad += 10


// Borrar una propiedad
// delete persona.nombre
// delete persona.edad
// console.log(persona);

// METODOS DE OBJETOS
// keys
// console.log(Object.keys(persona));

// values
// let resultadoMetodoValues = Object.values(persona)
// console.log(resultadoMetodoValues);

// Entries
// let resultadoEntries = Object.entries(persona)
// console.log(resultadoEntries);

// Assign
// (objetivo, ...fuente)
// let resultadoAssign = Object.assign(persona, persona2)
// console.log(resultadoAssign);
// console.log(persona);

// let resultadoAssign = Object.assign(persona, persona2, persona3)
// console.log(persona);

// Freeze - impide que el objeto sea modificado
// Object.freeze(persona)
// persona.deporte = "Fútbol"
// persona.nombre = "Franco"
// console.log(persona);

// Seal - permite solo modificar propiedades
// Object.seal(persona)
// persona.nombre = "Franco"
// persona.deporte = "Fútbol"
// console.log(persona);

// Is
// console.log( Object.is(persona, persona2) );
// console.log( Object.is(persona, personaX) );

// let objeto1 = {}
// let objeto2 = {}
// console.log( Object.is(objeto1, objeto2) );

// let num1 = 1
// let num2 = 1

// console.log( num1 === num2 );

// hasOwnProperty
// console.log(persona.hasOwnProperty("nombre"));
// console.log(persona.hasOwnProperty("altura"));

// METODOS DE ARRAY
// Posiciones comienzan desde el 0
// let arrayStrings = [ "Rojo", "Verde", "Azul", "Violeta", "Negro"]
// console.log(arrayStrings);
// Para acceder a elementos del array usamos []
// console.log(arrayStrings[0]);

// let arrayNumeros = [1,2,3,4,5]
// console.log(arrayNumeros);
// console.log(arrayNumeros[2]);

let arrayDeObjetos = [ 
     {
          nombre: "Fede",
          edad: 39
     },
     {
          nombre: "Flor",
          edad: 23
     },
     {
          nombre: "Tomás",
          edad: 22
     }
]
// Accediendo a una propiedad de un objeto dentro de un array
// console.log( arrayDeObjetos[0].nombre )

// Propiedad que me da el largo del array
// console.log( arrayDeObjetos.length );

// METODOS
// console.log(arrayStrings);
// push
// arrayStrings.push("Violeta")
// console.log(arrayStrings);

// pop
// let ultimoElementoDelArray = arrayStrings.pop()
// console.log(arrayStrings);
// console.log(ultimoElementoDelArray);

// shift
// let primerElementoDelArray = arrayStrings.shift()
// console.log(arrayStrings);
// console.log(primerElementoDelArray);

// unshift 
// arrayStrings.unshift("Negro")
// console.log(arrayStrings);

// indexof
// console.log( arrayStrings.indexOf("Verde") );
// console.log( arrayStrings.indexOf("Violeta") );

// includes
// console.log( arrayStrings.includes("Rojo") );
// console.log( arrayStrings.includes("Violeta") );
// console.log( arrayStrings.includes("rojo") );

// toString
// console.log( arrayStrings.toString() );

// concat
// let colores2 = ["Negro", "Blanco", "Naranja"]
// let colores3 = ["Esmeralda", "Salmón"]
// console.log( arrayStrings.concat(colores2) );
// console.log(arrayStrings);
// console.log( arrayStrings.concat(colores2, colores3) );

// join
// console.log(arrayStrings.join());
// console.log(arrayStrings.join("_"));
// console.log(arrayStrings.join(" / "));
// console.log(arrayStrings.join(" 🎃 "));

// reverse
// console.log(arrayStrings.reverse());

// slice
// console.log(arrayStrings);
// El primer valor define donde empieza y lo incluye
// El segundo valor define donde termina y no lo incluye
// console.log(arrayStrings.slice(1,4));

// Si no definen un segundo valor va hasta el final
// console.log(arrayStrings.slice(2))

// console.log(arrayStrings);
// console.log(arrayStrings.slice(1, -1))

// splice
// 1er valor define donde empieza
// 2do valor define ctos elementos va a borrar
// 3er valor define porque va a ser reemplazado
// arrayStrings.splice( 1, 1, "Naranja" );
// console.log(arrayStrings);

// arrayStrings.splice( 1, 1, "Naranja","Amarillo" );
// console.log(arrayStrings);

// arrayStrings.splice( 1, 3, "Naranja");
// console.log(arrayStrings);

// sort (modifica el array original)
// let numerosUnaCifra = [9,5,3,4,2,1]
// let arrayStrings = [ "Rojo", "Verde", "Azul", "Violeta", "Negro"]
// let numerosTresCifras = [10, 102, 50, 5, 500, 99, 2, 200]

// numerosUnaCifra.sort()
// console.log(numerosUnaCifra);

// arrayStrings.sort()
// console.log(arrayStrings);

// numerosTresCifras.sort()
// console.log(numerosTresCifras);