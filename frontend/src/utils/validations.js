export function validate(value, constraints) {
  if(constraints.hasOwnProperty('notEmpty') && constraints.notEmpty === true) {
    if(!validateNotEmpty(value)) {
      return {
        isValid: false,
        message: "The value should not be empty!"
      }
    }
  }

  if(constraints.hasOwnProperty('length')) {
    if(!validateLength(value, constraints.length)) {
      let message = '';
      if(constraints.length.hasOwnProperty('min') && constraints.length.hasOwnProperty('max')) {
        message = `The value should have ${constraints.length.min} min and ${constraints.length.max} max characters`
      } else if(constraints.length.hasOwnProperty('min')) {
        message = `The value must have at least ${constraints.length.min} characters`
      } else {
        message = `The value mus have a maximum ${constraints.length.max} characters`
      }
      return {
        isValid: false,
        message: message
      }
    }
  }

  return {
    isValid: true,
  }
}

function validateLength(value, constraint) {
  if(constraint.hasOwnProperty('min')) {
    if(value.length < constraint.min) {
      return false;
    }
  }

  if(constraint.hasOwnProperty('max')) {
    if(value.length > constraint.max) {
      return false;
    }
  }

  return true;
}

function validateNotEmpty(value) {
  return (value && 0 < value.length);
}