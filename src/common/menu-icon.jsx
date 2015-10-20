import React from 'react'

var styles = {
  height: '90px',
  width: '90px',
  display: 'inline-block',
  textAlign: 'center',
  color: '',
  fontSize: '22px'
}

var iconStyle = {
  fontSize: '42px',
  marginBottom: '12px'
}

class MenuIcon extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: props.active || false
    }
  }

  render() {
    var className = 'fa fa-' + this.props.type
    if (this.state.active) {
      styles.color = '#45c018'
    } else {
      styles.color = '#979797'
    }

    return (
      <div style={styles}>
        <i className={className} style={iconStyle}></i>
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