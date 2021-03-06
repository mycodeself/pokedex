import { connect } from 'react-redux'

import {closeFavoritesView, openOverlay, searchPokemons, viewPokemonFavorites} from "../actions/pokemonActions";
import NavBar from "../components/NavBar";

const mapStateToProps = (state, ownProps) => {
  return {
    isFavoritesView: state.getIn(['pokemon', 'isFavoritesView']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openOverlay: () => {dispatch(openOverlay())},
    searchPokemons: (text) => {dispatch(searchPokemons(text))},
    viewPokemonFavorites: () => {dispatch(viewPokemonFavorites())},
    closeFavoritesView: () => {dispatch(closeFavoritesView())}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)