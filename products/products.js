// Charger et afficher les produits depuis la constante DATA
function loadProducts() {
    if (typeof DATA !== 'undefined') {
        displayProducts(DATA);
    } else {
        console.error('La constante DATA n\'est pas disponible');
    }
}

// Afficher les produits dans la grille
function displayProducts(products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <h2 class="product-title">${product.title}</h2>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-price">${product.price}€</span>
                <button class="product-btn">Acheter</button>
            </div>
        `;
        
        grid.appendChild(productCard);
    });
}

// Charger les produits au chargement de la page
document.addEventListener('DOMContentLoaded', loadProducts);
