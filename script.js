// 1 - Declarar as variáveis

const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('.tbody')
const sNome = document.querySelector('.#m-nome')
const sFuncao = document.querySelector('.#m-funcao')
const sSalario = document.querySelector('.#salario')
const btnSalvar = document.querySelector('.#btnSalvar')

let itens 
let id 

// Função que vai pegar os itens do banco

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStotage.setItem('dbfunc', JSON.stringify(itens))

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.forEach((item, index) => {
        insertItem(item, index)
    })
}

// Função que será execultada assim que a página for carregada

loadItens()