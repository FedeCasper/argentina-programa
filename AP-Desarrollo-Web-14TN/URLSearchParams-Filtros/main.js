const $contenedorChecks = document.getElementById('contenedorChecks')
const $containerCards = document.getElementById('contenedorCards')

// Creamos la categorias sin repetir para los checks
const catSinRepetir = [...new Set(arrayObjetos.map(objeto => objeto.modulo))];

// Funcion que crea la estructura del check
function crearEstructuraCheck(string) {
     let template = ""
     return template = `
     <label class="me-2">
          <input type="checkbox" class="me-2" name="frutas" value="${string}">${string}
     </label>
     `
}

// Función que imprime los checks en el HMTL
function imprimirChecksEnHTML(array, elementoHTML) {
     let estructura = ""
     array.forEach(string => {
          estructura += crearEstructuraCheck(string)
     })
     elementoHTML.innerHTML += estructura
}
imprimirChecksEnHTML(catSinRepetir, $contenedorChecks)

// Agregamos el escuchador de eventos y buscamos el array de chequeados
$contenedorChecks.addEventListener("change", (e) => {
     let array = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map(check => check.value)
     let objetosFiltradosPorCheck = arrayObjetos.filter(objeto => array.includes(objeto.modulo))
     imprimirCardsEnHTML(objetosFiltradosPorCheck, $containerCards)
})

// Declaro mi función para crear estructuras de cards
function crearEstructuraCard(objeto) {
     let template = ""
     return template = `
     <div class="card" style="width: 18rem;">
          <img src="${objeto.imagen}" class="card-img-top" alt="..." style="height: 15rem; object-fit: cover;">
          <div class="card-body">
          <h5 class="card-title">${objeto.nombre}</h5>
          <h5 class="card-title text-warning">${objeto.modulo}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="./detalles.html?nombre=${objeto.nombre}" class="btn btn-primary">Go somewhere</a>
          </div>
     </div>
     `
}

// Declaro mi función para imprimir cards
function imprimirCardsEnHTML(array, elementoHTML) {
          let estructura = ""
          array.forEach(string => {
               estructura += crearEstructuraCard(string)
          })
          elementoHTML.innerHTML = estructura
}
imprimirCardsEnHTML(arrayObjetos, $containerCards)
