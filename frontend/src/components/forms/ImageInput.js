import React from 'react'
import PropTypes from 'prop-types';
import SvgIcon from "../icons/SvgIcon";

const propTypes = {
  onChange: PropTypes.func,
}

const defaultProps = {
  onChange: () => {}
}

class ImageInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.ref = null;

    this.state = {
      image: null,
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.imageUrl !== nextProps.imageUrl) {
      this.setState({image: null});
    }
  }

  getFile() {
    return (this.ref) ? this.ref.files[0] : null;
  }

  handleChange(event) {
    const file = this.getFile();
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = (event) => {
      const result = reader.result;
      this.setState({image: result});
      this.props.onChange(file);
    }
  }

  render() {

    return (
      <div className="form-group">
        <div className="image-file-input">
          <div className="edit-option">
            <SvgIcon name="edit"/>
          </div>
          {
            (this.state.image)
              ? <img src={this.state.image} width={150} height={150} />
              : (this.props.imageUrl)
                ? <img src={this.props.imageUrl} width={150} height={150} />
                : <img src="/images/svg/pokeball.svg" />
          }
          <input
            ref={ref => this.ref = ref}
            type="file"
            name="name"
            id="id"
            accept="image/*"
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

ImageInput.propTypes = propTypes;
ImageInput.defaultProps = defaultProps;

export default ImageInput