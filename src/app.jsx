import React from 'react'
import ReactDom from 'react-dom'
import { Router, Route, Link } from 'react-router'

import NavBar from './nav-bar.jsx'
import TopBar from './top-bar.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <TopBar />
        <Playgroud />
        <NavBar/>
      </div>
    )
  }
}

class Chats extends React.Component {
  render() {
    return <p>chats</p>
  }
}

class Users extends React.Component {
  render() {
    return <p>user</p>
  }
}

class Playgroud extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Chats}>
        </Route>
        <Route path="/users" component={Users}>
        </Route>
      </Router>
    )
  }
}

ReactDom.render((
  <App />
), document.getElementById('container'))