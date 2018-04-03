import React from 'react'
import PokemonItemOptions from "../containers/PokemonItemOptionsContainer";

const PokemonItem = ({pokemon}) => {
  return (
    <div className="pokemon-item">
      <div className="pokemon-item__block">
        <div className="pokemon-item__image">
          <img src="../../assets/images/svg/pokeball.svg" />
        </div>
        <PokemonItemOptions pokemon={pokemon}/>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.firstType} {pokemon.secondType}</p>
      </div>
    </div>
  )
}

export default PokemonItem