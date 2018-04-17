import React from 'react'
import PokemonItemOptions from "../containers/PokemonItemOptionsContainer";
import {POKEMONS_IMAGE_URL} from "../constants";

const PokemonItem = ({pokemon}) => {
  const imageSrc = pokemon.imageUrl ? pokemon.imageUrl : '../../assets/images/svg/pokeball.svg';
  return (
    <div className="pokemon-item">
      <div className="pokemon-item__block">
        <div className="pokemon-item__image">
          <img src={imageSrc} height={150} width={150} />
        </div>
        <PokemonItemOptions pokemon={pokemon}/>
        <h1>{pokemon.name}</h1>
        <p className="pokemon-types">
          {(pokemon.firstType) ? <span className="pokemon-type-one">{pokemon.firstType}</span> : null}
          {(pokemon.secondType) ? <span className="pokemon-type-two">{pokemon.secondType}</span> : null}
        </p>
      </div>
    </div>
  )
}

export default PokemonItem