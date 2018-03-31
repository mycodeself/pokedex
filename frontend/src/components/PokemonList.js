import React from 'react'
import PropTypes from 'prop-types'

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
      <div>
        {this.props.pokemons.map(pokemon => <div>{pokemon.name}</div>)}
      </div>
    )
  }
}

PokemonList.propTypes = propTypes;

export default PokemonList