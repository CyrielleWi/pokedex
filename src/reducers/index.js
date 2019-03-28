export default function updatePokedex(state = {}, action) {
    switch (action.type) {
    case 'ADD_POKEMON':
        return {
            ...state,
            [action.pokemon.id]: action.pokemon,
        }
      default:
        return state
    }
  }