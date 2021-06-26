export default function Modal() {

  const modalWrapper = document.querySelector('.modal-wrapper')

  const cancelButton = document.querySelector('.button.cancel')

  cancelButton.addEventListener('click', close)

  function open() {
    // Funcionalidade de adicionar a classe active ao modal
    modalWrapper.classList.add("active")
  }

  function close() {
    // Funcionalidade de remover a classe active ao modal
    modalWrapper.classList.remove("active")
  }

  return {
    open,
    close
  }
}