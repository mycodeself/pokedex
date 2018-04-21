import React from 'react'
import Select from 'react-select';
import getPokemonsService from "../../services/getPokemonsService";

class PokemonSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [],
    }
  }

  componentDidMount() {
    getPokemonsService()
      .then(data => {
        const pokemons = (this.props.filterId) ? data.filter((item) => item.id !== this.props.filterId) : data;
        this.setState({options: pokemons})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Select
        valueKey="id"
        labelKey="name"
        options={this.state.options}
        clearable={true}
        {...this.props}
      />
    )
  }
}

export default PokemonSelect