
class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.leftButton = this.carouselElement.querySelector('.left-button');
    this.rightButton = this.carouselElement.querySelector('.right-button');
    this.images = Array.from(this.carouselElement.querySelectorAll('img'));
    this.currentIndex = 0;
    this.images[this.currentIndex].style.display = 'block';

    this.rightButton.addEventListener('click', () => this.clickRight());
    this.leftButton.addEventListener('click', () => this.clickLeft());
  }

  clickRight() {
    this.images.forEach(image => image.style.display = 'none');

    if (this.currentIndex === (this.images.length - 1)) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }

    this.images[this.currentIndex].style.display = 'block';
  }

  clickLeft() {
    this.images.forEach(image => image.style.display = 'none');

    if (this.currentIndex === 0) {
      this.currentIndex = (this.images.length - 1)
    } else {
      this.currentIndex--;
    }

    this.images[this.currentIndex].style.display = 'block';
  }
}

const carouselElement = document.querySelector('.carousel');
const carousel = new Carousel(carouselElement);

console.log(carousel);




// const images = Array.from(imageElements);
// 
// let currentIndex = 0;
// 
// leftButton.addEventListener('click', function(event) {
//   images[currentIndex--].style.display = 'block';
// })
// 
// rightButton.addEventListener('click', function(event) {
//   images[currentIndex++].style.display = 'block';
// })
// 
// console.log(images);
// 





/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

