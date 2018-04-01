import React from 'react'
import PokemonList from "./PokemonList";

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
      <main>
        {(this.state.isLoading) ? 'Loading...' : null}
        <PokemonList pokemons={this.props.pokemons}/>
      </main>
    )
  }
}

export default App