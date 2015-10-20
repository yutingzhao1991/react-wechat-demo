import React from 'react'

import MenuIcon from './common/menu-icon.jsx'

var barStyle = {
  height: '78px',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  padding: '8px',
  backgroundColor: '#21292b',
  color: 'white'
}

class TopBar extends React.Component {
  render() {
    return (
      <div style={barStyle}>
        <h1>微信</h1>
      </div>
    )
  }
}

export default TopBar