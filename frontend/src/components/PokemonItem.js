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
        <p>{pokemon.firstType} {pokemon.secondType}</p>
      </div>
    </div>
  )
}

export default PokemonItem