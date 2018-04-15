import React from 'react'
import SvgIcon from "../icons/SvgIcon";
import Button from "./Button";

const VISIBLE_THRESHOLD_Y = 50;

class ArrowUpFloatingButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      isVisible: false,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  handleScroll(event) {
    if(window.scrollY > VISIBLE_THRESHOLD_Y) {
      this.setState({isVisible: true})
    } else {
      this.setState({isVisible: false})
    }
  }

  handleClick() {
    window.scrollTo(0, 0);
  }

  render() {
    if(!this.state.isVisible) return null;

    return (
      <div className="scroll-up-arrow">
        <Button onClick={this.handleClick}>
          <SvgIcon size={42} name="up-arrow" />
        </Button>
      </div>
    )
  }
}

export default ArrowUpFloatingButton