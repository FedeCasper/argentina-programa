// console.log(data);

//1 - Creando un Array Auxiliar para separar objetos

// let arrayAux = [];

// for(let personaje of data){
//      if(personaje.weight < 50){
//           arrayAux.push(personaje.name)
//      }
// };

// console.log(arrayAux);

// -------------------------------------------

//2 - Capturando elemntos del DOM e insertando HTML con bucle (Reflow)

// let contenedor = document.getElementById('contenedor');

// for(let personaje of data){
//      let div = document.createElement('div')
//      div.classList.add('border','border-danger')
//      div.innerHTML = `<h2>${personaje.name}</h2>`
//      contenedor.appendChild(div)
// }

// -------------------------------------------

//3 - Capturando elemntos del DOM e insertando HTML con bucle (Fragment)

// let contenedor = document.getElementById('contenedor');
// let fragment = document.createDocumentFragment()

// for(let personaje of data){
//      let div = document.createElement('div')
//      div.classList.add('border','border-danger')
//      div.innerHTML = `<img src='${personaje.front_default}'></img>`
//      fragment.appendChild(div)
// }

// contenedor.appendChild(fragment)

// -------------------------------------------

//4 - Capturando elemntos del DOM e insertando HTML con bucle (Template)

// let contenedor = document.getElementById('contenedor');
// let template = "";

// for(let personaje of data){
//      template += `<h2>${personaje.name}</h2>`
// }
// console.log(template);

// contenedor.innerHTML = template

// -------------------------------------------

//5 - Conversión de String a formato fecha

// let fecha = data[0].birthday;
// console.log(typeof(fecha)); 

// let nuevaFecha = new Date (fecha);
// console.log(nuevaFecha);