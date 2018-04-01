import React from 'react'

const FavouriteIcon = ({size = 24, isActive = false}) => {
  const style = isActive ? {} : {filter: 'grayscale(100%)'}
  return (
    <img
      src="../../../assets/images/svg/009-star.svg"
      width={size}
      height={size}
      style={style}
    />
  )
}


export default FavouriteIcon