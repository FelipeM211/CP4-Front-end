document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const resultsText = document.getElementById('results-text');
    const productCards = document.querySelectorAll('.produto-card');
    
    const totalProducts = productCards.length;
    
    function filterProducts() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedPrice = priceFilter.value;
        
        let visibleCount = 0;
        
        productCards.forEach(card => {
            const productName = card.querySelector('.card-title').textContent.toLowerCase();
            const productDescription = card.querySelector('.card-text').textContent.toLowerCase();
            const productCategory = card.getAttribute('data-category');
            const productPrice = parseFloat(card.getAttribute('data-price'));
            
            // Verificar busca
            const matchesSearch = searchTerm === '' || 
                                 productName.includes(searchTerm) || 
                                 productDescription.includes(searchTerm);
            
            // Verificar categoria
            const matchesCategory = selectedCategory === 'all' || 
                                   productCategory === selectedCategory;
            
            // Verificar preço
            let matchesPrice = true;
            if (selectedPrice !== 'all') {
                switch(selectedPrice) {
                    case '0-50':
                        matchesPrice = productPrice <= 50;
                        break;
                    case '50-100':
                        matchesPrice = productPrice > 50 && productPrice <= 100;
                        break;
                    case '100-200':
                        matchesPrice = productPrice > 100 && productPrice <= 200;
                        break;
                    case '200+':
                        matchesPrice = productPrice > 200;
                        break;
                }
            }
            
            // Mostrar ou ocultar com base nos filtros
            if (matchesSearch && matchesCategory && matchesPrice) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // Atualizar contador de resultados
        resultsText.textContent = `Mostrando ${visibleCount} de ${totalProducts} produtos`;
    }
    
    if (searchInput) searchInput.addEventListener('input', filterProducts);
    if (categoryFilter) categoryFilter.addEventListener('change', filterProducts);
    if (priceFilter) priceFilter.addEventListener('change', filterProducts);
});