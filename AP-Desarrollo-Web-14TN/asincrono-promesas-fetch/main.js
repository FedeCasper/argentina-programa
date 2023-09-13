// console.log("Inicio");

// let suma = 1+1
// console.log(suma);

// function sumar(){
//      console.log("console.log fn", suma);
// }
// sumar()

// console.log("Fin");

// Promesas 

const arrayAlumnosPresentes = ["Andre", "Anto", "Celi", "Cintia", "Agustín"]

function pedirAsistencia(alumno){
     return new Promise( (resolve, reject) => {
          if(arrayAlumnosPresentes.includes(alumno)){
               resolve("El alumno está presente")
          }else{
               reject("El alumno no está")
          }
     } )
}

pedirAsistencia("Celi") // Retorna una promesa
.then( respuestaResolve => {
     let respuesta = respuestaResolve
     // console.log(respuesta);
} ) // para promesa que se cumple.
// .catch( respuestaReject => {console.log(respuestaReject);} ) // para promesa rechazada
// .finally( ()=> {console.log("El proceso finalizó");}) // Se ejecuta de cualquier manera


// Fetch - Es una API que nos permite hacer peticiones 
// fecth() - Método 

fetch("https://apisimpsons.fly.dev/api/personajes?limit=50") // Promesa
.then( (response) => response.json()) // Respuesta + json() = Promesa
.then( data => {
     let personajes = data.docs
     console.log(personajes);
     mostrarNombresPersonajes(personajes)
} ) // Manejo exitoso de la respuesta
.catch( error => {console.log(error)} )

function mostrarNombresPersonajes(array){
     for(let personaje of array){
          console.log(personaje.Nombre);
     }
}
     