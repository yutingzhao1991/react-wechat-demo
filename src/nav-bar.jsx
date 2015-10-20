import React from 'react'

import MenuIcon from './common/menu-icon.jsx'

var navBarStyle = {
  height: '90px',
  position: 'fixed',
  bottom: '0px',
  left: '0px',
  width: '100%',
  borderTop: '1px solid #d4d4d4',
  padding: '8px',
  backgroundColor: '#fcfcfc'
}

class NavBar extends React.Component {
  render() {
    return (
      <div style={navBarStyle}>
        <a href="#/">
          <MenuIcon active name="微信" type="comment"/>
        </a>
        <a href="#/users">
          <MenuIcon name="通讯录" type="user" />
        </a>
      </div>
    )
  }
}

export default NavBar