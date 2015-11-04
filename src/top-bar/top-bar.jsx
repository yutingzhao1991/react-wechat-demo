import React from 'react'

import MenuIcon from '../common/menu-icon/menu-icon.jsx'

import styles from './top-bar.css'

class TopBar extends React.Component {
  render() {
    return (
      <div className={ styles.bar }>
        <h1>微信</h1>
      </div>
    )
  }
}

export default TopBar