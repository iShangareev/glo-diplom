const carousel = () => {

const carousel = document.querySelector(".b-carousel__wrap");
const card = carousel.querySelector(".b-carousel__item");
const leftButton = document.querySelector(".arrow-left");
const rightButton = document.querySelector(".arrow-right");


const cardWidth = card.offsetWidth + 15;
const carouselWidth = carousel.offsetWidth;

const cardCount = carousel.querySelectorAll(".services-carousel__item").length;

let offset = 0;

leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
    } else {
    offset = -carousel.scrollWidth + carouselWidth
    carousel.style.transform = `translateX(${offset}px)`;
  }
})

rightButton.addEventListener("click", function() {
  if (offset === -cardWidth * cardCount + carouselWidth || offset < -cardWidth * cardCount + carouselWidth) {
    offset = 0
    carousel.style.transform = `translateX(${offset}px)`;
  } else if (offset > -carousel.scrollWidth) {
    offset -= carouselWidth;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})

}

export default carousel
