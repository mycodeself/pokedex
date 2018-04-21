import React from 'react'
import PokemonForm from "./forms/PokemonForm";
import Button from "./buttons/Button";

class PokemonOverlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCSSTransitionEnd: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.isOpen !== nextProps.isOpen) {
      setTimeout(() => {
        this.setState({isCSSTransitionEnd: !this.state.isCSSTransitionEnd})
      }, 200)
    }
  }

  renderForm() {
    if(!this.props.isOpen && this.state.isCSSTransitionEnd) {
      return null;
    }

    return (
      <PokemonForm
        isEditing={this.props.isEditing}
        pokemon={this.props.pokemon}
        onSubmit={this.props.createOrUpdatePokemon}
      />
    )
  }

  render() {
    const className = this.props.isOpen ? 'overlay' : 'overlay overlay-hide--top';
    const title = this.props.isEditing ? 'Edit Pokémon' : 'Create Pokémon';

    return (
      <section className={className}>
        <div className="close-button">
          <Button onClick={this.props.close}>
            <em title="Close" className="icon-close icon--white icon--l"></em>
          </Button>
        </div>
        <h1>{title}</h1>
        {this.renderForm()}
      </section>
    )
  }
}

export default PokemonOverlay