import React from 'react'

const SvgIcon = ({name, size = 24, disabled = false, title = ''}) => {
  const path = `/images/svg/${name}.svg`;
  const style = disabled ? {filter: 'grayscale(100%)'} : {};
  return (
    <img
      style={style}
      src={path}
      width={size}
      height={size}
      alt={title}
      title={title}
    />
  )
}

export default SvgIcon