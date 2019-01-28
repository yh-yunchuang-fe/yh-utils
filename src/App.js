/**
 * @Author zhangyi
 * @Date 2019/1/17
 **/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import {hot} from 'react-hot-loader'
import './assets/css/app.less'
import { Switch, Route } from 'react-router-dom'
import Main from './containers/Main'
import JsBridge from './containers/jsBridge/'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="app-container">
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/jsBridge" component={JsBridge}/>
                </Switch>
            </section>
        )
    }
}

export default hot(module)(withRouter(App))
