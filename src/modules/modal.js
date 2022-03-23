const modal = () => {
  const modal = document.querySelector('.modal-overlay')
  const modalCallback = document.querySelector('.modal-callback')
  const mainWrapper = document.querySelector('.main-wrapper')

  mainWrapper.addEventListener('click', (e) => {
    if(e.target.matches('.mob-menu-btn') || e.target.matches('.callback-btn') || e.target.matches('.button-services')) {
      modal.style.display = 'block'
      modalCallback.style.display = 'block'
    }
  })

  modal.addEventListener('click', (e) => {
    if(e.target.matches('.modal-overlay') || e.target.closest('.modal-close')) {
      modal.style.display = 'none'
      modalCallback.style.display = 'none'
    }
  }, true)
}

export default modal
