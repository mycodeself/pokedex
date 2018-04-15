import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from "./FormGroup"
import ImageInput from "./ImageInput"
import PokemonSelect from "./PokemonSelect"
import {POKEMONS_IMAGE_URL} from "../../constants";

const propTypes = {
  onSubmit: PropTypes.func,
  isEditing: PropTypes.bool,
  pokemon: PropTypes.object,
};

const defaultProps = {
  onSubmit: (pokemon) => {console.log(pokemon)},
  isEditing: false,
  pokemon: {}
};

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.defaultState = {
      id: null,
      name: "",
      description: "",
      firstType: "",
      secondType: "",
      evolutionId: null,
      image: null,
      imageUrl: ""
    }

    this.state = this.defaultState;
  }

  componentWillReceiveProps(nextProps) {
    this.propsToState(nextProps);
  }

  propsToState(props) {
    if(props.isEditing) {
      const evolutionId = props.pokemon.evolution ? props.pokemon.evolution.id : null;
      this.setState({
        id: props.pokemon.id,
        name: props.pokemon.name,
        description: props.pokemon.description,
        firstType: props.pokemon.firstType,
        secondType: props.pokemon.secondType,
        evolutionId: evolutionId,
        image: props.pokemon.image,
        imageUrl: props.pokemon.imageUrl,
      })
    } else {
      this.setState(this.defaultState);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ImageInput
          onChange={image => this.setState({image})}
          imageUrl={this.state.imageUrl}
        />
        <FormGroup
          type="text"
          name="name"
          label="Name"
          placeholder="The pokemon's name..."
          onChange={(value) => this.setState({name: value})}
          value={this.state.name}
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
          value={this.state.description}
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
          value={this.state.firstType}
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
          value={this.state.secondType}
          constraints={{
            length: {min: 4, max: 20}
          }}
        />
        <div className="form-group">
          <PokemonSelect
            name="evolution"
            placeholder="EVOLUTION"
            onChange={(selectedOption) => this.setState({evolutionId: selectedOption.id})}
            value={this.state.evolutionId}
            filterId={this.state.id}
          />
        </div>
        <div className="text-center">
          <input type="submit" value="Save" className="button button-submit"/>
        </div>
      </form>
    )
  }
}

PokemonForm.propTypes = propTypes;
PokemonForm.defaultProps = defaultProps;

export default PokemonForm