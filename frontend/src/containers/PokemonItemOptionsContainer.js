import { connect } from 'react-redux'

import PokemonItemOptions from "../components/PokemonItemOptions";
import {addPokemonFavorite, deletePokemon, openOverlay, removePokemonFavorite} from "../actions/pokemonActions";

const mapStateToProps = (state, ownProps) => {
  return {
    favorites: state.getIn(['pokemon', 'favorites']).toJS(),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openOverlay: (isEditing, pokemon) => {dispatch(openOverlay(isEditing, pokemon))},
    deletePokemon: (pokemonId) => {return dispatch(deletePokemon(pokemonId))},
    addPokemonFavorite: (pokemonId) => {dispatch(addPokemonFavorite(pokemonId))},
    removePokemonFavorite: (pokemonId) => {dispatch(removePokemonFavorite(pokemonId))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonItemOptions)