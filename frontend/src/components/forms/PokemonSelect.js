import React from 'react'
import Select from 'react-select';
import getPokemonsService from "../../services/getPokemonsService";

class PokemonSelect extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      options: [],
      value: null,
    }
  }

  componentDidMount() {
    getPokemonsService()
      .then(data => this.setState({options: data}))
      .catch(error => console.log(error))
  }

  handleChange(selectedOption) {
    this.setState({value: selectedOption.id});
    this.props.onChange(selectedOption);
  }

  render() {
    return (
      <Select
        valueKey="id"
        labelKey="name"
        options={this.state.options}
        onChange={this.handleChange}
        value={this.state.value}
        {...this.props}
      />
    )
  }
}

export default PokemonSelect