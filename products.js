// Charger et afficher les produits depuis le fichier CSV
async function loadProducts() {
    try {
        const response = await fetch('products.csv');
        const data = await response.text();
        
        // Parser le CSV
        const lines = data.trim().split('\n');
        const headers = lines[0].split(',');
        
        const products = [];
        for (let i = 1; i < lines.length; i++) {
            const values = lines[i].split(',');
            products.push({
                image: values[0].trim(),
                title: values[1].trim(),
                description: values[2].trim(),
                price: values[3].trim()
            });
        }
        
        displayProducts(products);
    } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
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
                <button class="product-btn">Ajouter au panier</button>
            </div>
        `;
        
        grid.appendChild(productCard);
    });
}

// Charger les produits au chargement de la page
document.addEventListener('DOMContentLoaded', loadProducts);
