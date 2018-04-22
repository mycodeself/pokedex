import React from 'react'
import PropTypes from 'prop-types'

import PokemonItemOptions from "../containers/PokemonItemOptionsContainer";
import Button from "./buttons/Button";

const propTypes = {
  pokemon: PropTypes.object
};

class PokemonItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDescription = this.toggleDescription.bind(this);

    this.state = {
      isDescriptionOpen: false,
    }
  }

  toggleDescription() {
    this.setState({isDescriptionOpen: !this.state.isDescriptionOpen})
  }

  render() {
    const pokemon = this.props.pokemon;
    const imageSrc = pokemon.imageUrl ? pokemon.imageUrl : '../../assets/images/svg/pokeball.svg';
    return (
      <div className="pokemon-item">
        <div className={
          this.state.isDescriptionOpen ?
            "pokemon-item__description pokemon-item__description--open"  :
            "pokemon-item__description"
        }
        >
          <Button onClick={this.toggleDescription}>
            <em title="Close" className="icon icon--white icon--s icon-cross-out"></em>
          </Button>
          <p>{pokemon.description}</p>
        </div>
        <div className="pokemon-item__block">
          <Button onClick={this.toggleDescription}>
            <div className="pokemon-item__image">
              <img
                src={imageSrc}
                height={150}
                width={150}
                alt={pokemon.name}
                title={pokemon.name}
              />
            </div>
          </Button>
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
}

PokemonItem.propTypes = propTypes;

export default PokemonItem