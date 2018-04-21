import React from 'react'
import Scroll from 'react-scroll'
import SvgIcon from "../icons/SvgIcon";
import Button from "./Button";

const VISIBLE_THRESHOLD_Y = 200;

class ArrowUpFloatingButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.scroll = Scroll.animateScroll;

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
    this.scroll.scrollToTop()
  }

  render() {
    if(!this.state.isVisible) return null;

    return (
      <div className="scroll-up-arrow">
        <Button onClick={this.handleClick}>
          <SvgIcon title="Scroll top" size={42} name="up-arrow" />
        </Button>
      </div>
    )
  }
}

export default ArrowUpFloatingButton