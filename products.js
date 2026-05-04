// Charger et afficher les produits depuis le fichier JSON en local
function loadProducts() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 0 || xhr.status === 200) {
            try {
                const products = JSON.parse(xhr.responseText);
                displayProducts(products);
            } catch (error) {
                console.error('Erreur lors du parsing du JSON:', error);
            }
        }
    };
    xhr.onerror = function() {
        console.error('Erreur lors du chargement du fichier products.json');
    };
    xhr.open('GET', 'products.json', true);
    xhr.send();
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
                <button class="product-btn">Ajouter au panier</button>
            </div>
        `;
        
        grid.appendChild(productCard);
    });
}

// Charger les produits au chargement de la page
document.addEventListener('DOMContentLoaded', loadProducts);
