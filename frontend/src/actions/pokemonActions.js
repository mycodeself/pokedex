import getPokemonsService from "../services/getPokemonsService";
import postPokemonsService from "../services/postPokemonService";
import deletePokemonService from "../services/deletePokemonService";
import postPokemonImageService from "../services/postPokemonImageService";
import putPokemonsService from "../services/putPokemonService";

export const POKEMONS_FETCHED = 'POKEMONS_FETCHED';
export const POKEMON_CREATED = 'POKEMON_CREATED';
export const POKEMON_DELETED = 'POKEMON_DELETED';
export const POKEMON_UPDATED = 'POKEMON_UPDATED';
export const POKEMON_IMAGE_UPLOADED = 'POKEMON_IMAGE_UPLOADED';
export const POKEMONS_SEARCHED = 'POKEMONS_SEARCHED';
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

        if(pokemon.image) {
          dispatch(uploadImage(data.id, pokemon.image));
        }
        dispatch(created(data));

        return Promise.resolve(pokemon)
      })
      .catch(error => {
        return Promise.reject(error);
      })
  }
}

/**
 *
 * @param pokemon
 * @return {function(*)}
 */
export function updatePokemon(pokemon) {
  return (dispatch) => {
    return putPokemonsService(pokemon)
      .then(() => {
        dispatch(updated(pokemon));

        if(pokemon.image instanceof File) {
          dispatch(uploadImage(pokemon.id, pokemon.image));
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
 * @param pokemon
 * @return {*}
 */
export function createOrUpdatePokemon(pokemon) {
  if(pokemon.id !== null && pokemon.id !== 0) {
    return updatePokemon(pokemon);
  }

  return createPokemon(pokemon);
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
 * @param text
 * @return {function(*, *)}
 */
export function searchPokemons(text) {
  return (dispatch, getState) => {
    const pokemons = getState().get('pokemon').get('data');

    if(!text) {
      dispatch(searched(text, pokemons));
      return;
    }

    const pokemonsFound = pokemons.filter(
      item => item.get('name').toLowerCase().includes(text.toLowerCase())
    );

    dispatch(searched(text, pokemonsFound));
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
 * @param pokemon
 * @return {{type: string, payload: *}}
 */
function updated(pokemon) {
  return {
    type: POKEMON_UPDATED,
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
 * @param text
 * @param pokemons
 * @return {{type: string, payload: {text: *, pokemons: *}}}
 */
function searched(text, pokemons) {
  return {
    type: POKEMONS_SEARCHED,
    payload: {
      text: text,
      pokemons: pokemons
    }
  }
}

/**
 *
 * @param pokemonId
 * @param imageUrl
 */
function imageUploaded(pokemonId, imageUrl) {
  return {
    type: POKEMON_IMAGE_UPLOADED,
    payload: {
      id: pokemonId,
      imageUrl: imageUrl
    }
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
        dispatch(imageUploaded(pokemonId, data));
      })
      .catch(error => {
      })
  }
}