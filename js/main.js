const main = document.querySelector('#motos')
const input = document.querySelector('.input')
let manipulaJson
let nove = 9
let maisNove = 9

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
        <img src="img/${moto.Foto}"? width=280>
        <p>${moto.Nome}</p>
    </div>`
}

input.addEventListener('keyup', () => {
    filtraMotos(input.value) 
})

function filtraMotos(nomeMotos){
    const filtro = manipulaJson.filter(e => {
        return nomeMotos == e.Nome.slice(0, nomeMotos.length)
    })
    criaMenu(filtro)
}




