import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'

import isLogin from '../Data/isLogin'

class PrivateRoute extends Component {
        constructor(prop) {
            super(prop)
        }
        render() {
            return (
                <Route
                    path={this.props.path}
                    render={props => {
                    return isLogin.islogin
                        ? React.createElement(this.props.component, props)
                        : (<Redirect                       
                            to={{
                            pathname: '/login',
                            state: {
                                from: props.location
                            }                            
                        }}/>)
                }}></Route>
            )
        }
    }

    export default PrivateRoute