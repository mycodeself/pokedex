import React from 'react'
import FavouriteIcon from "./icons/FavouriteIcon";
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
    const isFavorite = this.props.favorites.includes(this.props.pokemon.id);
    this.setState({isFavorite: isFavorite})
  }

  componentWillReceiveProps(nextProps) {
    const isFavorite = nextProps.favorites.includes(nextProps.pokemon.id);
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
            <SvgIcon name="edit"/>
          </Button>
          <Button
            onClick={this.handleFavClick}
          >
            <SvgIcon
              name="star"
              disabled={!this.state.isFavorite}
            />
          </Button>
          <Button onClick={() => this.confirmModalRef.open()}>
            <SvgIcon name="eraser" />
          </Button>
        </div>
      </div>
    )
  }
}

export default PokemonItemOptions