import {fromJS} from "immutable";
import {OVERLAY_CLOSE, OVERLAY_OPEN, POKEMONS_FETCHED} from "../actions/pokemonActions";

const initialState = fromJS({
  data: [],
  overlayIsOpen: false,
  isEditing: false,
  pokemon: {}
});

function pokemonReducer(state = initialState, {type, payload}) {
  switch (type) {
    case POKEMONS_FETCHED:
      return state.set('data', fromJS(payload));
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