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
      <div>
        {(this.state.isLoading) ? 'Loading...' : null}
        <h1>Hello world from ReactJS</h1>
        <PokemonList pokemons={this.props.pokemons}/>
      </div>
    )
  }
}

export default App