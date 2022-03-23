const slider = () => {
  const sliderBlock = document.querySelector('.top-slider')
  const slides = document.querySelectorAll('.item')
  const ul = document.querySelector('.slick-dots')

  const getDots = () => {
    for(let i = 0; i < slides.length; i++ ) {
      const dot = document.createElement('li')
      if(i < 1) {
        dot.classList.add('slick-active')
      }
      dot.classList.add('slick-dot')
      ul.append(dot)
    }
  }

  getDots()


  const timeInterval = 3000
  let currentSlide = 0
  let interval
  const dot = document.querySelectorAll('.slick-dot')

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass)
  }

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass)
  }

  const autoSlide = () => {
    prevSlide(slides, currentSlide, 'item-active')
    prevSlide(dot, currentSlide, 'slick-active')
    currentSlide++

    if(currentSlide >= slides.length) {
      currentSlide = 0
    }

    nextSlide(slides, currentSlide, 'item-active')
    nextSlide(dot, currentSlide, 'slick-active')
  }

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
  }

  startSlide(timeInterval)
}

export default slider
