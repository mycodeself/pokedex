import React from 'react'
import FavouriteIcon from "./icons/FavouriteIcon";
import Button from "./buttons/Button";

const PokemonItemOptions = (props) => {
  return (
    <div className="pokemon-item__options">
      <Button onClick={() => props.openOverlay(true, props.pokemon)}>
        <em className="icon icon-edit"></em>
      </Button>
      <Button>
        <FavouriteIcon/>
      </Button>
      <Button>
        <em className="icon icon-trash"></em>
      </Button>
    </div>
  )
}

export default PokemonItemOptions