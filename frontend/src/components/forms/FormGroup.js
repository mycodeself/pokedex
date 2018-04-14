import React from 'react'
import PropTypes from 'prop-types'

import InputValidator from "./InputValidator";

const propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  constraints: PropTypes.object,
  onChange: PropTypes.func
}

const defaultProps = {
  type: "text",
  value: "",
  placeholder: "",
  constraints: null,
  onChange: () => {}
}

class FormGroup extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({value})
    this.props.onChange(value)
  }

  render() {
    return (
      <div className="form-group">
        {
          (this.props.type === "textarea")
            ? <textarea
                placeholder={this.props.placeholder}
                name={this.props.name}
                id={this.props.name}
                value={this.props.value}
                onChange={this.handleChange}
              >
              </textarea>
            : <input
                type={this.props.type}
                name={this.props.name}
                id={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.handleChange}
              />
        }
        <label htmlFor={this.props.name}>{this.props.label}</label>
        {
          (this.props.constraints)
            ? <InputValidator constraints={this.props.constraints} value={this.props.value}/>
            : null
        }
      </div>
    )
  }
}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup