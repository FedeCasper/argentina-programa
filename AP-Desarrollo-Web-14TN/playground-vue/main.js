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
               mensajeNoEncontrado: ""
          }
     },
     created() {
          console.log("En create");
          fetch("https://apisimpsons.fly.dev/api/personajes?limit=50")
               .then(response => response.json())
               .then(data => {
                    this.personajes = data.docs  // arrayObjetos
                    console.log(this.personajes);

                    this.personajesFiltrados = this.personajes

                    this.generosSinRepetir = [...new Set(this.personajes.map(objeto => objeto.Genero))];
                    console.log(this.generosSinRepetir);

                    this.mensajeNoEncontrado = "No se encontró ningún evento"
               })
               .catch(error => { console.log(error) })
     },
     methods:{
          filtroPorSearch() {
               this.personajesFiltrados = this.personajes.filter(objeto => objeto.Nombre.toLowerCase().includes(this.inputValue.toLowerCase()))
               console.log(this.personajesFiltrados);
          },
          filtroPorCheck() {
               if (this.valoresCheck.length > 0) {
                    this.personajesFiltrados = this.personajesFiltrados.filter(objeto => this.valoresCheck.includes(objeto.Genero))
               } 
          },
          // filtroCruzado() {
          //      this.filtroPorSearch()
          //      this.filtroPorCheck()
          // }
     }, 
     computed:{
          filtroCruzado() {
               this.filtroPorSearch()
               this.filtroPorCheck()
          }
     }
})

app.mount('#app')
