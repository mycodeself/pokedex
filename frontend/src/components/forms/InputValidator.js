import React from 'react'
import {validate} from "../../utils/validations";

const InputValidator = ({value, constraints}) => {
  const validation = validate(value, constraints);
  if(validation.isValid) {
    return null;
  }

  return (
    <div className="form-errors">
      <p>{validation.message}</p>
    </div>
  )
}

export default InputValidator