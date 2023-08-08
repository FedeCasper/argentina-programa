function createChecks(array, idContainer) {
    let checksContainer = document.getElementById(idContainer)
    const fragment = document.createDocumentFragment()
    let checkHouses = [...(new Set(array.map(personaje => personaje.casaDeHogwarts)))]
    checkHouses.unshift("Hufflepuff")
    checkHouses.forEach(house => {
        let label = document.createElement('label')
        label.className = "form-check-label px-1"
        label.innerHTML = `<input class="form-check-input" type="checkbox" value="${house}" >
                        ${house.toLowerCase()}`
        checksContainer.appendChild(label)
    })
    checksContainer.appendChild(fragment)
}
createChecks(data.personajes, 'checks-container')


function showCards(array, idContainer) {
    const container = document.getElementById(idContainer)
    container.innerHTML = ''
    const fragment = document.createDocumentFragment()
    for (let elemento of array) {
        let div = document.createElement('div')
        div.className = 'card card-small'
        div.style.width = '20rem'
        div.innerHTML = `<img src="${elemento.imagen}" class="card-img-top card-img-small" alt="personaje">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${elemento.personaje}</h5>
                <p class="card-text">${elemento.interpretado_por}</p>
                <a href="./details.html?id=${elemento.id}" class="btn btn-details align-self-end">Detalles</a>
            </div>`
        fragment.appendChild(div)
    }
    container.appendChild(fragment)
}
showCards(data.personajes, 'cards-container')


/*
////-------------- FILTROS SOLOS (ANDAN SEPARADOS; NO CRUZADOS)

//// CHECKBOX FILTER

let checkboxes = document.querySelectorAll('input[type="checkbox"]')
checkboxes.forEach(check => check.addEventListener("change", () => {
    let selectChecked = [...checkboxes].filter(check => check.checked).map(elem => elem.value)
    console.log(filterArrayByArray(selectChecked, data.personajes))
}))

function filterArrayByArray(arrayStrings, arrayObject) {
    // --- condicional forma 1
    // if (arrayStrings.length === 0) {
    //     return arrayObject
    // } else {
    //     let newArray = arrayObject.filter(elemento => arrayStrings.includes(elemento.casaDeHogwarts))
    //     return newArray
    // }

    // --- condicional forma 2
    // if (arrayStrings.length === 0) {
    //     return arrayObject
    // }
    // let newArray = arrayObject.filter(elemento => arrayStrings.includes(elemento.casaDeHogwarts))
    // return newArray

    // --- condicional forma 3
    // if (arrayStrings.length === 0) return arrayObject
    // return arrayObject.filter(elemento => arrayStrings.includes(elemento.casaDeHogwarts))

    // --- condicional forma 4
    return arrayStrings.length === 0 ? arrayObject : arrayObject.filter(elemento => arrayStrings.includes(elemento.casaDeHogwarts))
}

//// SEARCH FILTER
let inputForm = document.getElementById('input-form')
inputForm.addEventListener('keyup', (e) => {
    console.log(filterArrayByString(inputForm.value, data.personajes))
})

function filterArrayByString(value, arrayObject){
    if (value == '') return arrayObject
    let newArray = arrayObject.filter(elemento => elemento.personaje.toLowerCase().includes(value.toLowerCase().trim()))
    return newArray
}
*/



////-------------- FITLROS CRUZADOS

let selectChecked = []
let inputText = ''

function filterArrayByArray(arrayStrings, arrayObject) {
    return arrayStrings.length === 0 ? arrayObject : arrayObject.filter(elemento => arrayStrings.includes(elemento.casaDeHogwarts))
}

function filterArrayByString(value, arrayObject) {
    if (value == '') return arrayObject
    return arrayObject.filter(object => object.personaje.toLowerCase().includes(value.toLowerCase().trim()))
}

let checkboxes = document.querySelectorAll('input[type="checkbox"]')
checkboxes.forEach(check => check.addEventListener("change", () => {
    selectChecked = [...checkboxes].filter(check => check.checked).map(elem => elem.value)
    filterAll(data.personajes)
}))

let inputForm = document.getElementById('input-form')
inputForm.addEventListener('keyup', (e) => {
    inputText = inputForm.value
    filterAll(data.personajes)
})

///// FINAL FILTER
function filterAll(array) {
    //// --- opcion de 1 if y else if
    // let newArray = []
    // if (selectChecked.length == 0 && inputText == '') {
    //     newArray = array
    // } else if (selectChecked.length > 0 && inputText =='') {
    //     let cardsChecksFiltered = filterArrayByArray(selectChecked, array)
    //     newArray = cardsChecksFiltered
    // } else if (selectChecked.length == 0 && inputText !='') {
    //     let cardsInputFiltered = filterArrayByString(inputText, array)
    //     newArray = cardsInputFiltered
    // } else {
    //     let cardsChecksFiltered = filterArrayByArray(selectChecked, array)
    //     let checkFinalFiltered = filterArrayByString(inputText, cardsChecksFiltered)
    //     newArray = cardsFinalFiltered
    // }
    // console.log(newArray)


    //// --- opcion de 1 línea
    // let cardsChecksFiltered = filterArrayByString(inputText, filterArrayByArray(selectChecked, array))
    // console.log(cardsFinalFiltered)


    //// --- opcion por separado para mejor lectura
    let cardsChecksFiltered = filterArrayByArray(selectChecked, array)
    let cardsFinalFiltered = filterArrayByString(inputText, cardsChecksFiltered)
    console.log(cardsFinalFiltered)    
}

//// FALTA MOSTRAR LAS CARDS FILTRADAS Y MEJORAR LOS PARÁMETROS/ARGUMENTOS DE LAS FUNCIONES