const scroll = () => {
  const smoothLinks = document.querySelectorAll('a[href^="#"]')
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault()
          const id = smoothLink.getAttribute('href')
          console.log(id)
          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          })
      })
  }
}

export { scroll }
