
// Objeto de ejemplo
let personaje = {
     nombre: "Cloud",
     edad: 38,
     saludar: function saludar(){
          console.log("Hola soy " + this.nombre)
     }
}

// let nombre = personaje.nombre

// Destructuring
let {nombre} = personaje
let {edad} = personaje

// let {nombre, edad} = personaje

console.log(nombre);
console.log(edad);


// Aplicando Vue
const { createApp } = Vue

// createApp es un método de el objeto Vue
createApp({
     // Data vamos a declarar las propiedades reactivas que vamos a usar en nuestro HTML
     data(){
          return{
               mensaje: "Bienvenidos al sitio",
               arrayOriginal: [],
               arrayObjetosFF8: [],
               nombreIngresado: '',
               filtrarPorSeleccion: []
          }
     },
     // Created es donde vamos a poner aquello que queremos que se ejecute una única vez creada nuestra aplicación
     created(){

          fetch("https://www.moogleapi.com/api/v1/characters") // Me devuelve una promesa y tiene que ser manjeado manejado con .then()
          .then(response => response.json()) // Me devuelve una promesa y tiene que ser manjeado manejado con .then(), .json() me convierte el json a un objeto de javascript
          .then(data => {
               this.arrayOriginal = data
               console.log(this.arrayOriginal)
               setTimeout(()=> this.mensaje = "Bienvenidos al sitio de Final Fantasy", 5000)
               this.arrayObjetosFF8 = this.arrayOriginal.filter(objeto => objeto.origin == "Final Fantasy VIII")
               console.log(this.arrayObjetosFF8);
          })
          .catch(error => console.log(error)) // Maneja el error en caso de que haya uno y evita que la aplicación se rompa

     },
     // Methods el lugar donde vamos a colocar funciones que se ejecutan cuando las llamamos
     // methods:{},

     // Computed, al haber algún cambio en las propiedades de las funciones colocadas aquí, estas se ejecutarán
     computed:{
          filtrarPorInputTexto: function filtro (){
               this.filtrarPorSeleccion = this.arrayObjetosFF8.filter(objeto => objeto.name.includes(this.nombreIngresado));
          }
     }
}).mount("#app") // Este método va a montar nuestra aplicación en el div id=app



