const scroll = () => {
  const smoothLinks = document.querySelectorAll('.top-menu a')
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault()
          const id = smoothLink.getAttribute('href')
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
      })
  }
}

export { scroll }
