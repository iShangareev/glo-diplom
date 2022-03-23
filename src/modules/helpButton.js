import { scroll } from './smoothScroll';

const helpButton = () => {
  let btn = document.querySelector('.up')

  const getScrollY = () => {
    if (window.pageYOffset > 700) {
      scroll()
      btn.style.opacity = '1'
    } else { btn.style.opacity = '0' }
  }
  console.log(window.pageYOffset)
  window.onscroll = getScrollY
}

export default helpButton
