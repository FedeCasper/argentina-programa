console.table(data);

//Ejemplo 1 añadir escuchador de evento al contenedor 2
const contenedor2 = document.getElementById('contenedor2')
contenedor2.addEventListener('click' , imprimirPorConsola)
function imprimirPorConsola (e) {
     console.log(e.target)
}

//Ejemplo 2 crear checboxes dinámicamente y añadirles escuchador de evento
const contenedor = document.getElementById('contenedor')

// 1 - Creando el array de tipos de pokemones sin repetir
let tiposDePokemones = []
let arrayTiposDePokemones = data.map( pokemon => {
     if (!tiposDePokemones.includes(pokemon.type)){
          tiposDePokemones.push(pokemon.type)
     }
})

console.log(tiposDePokemones);

// 2 - Imprimiendo los checboxes en el HTML con bucles
let fragment = document.createDocumentFragment()
for(let tipo of tiposDePokemones){
     let div = document.createElement('div')
     div.innerHTML = `
     <label> ${tipo}
          <input type="checkbox" name="" id="${tipo}">
     </label>
     `
     fragment.appendChild(div)
}
contenedor.appendChild(fragment)


// 3 - Agragando escuchador de eventos a los checkboxes
let checkboxes = document.querySelectorAll('input[type=checkbox]')
console.log(checkboxes);
checkboxes.forEach( checkbox  => { 
     checkbox.addEventListener('change', verificarSeleccion) 
     })
function verificarSeleccion(){
     let inputsChequeados = Array.from(checkboxes).filter(checkbox => checkbox.checked)
     console.log(inputsChequeados);
}