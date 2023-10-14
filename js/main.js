const namecoctel = document.getElementById('nameCoctel')
const coctelImage = document.getElementById('coctelImage');
const cocktailList = document.getElementById('coctelList');

function fetchCoctelSA() {
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

            const link = document.createElement('a');
            link.href = 'agregarcocteles.html';
            link.className = 'btn btn-primary';
            link.textContent = 'Agregar al carrito';

            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(link);

            coctelList.appendChild(card);
            

        });
    })
    .catch(error => console.error('Error:', error));
}

function fetchCoctelCA() {
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

            const link = document.createElement('a');
            link.href = 'agregarcocteles.html';
            link.className = 'btn btn-primary';
            link.textContent = 'Agregar al carrito';

            card.appendChild(image);
            card.appendChild(cardBody);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(link);

            coctelList.appendChild(card);
            

        });
    })
    .catch(error => console.error('Error:', error));
}

fetchCoctelSA();