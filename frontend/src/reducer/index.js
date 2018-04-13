import { combineReducers } from 'redux-immutable'
import {reducer as toastrReducer} from 'react-redux-toastr'
import pokemon from "./pokemonReducer";

const reducer = combineReducers({
  pokemon,
  toastr: toastrReducer
});

export default reducer