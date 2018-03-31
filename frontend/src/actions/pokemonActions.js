import getPokemonsService from "../services/getPokemonsService";

export const POKEMONS_FETCHED = 'POKEMONS_FETCHED';

function fetched(pokemons) {
  return {
    type: POKEMONS_FETCHED,
    payload: pokemons
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