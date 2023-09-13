// REFERENCIAS A ELEMENTOS HTML ---------------------------------//
const $contenedorRadios =  document.getElementById('contenedorRadios')
const $select = document.getElementById('select')
const $contenedorCards = document.getElementById('contenedorCards')
// ----------------------------------------------------------------//


// CREACION E IMPRESION DE RADIOS ---------------------------------//
const arrayModulosRepetidos = arrayObjetos.map( objetoMentor => objetoMentor.modulo )
// console.log(arrayModulosRepetidos);
const set = new Set(arrayModulosRepetidos)
// console.log(set);
const arrayModulos = Array.from(set)
// console.log(arrayModulos);
function crearEstructuraRadios(string){
     return `
     <label class="me-2">
          <input type="radio" class="me-2" name="categorias" value="${string}">${string}
     </label>
     `
}
function imprimirRadios(referenciaHTML, arrayString){
     let estructura = ""
     for( let stringModulo of arrayString ){
          estructura += crearEstructuraRadios(stringModulo)
     }
     referenciaHTML.innerHTML = estructura
}
imprimirRadios($contenedorRadios, arrayModulos)
// ----------------------------------------------------------------//


// CREACION E IMPRESION DE SELECT ---------------------------------//
const arrayNombresMentores = arrayObjetos.map( objetoMentor => objetoMentor.nombre)
function crearEstructuraSelect(string){
     return `<option value="${string}">${string}</option>`
}
function imprimirSelect(array, referenciaHTML){
     let estructura = ""
     for(let stringNombre of array){
          estructura += crearEstructuraSelect(stringNombre)
     }
     referenciaHTML.innerHTML = estructura
}
imprimirSelect(arrayNombresMentores, $select)
// ----------------------------------------------------------------//


// CREACION E IMPRESION DE CARDS ---------------------------------//
function crearEstructuraCards(objeto){
     return `
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
function imprimirCards(array, referenciaHTML){
     if(array.length > 0){
          let estructura = ""
          for(let objeto of array){
               estructura += crearEstructuraCards(objeto)
          }
          referenciaHTML.innerHTML = estructura
     }else{
          referenciaHTML.innerHTML = '<h3>NO HAY NADA</h3>'
     }

}
imprimirCards(arrayObjetos, $contenedorCards)
// ----------------------------------------------------------------//

// ESCUCHADOR DE RADIOS -------------------------------------------//
$contenedorRadios.addEventListener( "change" , () => {
     const returnCruzados = filtrosCruzados(arrayObjetos, $select)
     imprimirCards(returnCruzados, $contenedorCards)
} )
// ----------------------------------------------------------------//


// ESCUCHADOR DE SELECT -------------------------------------------//
$select.addEventListener("change", ()=>{
     const returnCruzados = filtrosCruzados(arrayObjetos, $select)
     imprimirCards(returnCruzados, $contenedorCards)
} )
// ----------------------------------------------------------------//


// FILTRO DE RADIO -------------------------------------------//
function filtrarPorRadio(array){
     const nodeListRadio = document.querySelectorAll("input[type='radio']:checked") // NodeList
     // console.log(nodeListRadio);
     const arrayRadio = Array.from(nodeListRadio)
     // console.log(arrayRadio);
     const arrayValores = arrayRadio.map( input => input.value)
     // console.log(arrayValores);
     const objetosFiltradosRadio = array.filter( objeto => arrayValores.includes(objeto.modulo) )
     // console.log(objetosFiltradosRadio);
     return objetosFiltradosRadio
}
// ----------------------------------------------------------------//

// FILTRO DE SELECT -------------------------------------------//
function filtrarPorSelect(array, selectOption){
     const arrayFiltradosPorSelect = array.filter( objeto => objeto.nombre.includes(selectOption.value) )
     // console.log(arrayFiltradosPorSelect);
     return arrayFiltradosPorSelect
}
// ----------------------------------------------------------------//


// FILTRO DE CRUZADO -------------------------------------------//
function filtrosCruzados(array, selectOption){
     const arrayFiltradosPorRadio = filtrarPorRadio(array)
     const arrayFiltradosPorSelect = filtrarPorSelect(arrayFiltradosPorRadio, selectOption)
     return arrayFiltradosPorSelect
}
// ----------------------------------------------------------------//