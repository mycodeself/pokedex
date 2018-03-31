import {fromJS} from "immutable";
import {POKEMONS_FETCHED} from "../actions/pokemonActions";


const initialState = fromJS({
  data: []
});

function pokemonReducer(state = initialState, {type, payload}) {
  switch (type) {
    case POKEMONS_FETCHED:
      return state.set('data', fromJS(payload));
    default:
      return state;
  }
}

export default pokemonReducer