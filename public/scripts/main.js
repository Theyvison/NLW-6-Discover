import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// pegar todos os botões que tem com a classe check

const checkButtons = document.querySelectorAll(".actions a.check")
// quando clicar em marcar como lida abrir o modal
checkButtons.forEach(button => {
  // adicionar o eventListener (escuta)
  button.addEventListener('click', handleClick)
})

// pegar todos os botões que tem com a classe delete
// quando clicar em excluir abrir o modal
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
  button.addEventListener('click', (event) => handleClick(event, false))
})

function handleClick(event, check = true) {

  event.preventDefault()

  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id
  
  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  // abrir modal
  modal.open()
}


