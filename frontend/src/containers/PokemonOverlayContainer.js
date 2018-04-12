import {connect} from 'react-redux'

import PokemonOverlay from "../components/PokemonOverlay";
import {closeOverlay, createOrUpdatePokemon} from "../actions/pokemonActions";

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.get('pokemon').get('overlayIsOpen'),
    isEditing: state.get('pokemon').get('isEditing'),
    pokemon: state.get('pokemon').get('pokemon').toJS()
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {dispatch(closeOverlay())},
    createOrUpdatePokemon: (pokemon) => {dispatch(createOrUpdatePokemon(pokemon))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonOverlay)