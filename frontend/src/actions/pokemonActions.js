import getPokemonsService from "../services/getPokemonsService";
import postPokemonsService from "../services/postPokemonService";
import deletePokemonService from "../services/deletePokemonService";
import postPokemonImageService from "../services/postPokemonImageService";

export const POKEMONS_FETCHED = 'POKEMONS_FETCHED';
export const POKEMON_CREATED = 'POKEMON_CREATED';
export const POKEMON_DELETED = 'POKEMON_DELETED';
export const OVERLAY_OPEN = 'OVERLAY_OPEN';
export const OVERLAY_CLOSE = 'OVERLAY_CLOSE';

/**
 *
 * @param isEditing
 * @param pokemon
 * @return {{type: string, payload: {isEditing: boolean, pokemon: {}}}}
 */
export function openOverlay(isEditing = false, pokemon = {}) {
  return {
    type: OVERLAY_OPEN,
    payload: {
      isEditing: isEditing,
      pokemon: pokemon
    }
  }
}

/**
 *
 * @return {{type: string}}
 */
export function closeOverlay() {
  return {
    type: OVERLAY_CLOSE
  }
}

/**
 *
 * @return {function(*)}
 */
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

/**
 *
 * @param pokemon
 * @return {function(*)}
 */
export function createPokemon(pokemon) {
  return (dispatch) => {
    return postPokemonsService(pokemon)
      .then(data => {
        dispatch(created(data));
        if(pokemon.image) {
          dispatch(uploadImage(data.id, pokemon.image));
        }

        return Promise.resolve(pokemon)
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}

/**
 *
 * @param pokemonId
 * @return {function(*)}
 */
export function deletePokemon(pokemonId) {
  return (dispatch) => {
    return deletePokemonService(pokemonId)
      .then(() => {
        dispatch(deleted(pokemonId));
        return Promise.resolve();
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}

/**
 *
 * @param pokemons
 * @return {{type: string, payload: *}}
 */
function fetched(pokemons) {
  return {
    type: POKEMONS_FETCHED,
    payload: pokemons
  }
}

/**
 *
 * @param pokemon
 * @return {{type: string, payload: *}}
 */
function created(pokemon) {
  return {
    type: POKEMON_CREATED,
    payload: pokemon
  }
}

/**
 *
 * @param pokemonId
 * @return {{type: string, payload: *}}
 */
function deleted(pokemonId) {
  return {
    type: POKEMON_DELETED,
    payload: pokemonId
  }
}

/**
 *
 * @param pokemonId
 * @param image
 * @return {function(*)}
 */
function uploadImage(pokemonId, image) {
  return (dispatch) => {
    postPokemonImageService(pokemonId, image)
      .then(data => {

      })
      .catch(error => {

      })
  }
}