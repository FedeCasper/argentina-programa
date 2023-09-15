const { createApp } = Vue

const app = createApp({
     data() {
          return {
               // propiedades reactivas
               personajes: [],
               generosSinRepetir: [],
               inputValue: "",
               personajesFiltrados: [],
               valoresCheck: [],
               mensajeNoEncontrado: "",
               favoritos: []
          }
     },
     created() {
          fetch("https://apisimpsons.fly.dev/api/personajes?limit=50")
               .then(response => response.json())
               .then(data => {
                    this.personajes = data.docs  // arrayObjetos
                    console.log(this.personajes);
                    this.personajesFiltrados = this.personajes
                    this.generosSinRepetir = [...new Set(this.personajes.map(objeto => objeto.Genero))];
                    // console.log(this.generosSinRepetir);
                    this.mensajeNoEncontrado = "No se encontró ningún evento"
                    this.favoritos = this.obtenerLocalStorage()
                    console.log(this.favoritos);
               })
               .catch(error => { console.log(error) })
     },
     methods:{
          filtroPorSearch() {
               this.personajesFiltrados = this.personajes.filter(objeto => objeto.Nombre.toLowerCase().includes(this.inputValue.toLowerCase()))
               // console.log(this.personajesFiltrados);
          },
          filtroPorCheck() {
               if (this.valoresCheck.length > 0) {
                    this.personajesFiltrados = this.personajesFiltrados.filter(objeto => this.valoresCheck.includes(objeto.Genero))
               } 
          },
          agregarQuitarFavoritos(id){
               console.log(id);
               if(this.favoritos.find( personaje => personaje._id == id  )){
                    this.favoritos = this.favoritos.filter(personaje => personaje._id != id)
               }else{
                    const personajeEncontrado = this.personajes.find( personaje => personaje._id == id)
                    this.favoritos.push(personajeEncontrado)
               }
               console.log(this.favoritos);
               const favTextoPlano = JSON.stringify(this.favoritos)
               localStorage.setItem('favoritos', favTextoPlano)
          },
          obtenerLocalStorage(){
               const favoritosPlanos = localStorage.getItem('favoritos')
               const favoritosConvertidos = JSON.parse(favoritosPlanos)
               return favoritosConvertidos
          }
     }, 
     computed:{
          filtroCruzado() {
               this.filtroPorSearch()
               this.filtroPorCheck()
          }
     }
})

app.mount('#app')


// Formato json
// método json()
// objeto JSON

// let persona ={
//      nombre: "Franco",
//      edad: 27
// }

// console.log(persona);
// const personaTextoPlano = JSON.stringify(persona)
// console.log(personaTextoPlano);

// const nuevoObjeto = JSON.parse(personaTextoPlano)
// console.log(persona === nuevoObjeto);

// localStorage.setItem('objetoPersona', personaTextoPlano)

// const dataLocalStorage = localStorage.getItem('objetoPersona')
// console.log(dataLocalStorage);

// console.log(JSON.parse(dataLocalStorage));

// localStorage.removeItem('objetoPersona')
// localStorage.clear()
