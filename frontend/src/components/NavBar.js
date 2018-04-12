import React from 'react'
import Button from "./buttons/Button";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <nav>
        <h1>Pokedex</h1>
        <input
          type="text"
          name="search"
          placeholder="Type to search..."
          onChange={(event) => this.props.searchPokemons(event.target.value)}
        />
        <Button onClick={this.props.openOverlay}>
          <em className="icon icon-plus"></em>
        </Button>
      </nav>
    )
  }
}

export default NavBar