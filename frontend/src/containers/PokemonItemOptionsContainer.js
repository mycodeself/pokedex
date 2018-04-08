import { connect } from 'react-redux'

import PokemonItemOptions from "../components/PokemonItemOptions";
import {deletePokemon, openOverlay} from "../actions/pokemonActions";

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openOverlay: (isEditing, pokemon) => {dispatch(openOverlay(isEditing, pokemon))},
    deletePokemon: (pokemonId) => {return dispatch(deletePokemon(pokemonId))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonItemOptions)