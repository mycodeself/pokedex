import React from 'react'

const SvgIcon = ({name, size = 24, disabled = false}) => {
  const path = `../../../assets/images/svg/${name}.svg`;
  const style = disabled ? {filter: 'grayscale(100%)'} : {};
  return (
    <img
      style={style}
      src={path}
      width={size}
      height={size}
    />
  )
}

export default SvgIcon