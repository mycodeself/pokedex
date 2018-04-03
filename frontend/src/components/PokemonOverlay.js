import React from 'react'
import PokemonForm from "./forms/PokemonForm";
import Button from "./buttons/Button";

class PokemonOverlay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const className = this.props.isOpen ? 'overlay' : 'overlay overlay-hide--top';

    return (
      <section className={className}>
        <div className="close-button">
          <Button onClick={this.props.close}>
            <em className="icon-close icon--white icon--l"></em>
          </Button>
        </div>
        <PokemonForm />
      </section>
    )
  }
}

export default PokemonOverlay