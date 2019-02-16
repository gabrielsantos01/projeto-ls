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
        <img class="motoEdite" src="img/${moto.Foto}"? width=280>
        <p>${moto.Nome}</p>
    </div>`
}

input.addEventListener('keyup', (event) => {
    const regex = /^[A-Za-z]+$|^[A-Za-z]+\s[A-Za-z]+$|^[A-Za-z]+\s(\d)+$|^[A-Za-z]+\s(\d)+\s?[A-Za-z]+/g
    if(event.key == "Enter"){
        if(regex.test(input.value)){
            filtraMotos(input.value.toLowerCase())
        }else{
            main.innerHTML = `<h2>Nome escrito incorretamente, tente novamente!</h2>`
        }
    }
    if(input.value == ""){
        filtraMotos(input.value)
    }
})

function filtraMotos(nomeMotos){
    const filtro = manipulaJson.filter(e => {
        return nomeMotos == e.Nome.slice(0, nomeMotos.length).toLowerCase()
    })
    criaMenu(filtro)
}



