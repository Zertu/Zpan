import './login.scss'

import React, {Component} from 'react'
import {Redirect, Route} from 'react-router-dom'

import App from '../app/app'
import isLogin from '../../Data/isLogin'

class Login extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            user: '',
            pwd: '',
            isloged:false
        }
    }
    userChange = e => {
        this.setState({user: e.target.value})
    }
    pwdChange = e => {
        this.setState({pwd: e.target.value})
    }
    login = e => {
        isLogin.signin(this.state.user,this.state.pwd,()=>{
        this.setState({isloged:true})
        })
    }
    render(e) {
          const { from } = this.props.location.state || { from: { pathname: '/' } }
        if (this.state.isloged) {
            return  <Redirect to={from}/>
        }
        return (
            <div className="LoginComponent">
                <div>
                    <span>用户名</span>
                    <input value={this.state.user} onChange={this.userChange} type="text"/>
                </div>
                <div>
                    <span>密码</span><input value={this.state.pwd} onChange={this.pwdChange} type="password"/>
                </div>
                <div>
                    <a onClick={this.login}>登录</a>
                </div>
            </div>
        )
    }
}

export default Login