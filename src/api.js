export const fetchPokemon = async () => {
    try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
        let responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.log(error);
    }
  };