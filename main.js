document.addEventListener('DOMContentLoaded', function () {
    loadFeaturedProducts();
});

function loadFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    // Assuming 'getFeaturedProducts' fetches products from an API or local data
    getFeaturedProducts().forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'p-4 md:w-1/3';
        const contentDiv = document.createElement('div');
        contentDiv.className = 'h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden';
        contentDiv.innerHTML = `
            <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${product.image}" alt="${product.name}">
            <div class="p-6">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">${product.category}</h2>
                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${product.name}</h1>
                <p class="leading-relaxed mb-3">${product.description}</p>
                <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                    <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                            <path d="M1 1v22h22V1H1zm5 20H3V4h3v17zm13 0h-3V4h3v17z"></path>
                        </svg>
                        ${product.price}
                    </span>
                </div>
            </div>
        `;
        productDiv.appendChild(contentDiv);
        featuredProductsContainer.appendChild(productDiv);
    });
}

function getFeaturedProducts() {
    // This should be replaced with an actual API call or local data
    return [
        { id: 1, name: 'Whiskey', description: 'Fine aged whiskey', price: '$45', image: 'whiskey.jpg', category: 'Spirits' },
        { id: 2, name: 'Vodka', description: 'Smooth and clear vodka', price: '$30', image: 'vodka.jpg', category: 'Spirits' },
        // Add more products as needed
    ];
}
