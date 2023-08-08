console.log([document])

function mostrarCards(array, idContainer) {
    const container = document.getElementById(idContainer)
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

mostrarCards(data.personajes, 'cards-container')
