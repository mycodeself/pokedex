import React from 'react'

const FormGroup = ({type, name, label, placeholder}) => {
  return (
    <div className="form-group">
      {
        (type === "textarea")
          ? <textarea placeholder={placeholder} name={name} id={name}></textarea>
          : <input type={type} name={name} id={name} placeholder={placeholder}/>
      }
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default FormGroup