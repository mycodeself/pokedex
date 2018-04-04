import React from 'react'

import FormGroup from "./FormGroup";
import ImageInput from "./ImageInput";
import PokemonSelect from "./PokemonSelect";


class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      firstType: "",
      secondType: "",
      evolution: null
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.name);
  }

  render() {
    console.log('pokemonFormRender')
    return (
      <form onSubmit={this.handleSubmit}>
        <ImageInput />
        <FormGroup
          type="text"
          name="name"
          label="Name"
          placeholder="The pokemon's name..."
          onChange={(value) => {this.setState({name: value})}}
          constraints={{
            notEmpty: true,
            length: {min: 4, max: 24}
          }}
        />
        <FormGroup
          type="textarea"
          name="description"
          label="Description"
          placeholder="A powerful description..."
          constraints={{
            notEmpty: true,
            length: {min: 30}
          }}
        />
        <FormGroup
          type="text"
          name="firstType"
          label="Type one"
          placeholder="One pokemon type..."
          constraints={{
            length: {min: 4, max: 20}
          }}
      />
        <FormGroup
          type="text"
          name="secondType"
          label="Type two"
          placeholder="Another pokemon type..."
          constraints={{
            length: {min: 4, max: 20}
          }}
        />
        <div className="form-group">
          <PokemonSelect name="evolution" placeholder="Pokékom evolve?" onChange={(selectedOption) => {console.log(selectedOption)}}/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default PokemonForm