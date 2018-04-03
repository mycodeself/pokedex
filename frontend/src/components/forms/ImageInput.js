import React from 'react'


const ImageInput = () => {
  return (
    <div className="form-group">
      <div className="image-file-input">
        <div className="edit-option">
          <em className="icon icon-edit"></em>
        </div>
        <img src="../../../assets/images/svg/pokeball.svg" />
        <input type="file" name="name" id="id" accept="image/*" />
      </div>
    </div>
  )
}

export default ImageInput