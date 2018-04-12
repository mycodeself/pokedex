import { connect } from 'react-redux'

import {openOverlay, searchPokemons} from "../actions/pokemonActions";
import NavBar from "../components/NavBar";

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    openOverlay: () => {dispatch(openOverlay())},
    searchPokemons: (text) => {dispatch(searchPokemons(text))}
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)