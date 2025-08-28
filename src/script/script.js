
// Configuração do carrossel via JS
const myCarouselElement = document.querySelector('#carouselExampleIndicators');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000, // troca de slide a cada 3 segundos
  ride: 'carousel'
});
