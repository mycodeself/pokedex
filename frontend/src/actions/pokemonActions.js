import getPokemonsService from "../services/getPokemonsService";

export const POKEMONS_FETCHED = 'POKEMONS_FETCHED';
export const OVERLAY_OPEN = 'OVERLAY_OPEN';
export const OVERLAY_CLOSE = 'OVERLAY_CLOSE';

function fetched(pokemons) {
  return {
    type: POKEMONS_FETCHED,
    payload: pokemons
  }
}

export function openOverlay(isEditing = false, pokemon = {}) {
  return {
    type: OVERLAY_OPEN,
    payload: {
      isEditing: isEditing,
      pokemon: pokemon
    }
  }
}

export function closeOverlay() {
  return {
    type: OVERLAY_CLOSE
  }
}

export function loadPokemons() {
  return (dispatch) => {
    return getPokemonsService()
      .then(pokemons => {
        dispatch(fetched(pokemons));
        return Promise.resolve(data);
      })
      .catch((error) => {
        return Promise.reject(error);
      })
  }
}