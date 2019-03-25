export const fetchPokemon = async (pokemonId) => {
    try {
        const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
        let response = await fetch(url);
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
  };