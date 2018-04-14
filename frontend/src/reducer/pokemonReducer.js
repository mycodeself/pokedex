import {fromJS} from "immutable";

import {
  OVERLAY_CLOSE,
  OVERLAY_OPEN, POKEMON_ADD_FAVORITE,
  POKEMON_CREATED,
  POKEMON_DELETED,
  POKEMON_IMAGE_UPLOADED,
  POKEMON_UPDATED, POKEMONS_FAVORITES_UPDATED,
  POKEMONS_FETCHED, POKEMONS_SEARCHED
} from "../actions/pokemonActions";



const initialState = fromJS({
  data: [],
  pokemons: [],
  lastSearchText: '',
  overlayIsOpen: false,
  isEditing: false,
  pokemon: {},
  favorites: []
});

function pokemonReducer(state = initialState, {type, payload}) {
  let index = -1;

  switch (type) {
    case POKEMONS_FETCHED:
      return state.set('data', fromJS(payload)).set('pokemons', fromJS(payload));
    case POKEMON_CREATED:
      return state.update('data', data => data.push(fromJS(payload)));
    case POKEMON_DELETED:
      return state.set('data', state.get('data').filter(pokemon => pokemon.get('id') !== payload));
    case POKEMON_UPDATED:
      index = state.get('data').findIndex(item => item.get('id') === payload.id);
      return state.setIn(['data', index], fromJS(payload)).set('pokemon', fromJS(payload));
    case POKEMON_IMAGE_UPLOADED:
      index = state.get('data').findIndex(item => item.get('id') === payload.id);
      return state.setIn(['data', index], state.getIn(['data', index]).set('imageUrl',payload.imageUrl));
    case POKEMONS_SEARCHED:
      return state.set('pokemons', fromJS(payload.pokemons)).set('lastSearchText', payload.text);
    case POKEMONS_FAVORITES_UPDATED:
      return state.set('favorites', fromJS(payload));
    case OVERLAY_OPEN:
      return state
        .set('overlayIsOpen', true)
        .set('isEditing', payload.isEditing)
        .set('pokemon', fromJS(payload.pokemon));
    case OVERLAY_CLOSE:
      return state
        .set('overlayIsOpen', false)
        .set('isEditing', false)
        .set('pokemon', fromJS({}));
    default:
      return state;
  }
}

export default pokemonReducer