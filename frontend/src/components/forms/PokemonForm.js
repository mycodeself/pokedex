import React from 'react'
import Select from 'react-select';

import FormGroup from "./FormGroup";
import ImageInput from "./ImageInput";


class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <ImageInput />
        <FormGroup type="text" name="name" label="Name" placeholder="The pokemon's name..." />
        <FormGroup type="textarea" name="description" label="Description" placeholder="A powerful description..." />
        <FormGroup type="text" name="firstType" label="Type one" placeholder="One pokemon type..." />
        <FormGroup type="text" name="secondType" label="Type two" placeholder="Another pokemon type..." />
        <Select
          placeholder="Does this Pokémon evolve?"
          name="evolution"
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default PokemonForm