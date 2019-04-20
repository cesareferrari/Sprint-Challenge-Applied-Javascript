
class Carousel {

}

const carousel = document.querySelector('.carousel');
const leftButton = carousel.querySelector('.left-button');
const rightButton = carousel.querySelector('.right-button');
const imageElements = carousel.querySelectorAll('img');
const images = Array.from(imageElements);

let currentIndex = 0;

leftButton.addEventListener('click', function(event) {
  images[currentIndex--].style.display = 'block';
})

rightButton.addEventListener('click', function(event) {
  images[currentIndex++].style.display = 'block';
})

console.log(images);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

