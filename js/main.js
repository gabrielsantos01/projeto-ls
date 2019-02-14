const main = document.querySelector('#motos')
let manipulaJson

fetch('json/motos.json')
    .then(res => res.json())
    .then(json => {
        manipulaJson = json
        criaMenu(manipulaJson)
    })

function criaMenu(manipulaJson){
    main.innerHTML = ''
    const menu = manipulaJson.map(e => criarMotos(e)).join('')
    main.insertAdjacentHTML('beforeend', menu)
}

function criarMotos(moto){
    return `<div class="moto">
        <img src="../img/${moto.Foto}"? width=280>
        <p>${moto.Nome}</p>
    </div>`
}




