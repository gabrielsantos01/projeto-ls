const main = document.querySelector('#motos')
let manipulaJson
let seis = 6
let nove = 9

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

window.addEventListener('scroll', () => {
    if((window.scrollY + window.innerHeight) / document.body.scrollHeight >= 0.99){
        seis += nove
        criaMenu(manipulaJson)
    }
})




