const modal = () => {
  const modal = document.querySelector('.modal-overlay')
  const modalCallback = document.querySelector('.modal-callback')
  const headerTop = document.querySelector('.header')

  headerTop.addEventListener('click', (e) => {
    if(e.target.matches('.mob-menu-btn') || e.target.matches('.callback-btn')) {
      modal.style.display = 'block'
      modalCallback.style.display = 'block'
    }
  })

  modal.addEventListener('click', (e) => {
    if(e.target.matches('.modal-overlay') || e.target.closest('div>img')) {
      modal.style.display = 'none'
      modalCallback.style.display = 'none'
    }
  })
}

export default modal
