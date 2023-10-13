const cocteles = document.querySelector('.coctel-container')

function fetchCoctel(){
    fetch('www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(res => res.json())
    .then(data => console.log(data))
}

fetchCoctel();
