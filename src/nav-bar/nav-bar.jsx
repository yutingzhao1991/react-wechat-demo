import React from 'react'

import MenuIcon from '../common/menu-icon/menu-icon.jsx'

import styles from './nav-bar.css'

class NavBar extends React.Component {
  render() {
    return (
      <div className={ styles.bar }>
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