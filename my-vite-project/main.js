import './style.css'

const rainbowEffect = document.querySelector('.rainbow-effect');

rainbowEffect.addEventListener('mouseenter', () => {
  rainbowEffect.style.animation = 'rainbow-animation 10s infinite';
});

rainbowEffect.addEventListener('mouseleave', () => {
  rainbowEffect.style.animation = 'none';
});
