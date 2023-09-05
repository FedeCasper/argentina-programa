// Escuchadores de eventos en línea
// En la etiqueta html por ejemplo
// onclick="console.log('hiciste click')"


// Recupero la referencia de un elemento html
//-----------------------------------------------
const $contenerDivs = document.getElementById('box')
console.log($contenerDivs);


// Declaro la función para pasarlar al escuchador
//-----------------------------------------------
function mostrarEventoPorConsola(evento){
     console.log(evento);
}

$contenerDivs.addEventListener("click", mostrarEventoPorConsola)


// Accedo al target del evento
//-----------------------------------------------
function mostrarEventoPorConsola(evento){
     console.log([evento.target]);
}

$contenerDivs.addEventListener("click", mostrarEventoPorConsola)


// Si quiero modificar estilos accedo a classList dentro
//-----------------------------------------------
function mostrarEventoPorConsola(evento){
     console.log(evento.target.classList);
     console.log([evento.target.classList]);
}

$contenerDivs.addEventListener("click", mostrarEventoPorConsola)

// Toogle agrega una clase si no la tiene y la quita si la tiene
//-----------------------------------------------
function mostrarEventoPorConsola(evento){
     console.log(evento.target.classList);
     // evento.target.classList.add('circulo');
     evento.target.classList.toggle('circulo')
}

$contenerDivs.addEventListener("click", mostrarEventoPorConsola)


// Creamos la condición para que no afecte al padre
//-----------------------------------------------
function mostrarEventoPorConsola(evento){
     console.log(evento.target.classList);
     if(evento.target.classList.contains('cuadrado')){
          evento.target.classList.toggle('circulo')
     }
     console.log("click fuera");
}

$contenerDivs.addEventListener("click", mostrarEventoPorConsola)


// Creando checks dinámicos
const $contenedorChecks = document.getElementById('contenedorChecks')
console.log($contenedorChecks);

// Recupero la referencia de un elemento html
//-----------------------------------------------
const $contenerCards = document.getElementById('contenedorCards')
console.log($contenerCards);

// Creamos la categorias sin repetir para los checks
const catSinRepetir =  [ ...new Set( arrayObjetos.map(objeto => objeto.modulo) ) ] ;

// Funcion que crea la estructura del check
function crearEstructuraCheck(string){
     let template = ""
     template = `
     <label class="me-2">
          <input type="checkbox" class="me-2" name="frutas" value="}">
     </label>
     `
     return template
}

// Función que imprime los checks en el HMTL
function imprimirChecksEnHTML (array, elementoHTML){
     let estructura = ""
     array.forEach( string => {
          estructura += crearEstructuraCheck(string)
     } )
     elementoHTML.innerHTML = estructura
}
imprimirChecksEnHTML(catSinRepetir, $contenedorChecks)

// Agregamos el escuchador de eventos y vemos que nos devuelve
// $contenedorChecks.addEventListener("change", (e) => {console.log([e.target.value]);})

// Agregamos el escuchador de eventos y buscamos el array de chequeados
$contenedorChecks.addEventListener("change", (e) => {
     let array = Array.from(document.querySelectorAll("input[type='checkbox']:checked")).map( check => check.value)
     console.log(array);
     let objetosFiltradosPorCheck = arrayObjetos.filter(objeto => array.includes(objeto.modulo))
     console.log(objetosFiltradosPorCheck);
     imprimirCardsEnHTML(objetosFiltradosPorCheck, $contenerCards)
})

// Declaro mi función para crear estructuras de cards
function crearEstructuraCard (){
     let template = ""
     template = `
     <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
     </div>
     `
     return template
}

// Declaro mi función para imprimir cards
function imprimirCardsEnHTML (array, elementoHTML){
     let estructura = ""
     array.forEach( string => {
          estructura += crearEstructuraCard(string)
     } )
     elementoHTML.innerHTML = estructura
}

