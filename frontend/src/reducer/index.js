import { combineReducers } from 'redux-immutable'

import pokemon from "./pokemonReducer";

const reducer = combineReducers({
  pokemon
});

export default reducer