import {toastr} from 'react-redux-toastr'

import getPokemonsService from "../services/getPokemonsService";
import postPokemonsService from "../services/postPokemonService";
import deletePokemonService from "../services/deletePokemonService";
import postPokemonImageService from "../services/postPokemonImageService";
import putPokemonsService from "../services/putPokemonService";

const MAX_FAVORITES = 10;

export const POKEMONS_FETCHED = 'POKEMONS_FETCHED';
export const POKEMON_CREATED = 'POKEMON_CREATED';
export const POKEMON_DELETED = 'POKEMON_DELETED';
export const POKEMON_UPDATED = 'POKEMON_UPDATED';
export const POKEMON_IMAGE_UPLOADED = 'POKEMON_IMAGE_UPLOADED';
export const POKEMONS_SEARCHED = 'POKEMONS_SEARCHED';
export const OVERLAY_OPEN = 'OVERLAY_OPEN';
export const OVERLAY_CLOSE = 'OVERLAY_CLOSE';
export const POKEMONS_FAVORITES_UPDATED = 'POKEMONS_FAVORITES_UPDATED';
export const POKEMONS_FAVORITES_VIEW = 'POKEMONS_FAVORITES_VIEW';
export const POKEMONS_FAVORITES_VIEW_CLOSE = 'POKEMONS_FAVORITES_VIEW_CLOSE';

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

        const favorites = localStorage.getItem(btoa('pokedex_favorites'));
        if(favorites) {
          dispatch(favoritesUpdated(JSON.parse(atob(favorites))))
        }

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
  return (dispatch, getState) => {
    const state = getState();
    return postPokemonsService(pokemon)
      .then(data => {
        dispatch(created(data));
        if(pokemon.image) {
          dispatch(uploadImage(data.id, pokemon.image));
        }
        toastr.success('', 'The pokemon has been created!');
        dispatch(searchPokemons(state.get('pokemon').get('lastSearchText')));
        dispatch(closeOverlay());
        return Promise.resolve(pokemon)
      })
      .catch(error => {
        error.then(err => err.forEach(value => toastr.error(value.property, value.message)));
      })
  }
}

/**
 *
 * @param pokemon
 * @return {function(*)}
 */
export function updatePokemon(pokemon) {
  return (dispatch, getState) => {
    return putPokemonsService(pokemon)
      .then(() => {
        const state = getState();

        if(pokemon.evolutionId) {
          pokemon.evolution = state.getIn(['pokemon', 'data'])
            .filter(item => item.get('id') === pokemon.evolutionId)
            .get(0)
            .toJS();
        }

        dispatch(updated(pokemon));

        if(pokemon.image instanceof File) {
          dispatch(uploadImage(pokemon.id, pokemon.image));
        }

        dispatch(searchPokemons(state.get('pokemon').get('lastSearchText')));
        dispatch(closeOverlay());
        toastr.success('', 'The pokemon has been updated!');
        return Promise.resolve(pokemon)
      })
      .catch(error => {
        error.then(err => err.forEach(value => toastr.error(value.property, value.message)));
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
  return (dispatch, getState) => {
    return deletePokemonService(pokemonId)
      .then(() => {
        const state = getState();
        dispatch(deleted(pokemonId));
        dispatch(searchPokemons(state.getIn(['pokemon', 'lastSearchText'])));
        toastr.success('','The pokemon has been removed');
        return Promise.resolve();
      })
      .catch(error => {
        toastr.error('', error);
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
    const pokemons = getState().getIn(['pokemon', 'data']);

    if(!text) {
      dispatch(searched(text, pokemons.toJS()));
      return;
    }

    const pokemonsFound = pokemons.filter(
      item => item.get('name').toLowerCase().includes(text.toLowerCase())
    );

    dispatch(searched(text, pokemonsFound.toJS()));
  }
}

/**
 *
 * @param pokemonId
 * @return {function(*, *)}
 */
export function addPokemonFavorite(pokemonId) {
  return (dispatch, getState) => {
    const favorites = getState().getIn(['pokemon', 'favoritesIds'])
      .filter(item => getState().getIn(['pokemon', 'data'])
        .find(pokemon => pokemon.get('id') === item));
    if(favorites.size >= MAX_FAVORITES) {
      toastr.error('', 'You can not have more than ten Pokemons as favorites');
      return;
    }
    const favoritesJS = favorites.toJS();
    favoritesJS.push(pokemonId);
    localStorage.setItem(btoa('pokedex_favorites'), btoa(JSON.stringify(favoritesJS)));
    dispatch(favoritesUpdated(favoritesJS));
    toastr.success('','The pokemon has been added to favorites');
  }

}

/**
 *
 * @param pokemonId
 * @return {function(*, *)}
 */
export function removePokemonFavorite(pokemonId) {
  return (dispatch, getState) => {
    const favorites = getState().getIn(['pokemon', 'favoritesIds']);
    if(favorites.size === 0) {
      return;
    }

    const index = favorites.findIndex(item => item === pokemonId);
    const favoritesJS = favorites.delete(index).toJS();
    localStorage.setItem(btoa('pokedex_favorites'), btoa(JSON.stringify(favoritesJS)));
    dispatch(favoritesUpdated(favoritesJS))
    toastr.success('', 'The pokemon has been removed from favorites');
  }
}

export function viewPokemonFavorites() {
  return (dispatch, getState) => {
    const state = getState().get('pokemon');
    const pokemons = state.get('data').filter(item => state.get('favoritesIds').contains(item.get('id')));
    dispatch(viewFavorites(pokemons));
  }
}

export function closeFavoritesView() {
  return {
    type: POKEMONS_FAVORITES_VIEW_CLOSE
  }
}

function viewFavorites(pokemons) {
  return {
    type: POKEMONS_FAVORITES_VIEW,
    payload: pokemons
  }
}

/**
 *
 * @param favorites
 * @return {{type: string, payload: *}}
 */
function favoritesUpdated(favorites) {
  return {
    type: POKEMONS_FAVORITES_UPDATED,
    payload: favorites
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
  return (dispatch, getState) => {
    postPokemonImageService(pokemonId, image)
      .then(data => {
        const state = getState();
        dispatch(imageUploaded(pokemonId, data));
        dispatch(searchPokemons(state.get('pokemon').get('lastSearchText')));
      })
      .catch(error => {
        toastr.error('', error);
      })
  }
}