
class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.leftButton = this.carouselElement.querySelector('.left-button');
    this.rightButton = this.carouselElement.querySelector('.right-button');
    this.images = Array.from(this.carouselElement.querySelectorAll('img'));
    this.currentIndex = 0;
    this.images[this.currentIndex].style.display = 'block';

    this.rightButton.addEventListener('click', (event) => this.move(event));
    this.leftButton.addEventListener('click', (event) => this.move(event));
  }

  move(event) {
    let button = event.target;
    this.images.forEach(image => image.style.display = 'none');

    if (button === this.leftButton) {
      if (this.currentIndex === 0) {
        this.currentIndex = (this.images.length - 1)
      } else {
        this.currentIndex--;
      }
    } 

    if (button === this.rightButton) {
      if (this.currentIndex === (this.images.length - 1)) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
    }

    this.images[this.currentIndex].style.display = 'block';
  }
}

const carouselElement = document.querySelector('.carousel');
const carousel = new Carousel(carouselElement);





/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

