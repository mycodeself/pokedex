import React from 'react'
import PokemonForm from "./forms/PokemonForm";
import Button from "./buttons/Button";

class Overlay extends React.Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.toggle = this.toggle.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      isOpen: true,
    }
  }

  open() {
    this.setState({isOpen: true})
  }

  toggle() {
    this.setState({isOpen: !this.state.isOpen})
  }

  close() {
    this.setState({isOpen: false})
  }

  render() {
    const className = this.state.isOpen ? 'overlay' : 'overlay overlay-hide--top';

    return (
      <section className={className}>
        <div className="close-button">
          <Button onClick={this.close}>
            <em className="icon-close icon--white icon--l"></em>
          </Button>
        </div>
        <PokemonForm />
      </section>
    )
  }
}

export default Overlay