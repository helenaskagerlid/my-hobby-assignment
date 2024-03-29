import './style.css'

const rainbowEffect = document.querySelector('.rainbow-effect');
const gallery = document.querySelector(".gallery-container");

rainbowEffect.addEventListener('mouseenter', () => {
  rainbowEffect.style.animation = 'rainbow-animation 15s infinite';
});

rainbowEffect.addEventListener('mouseleave', () => {
  rainbowEffect.style.animation = 'none';
});

let isDragStart = false;

const dragStart = () => {
  isDragStart = true;
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  gallery.scrollLeft = e.pageX;
}

gallery.addEventListener("mousedown", dragStart);
gallery.addEventListener("mousemove", dragging);

const galleryContainer = document.querySelector("#galleryContainer");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");

arrowLeft.addEventListener("click", () => {
  galleryContainer.scrollBy({
    left: -200,
    behavior: "smooth" 
  });
});

arrowRight.addEventListener("click", () => {
  galleryContainer.scrollBy({
    left: 200, 
    behavior: "smooth" 
  });
});



console.log("hej");