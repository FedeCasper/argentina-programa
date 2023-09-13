// console.log(window);
// console.log(location.search);
const locationSearch = location.search
// console.log(locationSearch);

const objetoURL = new URLSearchParams(locationSearch)
// console.log(objetoURL);

const valorDeKeyParam = objetoURL.get('nombre')
// console.log(valorDeKeyParam);

let mentor = arrayObjetos.find( objeto => objeto.nombre === valorDeKeyParam)
// console.log(mentor);

const $contenedorDetails = document.getElementById('contenedorDetails')
console.log($contenedorDetails);

function crearEstructuraCard(objeto){
     let template = ""
     return template = `
     <div class="card mb-3" style="width: 75%;">
          <img src="${objeto.imagen}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${objeto.nombre}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
          </div>
     </div>
     `
}

function imprimirCard(elementoHTML, objeto){
     elementoHTML.innerHTML = crearEstructuraCard(objeto)
}

imprimirCard($contenedorDetails, mentor)



