import { connect } from 'react-redux'

import App from '../components/App';
import {loadPokemons} from "../actions/pokemonActions";

const mapStateToProps = (state, ownProps) => {
  return {
    pokemons: state.get('pokemon').get('data').toJS()
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