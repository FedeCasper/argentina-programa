// declaración de una función

// para declarar palabra reservada: FUNCTION
// el nombre: NOMBRE_DE_LA_FUNCION
// luego parámetros entre paréntesis:
// () ó (param1) ó (param1, param2... paramN)
// y las llaves con las instrucciones: {}


////// EJEMPLO DE ERRORES EN VAR AL SER LLAMADAS ANTES QUE DECLARADAS

// console.log(siete)
// var siete = "siete"

// console.log(seis)
// let seis = "seis"

// console.log(cinco)
// const cinco = "cinco"


////// DECLARACION DE FUNCION (se puede llamar antes o después de declararla)
saludar1()
function saludar1() {
    console.log("hola mundo 1")
}
saludar1()


// EXPRESION DE FUNCION ()
let saludar2 = function () {
    console.log("hola mundo 2")
}
saludar2()


// FUNCION FLECHA (ejemplo común)
let mensaje3 = "hola mundo 3"

let saludar3 = (saludo) => {
    console.log(saludo)
}
saludar3(mensaje3)


// FUNCION FLECHA (ejemplo en una línea)
let mensaje4 = "hola mundo 4"

const saludar4 = saludo => console.log(saludo)
saludar4(mensaje4)




let msj1 = "hola"
let msj2 = "chau"

let bienvenida1 = "bienvenido"
let bienvenida2 = "gonza"

function mandarMsj(palabra1="1", palabra2="2") { // PARAMETROS ( en este caso POR DEFAULT )
    console.log(palabra1, palabra2)
}

mandarMsj(msj1,msj2) // ARGUMENTOS
mandarMsj(bienvenida1, bienvenida2)
mandarMsj(bienvenida2)
mandarMsj("Daniela")


/// EJEMPLO TABLAS
let tabla5 = 5
let siete = 7

function tablaMultiplicar(nro) {
    for (let i = 1; i<11; i++) {
        console.log(nro*i)
    }
}
tablaMultiplicar(tabla5)
tablaMultiplicar(siete)
tablaMultiplicar(6)
tablaMultiplicar(3)



////// RETURN Y SCOPE
function sumar(a, b) {
    let suma = a+b // SCOPE LOCAL, no puedo llamar a "suma" fuera de la función
    return suma
}

let resultado = sumar(2,4)
console.log(resultado)
let resultado2 = sumar(resultado, 5)
console.log(resultado2)



// EJEMPLO : devolver numeros pares de un array

let numeros = [1, 4, 5, 2, 10, 7, 8]

function arrayAleatorio() {
    let random = []
    while (random.length < 10) {
        random.push(Math.floor(Math.random() * 20))
    }
    return random
}
// console.log(arrayAleatorio())

function numerosPares(array) {
    let pares = []
    for (let nro of array){
        if (nro % 2 == 0){
            pares.push(nro)
        }
    }
    console.log(array) // para ver el array antes de devolver los pares
    return pares
}

console.log("ejemplo numeros")
console.log(numerosPares(numeros))

console.log("ejemplo aleatorio")
console.log(numerosPares(arrayAleatorio()))
