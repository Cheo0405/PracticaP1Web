document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const parametro = urlParams.get('tipo');
    const titulo = document.getElementById('titulo');

    if (parametro === 'SA') {
        titulo.textContent = 'Bebidas Sin Alcohol';
        listadoBebidasSinAlcohol(); 
    } else if (parametro === 'CA') {
        titulo.textContent = 'Bebidas Con Alcohol';
        listadoBebidasConAlcohol(); 

    } else if(parametro === 'trago'){
        titulo.textContent = 'Bebidas Ordinarias';
        listadoBebidasOrdinarias();

    } else if(parametro === 'coctel'){
        titulo.textContent = 'Cocteles';
        listadoCocteles();

    }
});

const namecoctel = document.getElementById('nameCoctel')
const coctelImage = document.getElementById('coctelImage');
const cocktailList = document.getElementById('coctelList');
const precio = document.getElementById('precio');

function listadoBebidasSinAlcohol() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(res => res.json())
    .then(data => {
        data.drinks.forEach(cocktail => {
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';

            const image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = cocktail.strDrinkThumb;
            image.alt = cocktail.strDrink;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = cocktail.strDrink;

            const p = document.createElement('p');
            p.id = 'precio';
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
            link.id = 'agregar';
            link.href = 'agregarcocteles.html';
            link.className = 'btn btn-primary';
            link.textContent = 'Agregar al carrito';

            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(p);
            cardBody.appendChild(link);

            cocktailList.appendChild(card);
            
        });
    })
    .catch(error => console.error('Error:', error));
}

function listadoBebidasConAlcohol() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(res => res.json())
    .then(data => {
        data.drinks.forEach(cocktail => {
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';

            const image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = cocktail.strDrinkThumb;
            image.alt = cocktail.strDrink;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = cocktail.strDrink;

            const p = document.createElement('p');
            p.id = 'precio';
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
            link.id = 'agregar';
            link.href = 'agregarcocteles.html';
            link.className = 'btn btn-primary';
            link.textContent = 'Agregar al carrito';

            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(p);
            cardBody.appendChild(link);

            cocktailList.appendChild(card);
            

        });
    })
    .catch(error => console.error('Error:', error));
}

function listadoBebidasOrdinarias() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
    .then(res => res.json())
    .then(data => {
        data.drinks.forEach(cocktail => {
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';

            const image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = cocktail.strDrinkThumb;
            image.alt = cocktail.strDrink;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = cocktail.strDrink;

            const p = document.createElement('p');
            p.id = 'precio';
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
            link.id = 'agregar';
            link.href = 'agregarcocteles.html';
            link.className = 'btn btn-primary';
            link.textContent = 'Agregar al carrito';

            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(p);
            cardBody.appendChild(link);

            cocktailList.appendChild(card);
            
        });
    })
    .catch(error => console.error('Error:', error));
}

function listadoCocteles() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(res => res.json())
    .then(data => {
        data.drinks.forEach(cocktail => {
            
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';

            const image = document.createElement('img');
            image.className = 'card-img-top';
            image.src = cocktail.strDrinkThumb;
            image.alt = cocktail.strDrink;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = cocktail.strDrink;

            const p = document.createElement('p');
            p.id = 'precio';
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
            link.id = 'agregar';
            link.href = 'agregarcocteles.html';
            link.className = 'btn btn-primary';
            link.textContent = 'Agregar al carrito';

            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(p);
            cardBody.appendChild(link);

            cocktailList.appendChild(card);
            
        });
    })
    .catch(error => console.error('Error:', error));
}

async function searchCocktail() {
    const searchInput = document.getElementById('searchInput').value;
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchInput}`);
    const data = await response.json();

    if (data.drinks) {
        const cocktail = data.drinks[0];
        const productImage = document.getElementById('productImage');
        const productName = document.getElementById('productName');
        const productPrice = document.getElementById('productPrice');
        const quantity = document.getElementById('quantity');
        const total = document.getElementById('total');

        productImage.src = cocktail.strDrinkThumb;
        productName.value = cocktail.strDrink;
        productPrice.value = parseFloat(cocktail.idDrink);
        quantity.value = 1; // Reset quantity to 1
        total.value = productPrice.value; // Set initial total
    } else {
        alert('No se encontraron resultados.');
    }
}

function calculateTotal() {
    const quantity = document.getElementById('quantity').value;
    const productPrice = document.getElementById('productPrice').value;
    const total = document.getElementById('total');
    total.value = (quantity * productPrice).toFixed(2);
}


document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('agregar');
    if (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const nombreCoctel = document.getElementById('nameCoctel').textContent;
            localStorage.setItem('nombreCoctel', nombreCoctel);
            window.location.href = 'agregarcocteles.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const nombreCoctel = localStorage.getItem('nombreCoctel');
    const searchInput = document.getElementById('searchInput');
    if (nombreCoctel && searchInput) {
        searchInput.value = nombreCoctel;
    }
}); 
