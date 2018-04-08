import { connect } from 'react-redux'

import PokemonOverlay from "../components/PokemonOverlay";
import {closeOverlay, createPokemon} from "../actions/pokemonActions";

const mapStateToProps = (state, ownProps) => {
  return {
    isOpen: state.get('pokemon').get('overlayIsOpen'),
    isEditing: state.get('pokemon').get('isEditing'),
    pokemon: state.get('pokemon').get('pokemon')
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    close: () => {dispatch(closeOverlay())},
    createPokemon: (pokemon) => {dispatch(createPokemon(pokemon))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonOverlay)