const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const fetchPokemon = async (pokemon) => { /*PEGAR OS DADOS DO POKEMON*/
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if(APIResponse.status === 200){
            const data =  await APIResponse.json();
            return data;
    } else {}
}

const renderPokemon = async (pokemon) => { /*MOSTRAR OS DADOS (NOME, NÚMERO e GIF)*/
    const data = await fetchPokemon(pokemon);

    if(data){
            pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];    

    input.value = '';
    } else{}
}

form.addEventListener('submit', (event) => { /*MUDAR OS DADOS DE ACORDO COM O INPUT */
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});
