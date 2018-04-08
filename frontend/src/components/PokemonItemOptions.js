import React from 'react'
import FavouriteIcon from "./icons/FavouriteIcon";
import Button from "./buttons/Button";
import SvgIcon from "./icons/SvgIcon";

const PokemonItemOptions = (props) => {
  return (
    <div className="pokemon-item__options">
      <Button onClick={() => props.openOverlay(true, props.pokemon)}>
        <SvgIcon name="edit"/>
      </Button>
      <Button>
        <FavouriteIcon/>
      </Button>
      <Button onClick={() => props.deletePokemon(props.pokemon.id)}>
        <SvgIcon name="eraser" />
      </Button>
    </div>
  )
}

export default PokemonItemOptions