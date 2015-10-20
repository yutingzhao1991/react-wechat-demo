import React from 'react'

var navBarStyle = {
  height: '80px',
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  width: '100%',
  lineHeight: '80px',
  borderTop: '1px solid steelblue',
  padding: '5px'
}

class NavBar extends React.Component {
  render() {
    return (
      <div style={navBarStyle}>
        <a href="#/"> chats </a>
        <a href="#/users"> users </a>
      </div>
    )
  }
}

export default NavBar