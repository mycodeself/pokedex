import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from "./FormGroup"
import ImageInput from "./ImageInput"
import PokemonSelect from "./PokemonSelect"

const propTypes = {
  onSubmit: PropTypes.func
}

const defaultProps = {
  onSubmit: (pokemon) => {console.log(pokemon)}
}

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: "",
      description: "",
      firstType: "",
      secondType: "",
      evolutionId: null,
      image: null,
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ImageInput onChange={image => this.setState({image})} />
        <FormGroup
          type="text"
          name="name"
          label="Name"
          placeholder="The pokemon's name..."
          onChange={(value) => this.setState({name: value})}
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
          onChange={(value) => this.setState({description: value})}
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
          onChange={(value) => this.setState({firstType: value})}
          constraints={{
            length: {min: 4, max: 20}
          }}
      />
        <FormGroup
          type="text"
          name="secondType"
          label="Type two"
          placeholder="Another pokemon type..."
          onChange={(value) => this.setState({secondType: value})}
          constraints={{
            length: {min: 4, max: 20}
          }}
        />
        <div className="form-group">
          <PokemonSelect
            name="evolution"
            placeholder="Pokékom evolve?"
            onChange={(selectedOption) => this.setState({evolutionId: selectedOption.id})}
            value={this.state.evolutionId}
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

PokemonForm.propTypes = propTypes;
PokemonForm.defaultProps = defaultProps;

export default PokemonForm