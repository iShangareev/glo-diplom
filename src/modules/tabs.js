const tabs = () => {
  const tabPanel = document.querySelector('.accordeon')
  const tabs = document.querySelectorAll('.accordeon__element')

  tabPanel.addEventListener('click', (e) => {
    if(e.target.closest('.accordeon__element')) {
      tabs.forEach((tab) => {
        const tabBtn = e.target.closest('.accordeon__element')
        console.log(tab)
        if(tab === tabBtn) {
          tab.classList.add('active')
        } else {
          tab.classList.remove('active')
        }
      })
    }
  })

}

export default tabs
