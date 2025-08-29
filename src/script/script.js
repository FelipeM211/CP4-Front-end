
// Configuração do carrossel via JS
const myCarouselElement = document.querySelector('#carouselExampleIndicators');
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000, // troca de slide a cada 3 segundos
  ride: 'carousel'
});


        // Função para trocar a imagem principal na galeria
        function changeImage(element, newSrc) {
            document.getElementById('main-image').src = newSrc;
            
            // Remove a classe 'active' de todas as miniaturas
            const thumbnails = document.querySelectorAll('.gallery-thumbnail');
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Adiciona a classe 'active' à miniatura clicada
            element.classList.add('active');
        }
        
        // Configuração das estrelas de avaliação no modal
        document.querySelectorAll('.rating-input i').forEach(star => {
            star.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                const stars = document.querySelectorAll('.rating-input i');
                
                stars.forEach((s, index) => {
                    if (index < value) {
                        s.classList.remove('bi-star');
                        s.classList.add('bi-star-fill', 'text-warning');
                    } else {
                        s.classList.remove('bi-star-fill', 'text-warning');
                        s.classList.add('bi-star');
                    }
                });
            });
        });

