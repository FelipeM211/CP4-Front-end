// Dados dos produtos
const allProducts = [
    {
        id: 1,
        name: "Garrafa Reutilizável Premium",
        description: "Garrafa de aço inoxidável, mantém temperatura por 24h",
        price: "R$ 89,90",
        priceValue: 89.90,
        category: 'garrafas',
        rating: 4.8,
        reviews: 124,
        eco: true
    },
    {
        id: 2,
        name: "Sacola Ecológica de Algodão",
        description: "100% algodão orgânico, resistente e durável",
        price: "R$ 34,90",
        priceValue: 34.90,
        category: 'sacolas',
        rating: 4.9,
        reviews: 89,
        eco: true
    },
    {
        id: 3,
        name: "Kit Produtos de Limpeza Natural",
        description: "Produtos biodegradáveis sem químicos nocivos",
        price: "R$ 124,90",
        priceValue: 124.90,
        category: 'limpeza',
        rating: 4.7,
        reviews: 156,
        eco: true
    },
    {
        id: 4,
        name: "Cosméticos Orgânicos",
        description: "Linha completa de cuidados naturais para pele",
        price: "R$ 79,90",
        priceValue: 79.90,
        category: 'cosmeticos',
        rating: 4.6,
        reviews: 203,
        eco: true
    },
    {
        id: 5,
        name: "Utensílios Biodegradáveis",
        description: "Kit completo de utensílios compostáveis",
        price: "R$ 45,90",
        priceValue: 45.90,
        category: 'utensilios',
        rating: 4.5,
        reviews: 67,
        eco: true
    },
    {
        id: 6,
        name: "Roupa Sustentável",
        description: "Camiseta de algodão orgânico certificado",
        price: "R$ 69,90",
        priceValue: 69.90,
        category: 'roupas',
        rating: 4.8,
        reviews: 91,
        eco: true
    },
    {
        id: 7,
        name: "Copo de Bambu Reutilizável",
        description: "Copo ecológico feito de fibra de bambu natural",
        price: "R$ 29,90",
        priceValue: 29.90,
        category: 'garrafas',
        rating: 4.4,
        reviews: 78,
        eco: true
    },
    {
        id: 8,
        name: "Shampoo Sólido Natural",
        description: "Shampoo em barra livre de sulfatos e parabenos",
        price: "R$ 39,90",
        priceValue: 39.90,
        category: 'cosmeticos',
        rating: 4.7,
        reviews: 145,
        eco: true
    },
    {
        id: 9,
        name: "Sacola de Compras Dobrável",
        description: "Sacola resistente que dobra em tamanho compacto",
        price: "R$ 24,90",
        priceValue: 24.90,
        category: 'sacolas',
        rating: 4.3,
        reviews: 102,
        eco: true
    }
];

// Elementos do DOM
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const productsContainer = document.getElementById('products-container');
const resultsText = document.getElementById('results-text');

// Função para renderizar produtos
function renderProducts(products) {
    if (products.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-products">
                <svg viewBox="0 0 24 24" width="64" height="64">
                    <path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5t-1.313-3.188T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14Z"/>
                </svg>
                <h3>Nenhum produto encontrado</h3>
                <p>Tente ajustar seus filtros ou termo de busca</p>
            </div>
        `;
        return;
    }

    productsContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                <svg viewBox="0 0 24 24" width="64" height="64">
                    <path fill="currentColor" d="M17 8C8 10 5.9 16.8 3 21c2.2-4.8 6-6 10-6c0 0-4 0-8 2c5-3 8-3 12-3c0-3-3-6-6-6Z"/>
                </svg>
            </div>
            <div class="product-content">
                <div class="product-title-container">
                    <h3 class="product-title">${product.name}</h3>
                    ${product.eco ? '<span class="eco-badge">Eco</span>' : ''}
                </div>
                <p class="product-description">${product.description}</p>
                
                <div class="product-rating">
                    ${renderStars(product.rating)}
                    <span class="rating-text">${product.rating} (${product.reviews})</span>
                </div>
                
                <div class="product-price-container">
                    <span class="product-price">${product.price}</span>
                    <button class="buy-btn">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM6.15 6l2.4 5h7l2.75-5H6.15ZM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.738.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.988t-.05-1.962L6.6 11.6L3 4H1V2h3.25l.95 2Zm3.35 7h7h-7Z"/>
                        </svg>
                        Comprar
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    // Atualizar contador de resultados
    resultsText.textContent = `Mostrando ${products.length} de ${allProducts.length} produtos`;
}

// Função para renderizar estrelas de avaliação
function renderStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += `<svg class="star-icon star-filled" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"/></svg>`;
        } else {
            stars += `<svg class="star-icon star-empty" viewBox="0 0 24 24"><path fill="currentColor" d="M22 9.24l-7.19-.62L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28L12 15.4z"/></svg>`;
        }
    }
    return stars;
}

// Função para filtrar produtos
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const selectedPrice = priceFilter.value;
    
    const filteredProducts = allProducts.filter(product => {
        // Filtro por busca
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.description.toLowerCase().includes(searchTerm);
        
        // Filtro por categoria
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        
        // Filtro por preço
        let matchesPrice = true;
        if (selectedPrice !== 'all') {
            if (selectedPrice === '0-50') {
                matchesPrice = product.priceValue <= 50;
            } else if (selectedPrice === '50-100') {
                matchesPrice = product.priceValue > 50 && product.priceValue <= 100;
            } else if (selectedPrice === '100-200') {
                matchesPrice = product.priceValue > 100 && product.priceValue <= 200;
            } else if (selectedPrice === '200+') {
                matchesPrice = product.priceValue > 200;
            }
        }
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    renderProducts(filteredProducts);
}

// Inicializar a página
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todos os produtos inicialmente
    renderProducts(allProducts);
    
    // Adicionar event listeners para os filtros
    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
    priceFilter.addEventListener('change', filterProducts);
});


