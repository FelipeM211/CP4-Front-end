// Gerenciamento do carrinho de compras
document.addEventListener('DOMContentLoaded', function() {
    const carrinhoVazio = document.getElementById('carrinho-vazio');
    const itensCarrinho = document.getElementById('itens-carrinho');
    const subtotalElement = document.getElementById('subtotal');
    const freteElement = document.getElementById('frete');
    const totalElement = document.getElementById('total');
    const btnFinalizar = document.getElementById('btn-finalizar');
    
    // Carregar itens do carrinho do localStorage
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Inicializar a página
    atualizarCarrinho();
    
    function atualizarCarrinho() {
        // Limpar itens existentes
        itensCarrinho.innerHTML = '';
        
        if (carrinho.length === 0) {
            carrinhoVazio.classList.remove('d-none');
            itensCarrinho.classList.add('d-none');
            btnFinalizar.disabled = true;
            atualizarResumo(0);
            return;
        }
        
        carrinhoVazio.classList.add('d-none');
        itensCarrinho.classList.remove('d-none');
        btnFinalizar.disabled = false;
        
        // Calcular total
        let subtotal = 0;
        
        // Adicionar itens ao carrinho
        carrinho.forEach((item, index) => {
            const itemTotal = item.preco * item.quantidade;
            subtotal += itemTotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'item-carrinho';
            itemElement.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-3 col-md-2">
                        <img src="${item.imagem}" alt="${item.nome}" class="img-fluid imagem-produto-carrinho">
                    </div>
                    <div class="col-5 col-md-6">
                        <h5 class="mb-1">${item.nome}</h5>
                        <p class="text-muted mb-0">${item.descricao}</p>
                        <p class="mb-0 preco-item">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div class="col-4 col-md-4">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="quantidade-controle me-3">
                                <button class="quantidade-btn diminuir" data-index="${index}">-</button>
                                <input type="number" class="quantidade-input" value="${item.quantidade}" min="1" data-index="${index}">
                                <button class="quantidade-btn aumentar" data-index="${index}">+</button>
                            </div>
                            <button class="remover-item" data-index="${index}">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                        <div class="text-end mt-2">
                            <strong>R$ ${itemTotal.toFixed(2).replace('.', ',')}</strong>
                        </div>
                    </div>
                </div>
            `;
            
            itensCarrinho.appendChild(itemElement);
        });
        
        // Atualizar resumo
        atualizarResumo(subtotal);
        
        // Adicionar event listeners aos botões
        adicionarEventListeners();
    }
    
    function atualizarResumo(subtotal) {
        // Calcular frete (grátis para compras acima de R$ 199)
        const frete = subtotal >= 199 ? 0 : 15;
        const total = subtotal + frete;
        
        subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        freteElement.textContent = frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2).replace('.', ',')}`;
        totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
    
    function adicionarEventListeners() {
        // Botões de aumentar quantidade
        document.querySelectorAll('.aumentar').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                carrinho[index].quantidade++;
                salvarCarrinho();
                atualizarCarrinho();
            });
        });
        
        // Botões de diminuir quantidade
        document.querySelectorAll('.diminuir').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (carrinho[index].quantidade > 1) {
                    carrinho[index].quantidade--;
                    salvarCarrinho();
                    atualizarCarrinho();
                }
            });
        });
        
        // Inputs de quantidade
        document.querySelectorAll('.quantidade-input').forEach(input => {
            input.addEventListener('change', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const novaQuantidade = parseInt(this.value);
                
                if (novaQuantidade > 0) {
                    carrinho[index].quantidade = novaQuantidade;
                    salvarCarrinho();
                    atualizarCarrinho();
                } else {
                    this.value = carrinho[index].quantidade;
                }
            });
        });
        
        // Botões de remover item
        document.querySelectorAll('.remover-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                carrinho.splice(index, 1);
                salvarCarrinho();
                atualizarCarrinho();
            });
        });
    }
    
    function salvarCarrinho() {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    
    // Event listener para o botão finalizar compra
    btnFinalizar.addEventListener('click', function() {
        alert('Compra finalizada com sucesso! Obrigado por escolher a EcoSustenta.');
        localStorage.removeItem('carrinho');
        carrinho = [];
        atualizarCarrinho();
    });
});
// carrinho.js - Gerenciamento do carrinho de compras
document.addEventListener('DOMContentLoaded', function() {
    const carrinhoVazio = document.getElementById('carrinho-vazio');
    const itensCarrinho = document.getElementById('itens-carrinho');
    const subtotalElement = document.getElementById('subtotal');
    const freteElement = document.getElementById('frete');
    const totalElement = document.getElementById('total');
    const btnFinalizar = document.getElementById('btn-finalizar');
    
    // Carregar itens do carrinho do localStorage
    let carrinho = JSON.parse(lStorage.getItem('carrinho')) || [];
    
    // Inicializar a página
    atualizarCarrinho();
    
    function atualizarCarrinho() {
        // Limpar itens existentes
        itensCarrinho.innerHTML = '';
        
        if (carrinho.length === 0) {
            carrinhoVazio.classList.remove('d-none');
            itensCarrinho.classList.add('d-none');
            btnFinalizar.disabled = true;
            atualizarResumo(0);
            return;
        }
        
        carrinhoVazio.classList.add('d-none');
        itensCarrinho.classList.remove('d-none');
        btnFinalizar.disabled = false;
        
        // Calcular total
        let subtotal = 0;
        
        // Adicionar itens ao carrinho
        carrinho.forEach((item, index) => {
            const itemTotal = item.preco * item.quantidade;
            subtotal += itemTotal;
            
            const itemElement = document.createElement('div');
            itemElement.className = 'item-carrinho';
            itemElement.innerHTML = `
                <div class="row align-items-center">
                    <div class="col-3 col-md-2">
                        <img src="${item.imagem}" alt="${item.nome}" class="img-fluid imagem-produto-carrinho">
                    </div>
                    <div class="col-5 col-md-6">
                        <h5 class="mb-1">${item.nome}</h5>
                        <p class="text-muted mb-0">${item.descricao}</p>
                        <p class="mb-0 preco-item">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <div class="col-4 col-md-4">
                        <div class="d-flex align-items-center justify-content-end">
                            <div class="quantidade-controle me-3">
                                <button class="quantidade-btn diminuir" data-index="${index}">-</button>
                                <input type="number" class="quantidade-input" value="${item.quantidade}" min="1" data-index="${index}">
                                <button class="quantidade-btn aumentar" data-index="${index}">+</button>
                            </div>
                            <button class="remover-item" data-index="${index}">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                        <div class="text-end mt-2">
                            <strong>R$ ${itemTotal.toFixed(2).replace('.', ',')}</strong>
                        </div>
                    </div>
                </div>
            `;
            
            itensCarrinho.appendChild(itemElement);
        });
        
        // Atualizar resumo
        atualizarResumo(subtotal);
        
        // Adicionar event listeners aos botões
        adicionarEventListeners();
    }
    
    function atualizarResumo(subtotal) {
        // Calcular frete (grátis para compras acima de R$ 199)
        const frete = subtotal >= 199 ? 0 : 15;
        const total = subtotal + frete;
        
        subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
        freteElement.textContent = frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2).replace('.', ',')}`;
        totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
    
    function adicionarEventListeners() {
        // Botões de aumentar quantidade
        document.querySelectorAll('.aumentar').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                carrinho[index].quantidade++;
                salvarCarrinho();
                atualizarCarrinho();
            });
        });
        
        // Botões de diminuir quantidade
        document.querySelectorAll('.diminuir').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (carrinho[index].quantidade > 1) {
                    carrinho[index].quantidade--;
                    salvarCarrinho();
                    atualizarCarrinho();
                }
            });
        });
        
        // Inputs de quantidade
        document.querySelectorAll('.quantidade-input').forEach(input => {
            input.addEventListener('change', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const novaQuantidade = parseInt(this.value);
                
                if (novaQuantidade > 0) {
                    carrinho[index].quantidade = novaQuantidade;
                    salvarCarrinho();
                    atualizarCarrinho();
                } else {
                    this.value = carrinho[index].quantidade;
                }
            });
        });
        
        // Botões de remover item
        document.querySelectorAll('.remover-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                carrinho.splice(index, 1);
                salvarCarrinho();
                atualizarCarrinho();
            });
        });
    }
    
    function salvarCarrinho() {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    }
    
    // Event listener para o botão finalizar compra
    btnFinalizar.addEventListener('click', function() {
        alert('Compra finalizada com sucesso! Obrigado por escolher a EcoSustenta.');
        localStorage.removeItem('carrinho');
        carrinho = [];
        atualizarCarrinho();
    });
});

// Função para adicionar produtos ao carrinho (usada em outras páginas)
function adicionarAoCarrinho(id) {
    // Dados dos produtos (apenas os 6 produtos que temos)
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
        }
    ];

    const produto = allProducts.find(p => p.id === id);
    if (!produto) return;
    
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Verificar se o produto já está no carrinho
    const itemExistente = carrinho.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.name,
            descricao: produto.description,
            preco: produto.priceValue,
            imagem: `../../src/img/${produto.category}.png`,
            quantidade: 1
        });
    }
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    
    // Feedback visual
    alert(`${produto.name} adicionado ao carrinho!`);
}