import React from 'react'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <nav>
        <h1>Pokedex</h1>
        <input type="text" name="search" placeholder="Type to search..." />
      </nav>
    )
  }
}

export default NavBar