import React from 'react'

const SvgIcon = ({name, size = 24}) => {
  const path = `../../../assets/images/svg/${name}.svg`;
  return (
    <img
      src={path}
      width={size}
      height={size}
    />
  )
}

export default SvgIcon