// Intro a js

let miNombreCompleto = "Eduardo Rafiel Mendaza"
miNombreCompleto = "Eduardo Rafael Mendoza"
// let miNombreCompleto = "Eduardo" no se puede volver a redefinir la misma variable con el mismo nombre

const dni = 12312312
let numeroConComa = 2.54

let estaCasado = false

let objeto = null

let objeto2 = undefined

let indice = 20

const frutas = ["pera","anana","manzana","sandia","tomate"]

const numerosFavoritos = [3,2,3,6,7,5,3]

numerosFavoritos

// console.log(frutas[3])

frutas[2] = "kiwi"

frutas

const alumno1 = {
  genero: 'x',
  edad: 25,
  nombre: 'Pepito Perez',
  dni: 83746546,
}

const alumno2 = {
  genero: 'femenino',
  edad: 20,
  nombre: 'Pepita Perez',
  dni: 9873427,
  esUniversitario: true,
}

alumno1.edad
alumno1.nombre
alumno2.esUniversitario

alumno2.nombre = 'Rocio Rodriguez'

const alumnoSSS = [alumno1,alumno2]

alumnoSSS

/* console.log()
alert()
prompt()
confirm() */

/* console.log(miNombreCompleto)
console.info(miNombreCompleto)
console.table(alumno1)
console.warn(alumno2)
console.error(miNombreCompleto) */

// alert("Hola como andas!")

// let nombreIngresadoPorPantalla = prompt("Cual es tu nombre?")

// console.log(nombreIngresadoPorPantalla)

// alert('Bienvenido '+nombreIngresadoPorPantalla)

// let confirmacionDelUsuario = confirm("Tas seguro de lo que estas haciendo?")

// console.log(confirmacionDelUsuario)

/* let numero1 = 3
let numero2 = 5

let suma = numero1 + numero2

console.log(suma)

let modulo = numero1 % numero2
console.log("Modulo",modulo) */

/* let nombre = "Eduardo"
let apellido = "Mendoza"

let nombreCompleto = nombre +" "+ apellido
let nombreCompleto2 = `Bienvenido ${nombre}`
console.log(nombreCompleto)
console.log(nombreCompleto2)

let mensaje = `Bienvenido ${nombre}, desea algo mas señor ${apellido}`
console.log(mensaje)

let edad = +prompt("cual es su edad?") */

// let numero1 = 33
// let numero2 = 22

// let comparacion1 = numero1 == numero2
// let comparacion2 = numero1 != numero2
// let comparacion3 = numero1 < numero2
// let comparacion4 = numero1 > numero2

// console.log("Numero1 y numero2 son iguales?",comparacion1)
// console.log(`${numero1} es distinto a ${numero2}?`,comparacion2)
// console.log(`${numero1} es menor a ${numero2}?`,comparacion3)
// console.log(`${numero1} es mayor a ${numero2}?`,comparacion4)

/* let contador = 0
console.log("contador",contador)
contador = contador + 1
console.log("contador",contador)
contador += 1
console.log("contador",contador)
contador += 1
console.log("contador",contador)
contador++
console.log("contador",contador)
++contador
console.log("contador",contador)
contador *= 2
console.log("contador",contador)
contador /= 2
console.log("contador",contador) */

// && || ! () 

/* let llueve = false
let hayPlata = false
let tenemosAuto = true

let salimos = !llueve

console.log("Llueve?",llueve)
console.log("Salimos?",salimos)

console.log("----------------------------------")

let pedimosComida = hayPlata

console.log("hayPlata?",hayPlata)
console.log("Pedimos comida?",pedimosComida)

console.log("----------------------------------")

let salimosDeCompras = (!llueve) && (hayPlata)

console.log("Llueve?",llueve)
console.log("Hay plata?",hayPlata)
console.log("Salimos de shopping?",salimosDeCompras)

console.log("----------------------------------")

let salimosDePaseo = ((!llueve) && hayPlata) || tenemosAuto

console.log("Llueve?",llueve)
console.log("Hay plata?",hayPlata)
console.log("Tenemos auto?",tenemosAuto)
console.log("Salimos de paseo?",salimosDePaseo) */

let player1 = +prompt("Jugador 1 ingresa un valor secreto!")
let player2 = +prompt("Jugador 2 ingresa un valor secreto!")

let ganador1 = player1 > player2
let ganador2 = player2 > player1
let empate = player1 == player2

console.log("Gano el player 1?",ganador1)
console.log("Gano el player 2?",ganador2)
console.log("Empataron?",empate)

