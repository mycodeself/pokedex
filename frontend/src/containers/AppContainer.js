import { connect } from 'react-redux'

import App from '../components/App';
import {loadPokemons} from "../actions/pokemonActions";

const mapStateToProps = (state, ownProps) => {
  return {
    pokemons: state.get('pokemon').get('pokemons').toJS(),
    isFavoritesView: state.getIn(['pokemon', 'isFavoritesView']),
    favorites: state.getIn(['pokemon', 'favorites']).toJS()
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemons: () => {return dispatch(loadPokemons())}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)