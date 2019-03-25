export default function updatePokedex(state = {}, action) {
    switch (action.type) {
    case 'ADD_POKEMON':
        return {
            ...state,
            [action.pokemon.name]: action.pokemon,
        }
      default:
        return state
    }
  }