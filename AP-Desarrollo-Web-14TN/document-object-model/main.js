// Document Object Model
// window
console.log([window]);
var apodo = "Fede"

// document
console.log([window.document]);

// Como recorrer un objeto complejo
let persona = {
     nombre: "Federico",
     apellido: "Rouyere",
     edad: 39,
     esMentor: true,
     mascotas: ["Barto", "Indiana", "Buda", "Odin"],
     hobbies: {
          deporte: "Fútbol",
          arte: "Fotografía",
          tecnología: "Video Juegos"
     },
     hermano:[
          {
               nombre: "Diego",
               apellido: "Rouyere",
               edad: 45
          },
          {
               nombre: "Soleda",
               apellido: "Rouyere",
               edad: 45
          }
     ]
}
console.log(persona.hermano[0].nombre);

// Accediendo al body - ChildreNodes - NodeList
console.log([window.document.body.childNodes]);

let listaDeNodos = window.document.body.childNodes

// Recorriendo nodeList
for(let nodo of listaDeNodos){
     console.log(nodo);
}

// Nodos usables
// Document: nodo de entrada al DOM
// Nodos de elementos
// Nodos de texto
// Nodos de comentrarios
// Nodos de atributo

// Modificar el innerText
let $h1 = document.body.childNodes[1]
console.log($h1);
$h1.innerText = "Workshop DOM"

// Propiedad innerHTML
console.log($h1.innerText);
console.log($h1.textContent);
console.log($h1.innerHTML);

$h1.innerHTML = `<span> Este es un workshop de DOM </span>`

// Agregar estilos
console.log([$h1]);

$h1.className = 'text-danger p-3'
console.log([$h1.classList]); // DOMTokenList -> métodos
$h1.classList.add( 'bg-warning' )

// Agregamos atributos
console.log($h1.attributes);
$h1.setAttribute("id", "Titulo")
console.log($h1);

// Métodos getElementBy - querySelector
const $titulo = document.getElementById('Titulo')
const $ul = document.querySelector('ul')
const $ul2 = document.querySelector('.listasDesordenadas')
const $ul3 = document.querySelector('#listaVacia')
console.log($ul); 
console.log($ul2); 
console.log($ul3); 
console.log($titulo); 

// Imprimir en hmtl
let template = ""
for(let mentor  of mentoresFrontend){
     template += `<li>${mentor.nombre}</li>`
}
$ul.innerHTML = template
