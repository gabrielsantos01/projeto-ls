import {manipulaJson} from './main.mjs'

// declaração de variáveis
const main = document.querySelector('#motos')
let input = document.querySelector('.input')

// Limpando o main e percorrendo o json para inserção do conteúdo do main
function criaMenu(manipulaJson){
    main.innerHTML = ''
    const menu = manipulaJson.map(e => criarMotos(e)).join('')
    main.insertAdjacentHTML('beforeend', menu)
    
}

// criação do conteúdo para ser adicionado no main
function criarMotos(moto){
    return `<div class="moto" onclick="informacao()">
        <img class="motoEdite" src="img/${moto.Foto}"? width=280>
        <p>${moto.Nome}</p>
    </div>`
}

// validação do elemento através do regex 
function filtrando(){
    input.addEventListener('keyup', (event) => {
        const regex = /^[A-Za-z]+\s?$|^[A-Za-z]+\s[A-Za-z]+$|^[A-Za-z]+\s(\d)+$|^[A-Za-z]+\s(\d)+\s?[A-Za-z]+/g
        if(event.key == "Enter"){
            if(regex.test(input.value)){
                // chamada da função para a filtragem do elemento
                filtraMotos(input.value.toLowerCase())
            }else{
                main.innerHTML = `<h2>Nome escrito incorretamente, tente novamente!</h2>`
            }
        }
        if(input.value == ""){
            filtraMotos(input.value)
        }
    })
}

// filtrando elementos
function filtraMotos(nomeMotos){
    const filtro = manipulaJson.filter(e => {
        return nomeMotos == e.Nome.slice(0, nomeMotos.length).toLowerCase()
    })
    criaMenu(filtro)
}

// evento de clique sobre as motos
window.informacao = function(){
    alert('Função desabilitada no momento')
}


export {
    criaMenu,
    filtrando
}


