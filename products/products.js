function get2DContext(id){
    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    return context;
}

function canvasApp(){
    console.log("in")
    let context = get2DContext("temp-canvas");
    let canvas = document.getElementById("temp-canvas");
    
    // Calculer le centre du canvas
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    
    //rond
    context.beginPath();
    context.arc(centerX, centerY, 75, 0, 2 * Math.PI);
    context.fillStyle = "yellow";
    context.fill();
    context.strokeStyle = "black";
    context.lineWidth = 3;
    context.stroke();
    //yeux
    context.beginPath();
    context.arc(centerX - 35, centerY - 30, 10, 0, 2 * Math.PI);
    context.arc(centerX + 35, centerY - 30, 10, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();
    //bouche
    context.beginPath();
    context.arc(centerX, centerY + 20, 35, 0, Math.PI);
    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.stroke();
    //texte
    context.font = "20px sans-serif";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("Vous avez acheté ce produit avec succès !", centerX, centerY + 100);
}

// Charger et afficher les produits depuis la constante DATA
function loadProducts() {
    if (typeof DATA !== 'undefined') {
        displayProducts(DATA);
        setupFilterListeners();
    } else {
        console.error('La constante DATA n\'est pas disponible');
    }
}

// Afficher les produits dans la grille
function displayProducts(products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';
    
    if (products.length === 0) {
        grid.innerHTML = '<p class="no-products">Aucun produit ne correspond à vos critères de filtrage.</p>';
        return;
    }
    
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
        
        //event listener sur les boutons et images
        const image = productCard.querySelector('.product-image');
        image.addEventListener('click', function() {
            showImage(this.src, this.alt);
        });
        const button = productCard.querySelector('.product-btn');
        button.addEventListener('click', showCanvasModal);
    });
}

// Filtrer les produits en fonction des critères
function filterProducts() {
    const nameFilter = document.getElementById('filter-name').value.toLowerCase();
    const minPrice = parseFloat(document.getElementById('filter-price-min').value) || 0;
    const maxPrice = parseFloat(document.getElementById('filter-price-max').value) || Infinity;
    
    const filteredProducts = DATA.filter(product => {
        // Filtrer par nom
        const matchesName = product.title.toLowerCase().includes(nameFilter);
        
        // Filtrer par prix
        const price = parseFloat(product.price);
        const matchesPrice = price >= minPrice && price <= maxPrice;
        
        // Le produit doit respecter les deux critères
        return matchesName && matchesPrice;
    });
    
    displayProducts(filteredProducts);
}

// Configurer les event listeners pour le formulaire de filtrage
function setupFilterListeners() {
    const filterForm = document.getElementById('filter-form');
    const resetButton = document.getElementById('reset-filters');
    
    // Event listener sur la soumission du formulaire
    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        filterProducts();
    });
    
    // Event listener sur le bouton Réinitialiser
    resetButton.addEventListener('click', function() {
        document.getElementById('filter-name').value = '';
        document.getElementById('filter-price-min').value = '';
        document.getElementById('filter-price-max').value = '';
        displayProducts(DATA);
    });
    
    // Event listener pour le filtrage en temps réel (optionnel)
    document.getElementById('filter-name').addEventListener('input', filterProducts);
    document.getElementById('filter-price-min').addEventListener('input', filterProducts);
    document.getElementById('filter-price-max').addEventListener('input', filterProducts);
}

// afficher le canvas pendant 3 secondes
function showCanvasModal() {
    let winWidth = window.innerWidth;

    const modal = document.createElement('div');
    modal.className = 'canvas-modal';
    
    const canvas = document.createElement('canvas');
    canvas.id = 'temp-canvas';
    canvas.width = 0.8*winWidth;
    canvas.height = 220;
    
    modal.appendChild(canvas);
    document.body.appendChild(modal);
    
    // Dessiner le smiley sur le canvas
    canvasApp();
    
    setTimeout(() => {
        modal.remove();
    }, 3000);
}

function showImage(imageSrc, imageAlt){
    const modal = document.createElement('div');
    modal.className = 'image-modal';

    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = imageAlt;
    
    modal.appendChild(image);
    document.body.appendChild(modal);
    
    // Fermer la modale en cliquant dessus
    modal.addEventListener('click', function() {
        modal.remove();
    });
}

document.addEventListener('DOMContentLoaded', loadProducts);

