// const queryString = location.search
// console.log(queryString)
// const params = new URLSearchParams(queryString)
// console.log(params)
// const id = params.get("id")
// console.log(id)

const id = new URLSearchParams(location.search).get("id")

const personaje = data.personajes.find(elemento => elemento.id == id)
console.log(personaje)

function mostrarTarjeta(idContainer){
    const container = document.getElementById(idContainer)
    let boxCard = document.createElement('div');
        boxCard.className = 'box-card d-flex justify-content-between gap-3';
        boxCard.style.flex = 'flex-column';    
        boxCard.innerHTML = `<img src="${personaje.imagen}">
            <div class="card-details d-flex flex-column gap-3 px-4 py-5">
                <h5 class="text-uppercase fw-bold">${personaje.personaje}</h5>
                <ul class="list-unstyled d-flex flex-column gap-2">
                    <li class="fs-6"><span class="fw-semibold">Actor/Actriz: </span>${personaje.interpretado_por}</li>
                    <li class="fs-6"><span class="fw-semibold">Apodo: </span>${personaje.apodo}</li>
                    <li class="fs-6"><span class="fw-semibold">Estudió en Howgwarts: </span>${personaje.estudianteDeHogwarts ? "Si" : "No"}</li>
                    <li class="fs-6"><span class="fw-semibold">Casa: </span>${personaje.casaDeHogwarts}</li>
                    <li class="fs-6"><span class="fw-semibold">Hijos: </span>${personaje.hijos.length > 0 ? personaje.hijos.join(" - ") : "No tiene"}</li>
                </ul>
                <a href="./index.html" class="btn btn-details align-self-end">Volver</a>
            </div>`
    container.appendChild(boxCard)
}

mostrarTarjeta("detail-container")
