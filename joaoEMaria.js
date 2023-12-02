let joao =1
let maria =2

function deJoaoParaMaria(){
    maria = maria +joao
    joao = 0
}

function deMariaParaJoao(){
    joao = joao +maria
    maria =0
}
function getMaria(){
    return maria
}
function getJoao(){
    return joao
}
function setMaria(novoValor){
    if (novoValor>0)
        maria = novoValor
    else
        maria=0
}
function setJoao(novoValor){
    if (novoValor>0)
        joao = novoValor
    else
        maria=0
}

export { getMaria, getJoao, setMaria, setJoao ,deMariaParaJoao,deJoaoParaMaria} 