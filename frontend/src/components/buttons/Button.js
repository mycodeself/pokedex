import React from 'react'

const Button = ({children, type, onClick}) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button