import '../css/main.css'

import {Link, Redirect, Route, BrowserRouter as Router, withRouter} from 'react-router-dom'

import App from './components/app/app'
import Login from './components/login/login'
import PrivateRoute from './Router/PrivateRoute'
import React from 'react'
import ReactDOM from 'react-dom'
import {backgroundCircle} from './chess/chess'

let defaultchess = new backgroundCircle(document.getElementsByTagName('canvas')[0])
setInterval(function () {
  defaultchess.draw()
}, 10)

const render = (Component) => {
  ReactDOM.render(Component, document.getElementById('root'))
}

const Root = () => (
  <Router>
    <div>
      <PrivateRoute path="/"  component={App}/>
      <Route path="/login" component={Login}/>
    </div>
  </Router>
)



render(<Root/>)