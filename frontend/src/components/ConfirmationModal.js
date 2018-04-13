import React from 'react'
import PropTypes from 'prop-types'

import Button from "./buttons/Button";

const propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func
}

const defaultProps = {
  title: 'ConfirmModal',
  message: 'Are you sure?',
  onConfirm: PropTypes.func
}

class ConfirmationModal extends React.Component {
  constructor(props) {
    super(props);

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.onConfirm = this.onConfirm.bind(this);

    this.state = {
      isOpen: false,
    }
  }

  open() {
    this.setState({isOpen: true})
  }

  close() {
    this.setState({isOpen: false})
  }

  onConfirm() {
    this.close();
    this.props.onConfirm();
  }


  render() {
    return (
      <div className={
        this.state.isOpen ? "modal-overlay modal-overlay--open" : "modal-overlay"
      }>
        <div className="modal">
          <h1>{this.props.title}</h1>
          <p>{this.props.message}</p>
          <div className="modal-buttons">
            <Button className="button-confirm" onClick={this.onConfirm}>
              Confirm
            </Button>
            <Button className="button-cancel" onClick={this.close}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

ConfirmationModal.propTypes = propTypes;
ConfirmationModal.defaultProps = defaultProps;

export default ConfirmationModal