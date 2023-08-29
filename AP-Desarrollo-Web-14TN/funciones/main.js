
//Declaración de funciones:  

// function saludar(){
//     console.log("Hola chicos")
// }
// saludar()


//Expresion de funcion, se guarda en una variable

// let saludoDos = function(){
//  console.log("Soy el saludo dos")
// }
// saludoDos()

//Prametros de una funcion:

// function saludar(){
//     console.log("Hola" + "Matias")
// }
// saludar()


// function saludarAlumno(alumno){
//     console.log("Hola" + alumno)
// }

// saludarAlumno("Ana")

// function saludarAlumno(alumno, curso){
//     console.log("Hola" + alumno + "alumno del curso" + curso)

// } 

// saludarAlumno(" Flor ", "Front")


//parametro por default

// function saludarAlumno(alumno = "-", curso = "front"){
//     console.log(`Hola ${alumno} del curso ${curso}`)
// }

// saludarAlumno("Ana")

//Return 


// const crearSaludo = function(alumno){
//     let saludo = `Hola ${alumno}`
//     return saludo
// }

// const saludoLucas = crearSaludo('Lucas')
// console.log(saludoLucas)







const mascotas = [
     {
          nombre: "Beki",
          edad: 11,
     },
     {
          nombre: "Kira",
          edad: 11,
     },
     {
          nombre: "Grey",
          edad: 7,
     },
     {
          nombre: "Inti",
          edad: 6,
     },
     {
          nombre: "More",
          edad: 5,
     },
     {
          nombre: "Tobi",
          edad: 1.5,
     },
]
//quiero un array con mascotas mayores a 7 años, sin funciones

// let mascotasMayores = []
// for(let mascota of mascotas){
//     if(mascota.edad >= 7){
//         mascotasMayores.push(mascota)
//     }
// }
// console.log(mascotasMayores)


// function filtroPorEdad(listaMascotas, edad){
//     let filtrados = []
//     for(let mascota of listaMascotas){
//         if(mascota.edad >= edad){
//             filtrados.push(mascota)
//         }
//     }
//      return filtrados
// }

// // let mascotasMayoresASeis = filtroPorEdad(mascotas, 6)
// // console.log(mascotasMayoresASeis)

// let mascotasMayoresATres = filtroPorEdad(mascotas , 3)
// console.log(mascotasMayoresATres)



//Funcion flecha


const sumar = (numero1, numero2) => numero1 + numero2
const resultado = sumar(10, 5)
console.log(resultado)