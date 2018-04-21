import React from 'react'
import Button from "./buttons/Button";
import SvgIcon from "./icons/SvgIcon";
import ConfirmationModal from "./ConfirmationModal";

class PokemonItemOptions extends React.Component {
  constructor(props) {
    super(props);

    this.handleFavClick = this.handleFavClick.bind(this);
    this.confirmModalRef = null;

    this.state = {
      isFavorite: false
    }
  }

  componentWillMount() {
    this.checkIfFavorite(this.props.favoritesIds, this.props.pokemon.id)
  }

  componentWillReceiveProps(nextProps) {
    this.checkIfFavorite(nextProps.favoritesIds, nextProps.pokemon.id)
  }

  checkIfFavorite(favoritesIds, pokemonId) {
    const isFavorite = favoritesIds.includes(pokemonId);
    this.setState({isFavorite: isFavorite})
  }

  handleFavClick() {
    (this.state.isFavorite)
      ? this.props.removePokemonFavorite(this.props.pokemon.id)
      : this.props.addPokemonFavorite(this.props.pokemon.id)
  }

  render() {
    return (
      <div>
        <ConfirmationModal
          ref={ref => this.confirmModalRef = ref}
          title="Deleting pokemon"
          message={`Are you sure you want to delete the pokemon ${this.props.pokemon.name}?`}
          onConfirm={() => this.props.deletePokemon(this.props.pokemon.id)}
        />
        <div className="pokemon-item__options">
          <Button onClick={() => this.props.openOverlay(true, this.props.pokemon)}>
            <SvgIcon title="Edit" name="edit"/>
          </Button>
          <Button
            onClick={this.handleFavClick}
          >
            <SvgIcon
              title="Add to favorites"
              name="star"
              disabled={!this.state.isFavorite}
            />
          </Button>
          <Button onClick={() => this.confirmModalRef.open()}>
            <SvgIcon title="Delete" name="eraser" />
          </Button>
        </div>
      </div>
    )
  }
}

export default PokemonItemOptions