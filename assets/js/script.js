const fetchPokemon = async (pokemon) => {
 
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/${pokemon}`);
    
    const data =  await APIResponse.json();

    return data;
}

