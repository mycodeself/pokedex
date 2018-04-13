import React from 'react'

const Button = ({children, type, onClick, className}) => {
  return (
    <button className={`button ${className}`} type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button