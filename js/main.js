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
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
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
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
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
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
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
            p.textContent = 'Precio: ' + cocktail.idDrink; 

            const link = document.createElement('a');
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