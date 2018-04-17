import React from 'react'
import Button from "./buttons/Button";
import SvgIcon from "./icons/SvgIcon";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.onClickSearch = this.onClickSearch.bind(this);
    this.onClickCloseSearch = this.onClickCloseSearch.bind(this);

    this.searchRef = null;

    this.state = {
      isSearching: false,
    }
  }

  onClickSearch() {
    this.setState({isSearching: true}, () => {
      this.searchRef.focus();
    }, this);
  }

  onClickCloseSearch() {
    this.setState({isSearching: false});
    this.props.searchPokemons('');
  }

  renderButtons() {
    if(this.props.isFavoritesView) {
      return (
        <div className="navbar-buttons">
          <Button onClick={this.props.closeFavoritesView}>
            <em className="icon icon--white icon-back"></em>
          </Button>
        </div>
      )
    }

    return (
      <div className="navbar-buttons">
        <Button onClick={this.props.viewPokemonFavorites}>
          <SvgIcon
            name="star"
            size={24}
          />
        </Button>
        <Button onClick={this.onClickSearch}>
          <em className="icon icon--white icon-search"></em>
        </Button>
        <Button onClick={this.props.openOverlay}>
          <em className="icon icon--white icon-plus"></em>
        </Button>
      </div>
    )
  }

  render() {
    const title = this.props.isFavoritesView ? 'Favorites' : 'Pokedex';

    if(this.state.isSearching) {
      return (
        <nav>
          <div className="navbar-search">
            <input
              type="text"
              name="search"
              placeholder="Type to search..."
              className="search-input"
              ref={ref => this.searchRef = ref}
              onChange={(event) => this.props.searchPokemons(event.target.value)}
            />
            <Button onClick={this.onClickCloseSearch}>
              <em className="icon icon--white icon--s icon-cross-out"></em>
            </Button>
          </div>
        </nav>
      )
    }

    return (
      <nav>
        <h1>{title}</h1>
        {this.renderButtons()}
      </nav>
    )
  }
}

export default NavBar