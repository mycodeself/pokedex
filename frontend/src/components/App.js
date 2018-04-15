import React from 'react'

import PokemonList from "./PokemonList";
import PokemonOverlay from "../containers/PokemonOverlayContainer";
import NavBar from "../containers/NavBarContainer";
import SvgIcon from "./icons/SvgIcon";
import Button from "./buttons/Button";
import ArrowUpFloatingButton from "./buttons/ArrowUpFloatingButton";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    this.props.loadPokemons()
      .then(() => {
        this.setState({isLoading: false})
      })
      .catch(() => {
        this.setState({isLoading: false})
      })
  }

  render() {
    return (
      <div>
        <NavBar/>
        <main>
          {(this.state.isLoading) ? 'Loading...' : null}
          <PokemonList pokemons={this.props.pokemons}/>
          <PokemonOverlay />
        </main>
        <ArrowUpFloatingButton/>
      </div>
    )
  }
}

export default App