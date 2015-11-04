import React from 'react'

import styles from './menu-icon.css'

class MenuIcon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: props.active || false
    }
  }

  render() {
    var className = styles.icon + ' fa fa-' + this.props.type
    if (this.state.active) {
      className += ' ' + styles.active
    }
    return (
      <div className={ styles.main }>
        <i className={ className }></i>
        <div>{this.props.name}</div>
      </div>
    )
  }

  toggleActive(active) {
    if (active == null) {
      this.state.active = !this.state.active
    } else {
      this.state.active = active
    }
  }
}

export default MenuIcon