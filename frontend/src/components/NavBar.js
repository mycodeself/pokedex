import React from 'react'
import Button from "./buttons/Button";

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

  render() {
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
              <em className="icon icon--white icon--s icon-cross"></em>
            </Button>
          </div>
        </nav>
      )
    }

    return (
      <nav>
        <h1>Pokedex</h1>
        <div className="navbar-buttons">
          <Button onClick={this.onClickSearch}>
            <em className="icon icon--white icon-search"></em>
          </Button>
          <Button onClick={this.props.openOverlay}>
            <em className="icon icon--white icon-plus"></em>
          </Button>
        </div>
      </nav>
    )
  }
}

export default NavBar