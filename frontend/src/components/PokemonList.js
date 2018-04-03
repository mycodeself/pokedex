import React from 'react'
import PropTypes from 'prop-types'
import PokemonItem from "./PokemonItem";

const propTypes = {
  pokemons: PropTypes.array.isRequired
}

class PokemonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="pokemon-list">
        {this.props.pokemons.map(pokemon => <PokemonItem pokemon={pokemon}/>)}
      </div>
    )
  }
}

PokemonList.propTypes = propTypes;

export default PokemonList