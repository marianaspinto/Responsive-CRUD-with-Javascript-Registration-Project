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

function insertItem(item, index) {
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${item.nome}</td>
      <td>${item.funcao}</td>
      <td>R$ ${item.salario}</td>
      <td class="acao">
        <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
      </td>
      <td class="acao">
        <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
      </td>
    `
    tbody.appendChild(tr)
  }

  // Função de adicionar e deletar item

  function editItem(index) {

    openModal(true, index)
  }

  function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
  }

  function openModal(edit = false, index = 0) {
    modal.classList.add('active')
  
    modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  
    if (edit) {
      sNome.value = itens[index].nome
      sFuncao.value = itens[index].funcao
      sSalario.value = itens[index].salario
      id = index
    } else {
      sNome.value = ''
      sFuncao.value = ''
      sSalario.value = ''
    }
    
  }