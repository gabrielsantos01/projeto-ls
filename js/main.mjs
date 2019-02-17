import {filtrando, criaMenu} from './lib.mjs'
let manipulaJson
filtrando()

fetch('json/motos.json')
    .then(res => res.json())
    .then(json => {
        manipulaJson = json
        criaMenu(manipulaJson)
    })

export {
    manipulaJson
}
