import { scroll } from './smoothScroll';

const helpButton = () => {
  let btn = document.querySelector('.up')

  const getScrollY = () => {
    if (window.pageYOffset > 700) {
      scroll()
      btn.style.display = 'block'
      btn.style.opacity = '1'
    } else { btn.style.opacity = '0' }
  }

  window.onscroll = getScrollY
}

export default helpButton
