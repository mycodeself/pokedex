import React from 'react'
import FavouriteIcon from "./icons/FavouriteIcon";

const PokemonItem = ({pokemon}) => {
  return (
    <div className="pokemon-item">
      <div className="pokemon-item__block">
        <div className="pokemon-item__image">
          <img src="../../assets/images/svg/pokeball.svg" />
          <em className="icon icon-trash"></em>
          <em className="icon icon-edit"></em>
          <FavouriteIcon/>
        </div>
        <div className="pokemon-item__icons">

        </div>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.firstType} {pokemon.secondType}</p>
      </div>
    </div>
  )
}

export default PokemonItem