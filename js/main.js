const main = document.querySelector('#motos')
const input = document.querySelector('.input')
let manipulaJson
let nove = 9
let maisNove = 9

window.addEventListener('scroll', () => {
    if((window.scrollY + window.innerHeight) / document.body.scrollHeight >= 0.99){
        nove += maisNove
        criaMenu(manipulaJson)
    }
})

fetch('json/motos.json')
    .then(res => res.json())
    .then(json => {
        manipulaJson = json
        criaMenu(manipulaJson)
    })

function criaMenu(manipulaJson){
    main.innerHTML = ''
    const menu = manipulaJson.slice(0, seis).map(e => criarMotos(e)).join('')
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
        return e.Nome == nomeMotos
    })
    criaMenu(filtro)
}






