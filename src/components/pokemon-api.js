const nrOfCards = 100;
let pokemonArray = [];

async function handlerAPI(url) {
    const response = await fetch(url);
    const responseData = await response.json()
    return responseData;
}

async function getPokemonArray() {
    for (let i = 1; i < nrOfCards + 1; i++) {
        let iString = i.toString();
        let url = 'https://pokeapi.co/api/v2/pokemon/' + iString;
        const response = await handlerAPI(url);
        const pictureURL = response.sprites.other.home.front_default;
        pokemonArray.push(pictureURL);
    }
    return pokemonArray;
}

getPokemonArray().then(result => {
    console.log(result);
  });  