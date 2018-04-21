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
      <div>
        <p style={{textAlign: 'center'}}>
          {
            (this.props.pokemons.length)
              ? `${this.props.pokemons.length} wild Pokémon has appeared.`
              : 'No Pokémon found :('
          }
        </p>
        <div className="pokemon-list">
          {this.props.pokemons.map(
            pokemon => <PokemonItem key={pokemon.id} pokemon={pokemon}/>
          )}
        </div>
      </div>
    )
  }
}

PokemonList.propTypes = propTypes;

export default PokemonList