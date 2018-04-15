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
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      focus: false,
      blur: false
    }
  }

  handleChange(event) {
    const value = event.target.value;
    this.props.onChange(value)
  }

  handleFocus() {
    this.setState({focus: true, blur: false});
  }

  handleBlur() {
    this.setState({focus: false, blur: true});
  }

  render() {
    return (
      <div className="form-group-container">
        <div className="form-group">
          {
            (this.props.type === "textarea")
              ? <textarea
                  placeholder={this.props.placeholder}
                  name={this.props.name}
                  id={this.props.name}
                  value={this.props.value}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                >
                </textarea>
              : <input
                  type={this.props.type}
                  name={this.props.name}
                  id={this.props.name}
                  placeholder={this.props.placeholder}
                  value={this.props.value}
                  onChange={this.handleChange}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                />
          }
          <label htmlFor={this.props.name}>{this.props.label}</label>
        </div>
        {
          (this.props.constraints)
            ? <InputValidator
                constraints={this.props.constraints}
                value={this.props.value}
                blur={this.state.blur}
                focus={this.state.focus}
              />
            : null
        }
      </div>
    )
  }
}

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;

export default FormGroup