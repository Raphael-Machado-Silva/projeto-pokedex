const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const fetchPokemon = async (pokemon) => { /*PEGAR OS DADOS DO POKEMON*/
 
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data =  await APIResponse.json();
    return data;
}

const renderPokemon = async (pokemon) => { /*MOSTRAR OS DADOS (NOME, NÚMERO e GIF)*/
    const data = await fetchPokemon(pokemon);

    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    renderPokemon(input.value);
    input.value = '';
});
