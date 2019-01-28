/**
 * @Author zhangyi
 * @Date 2019/1/18
 **/
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import JsBridgeHome from "./Home";
import jsBridge from "@lib/jsBridge";
// import User from './User'
// import Location from './Location'
// import AppInfo from './AppInfo'
// import Share from './Share'
// import Track from './Track'
import routes from './routes'


export default class JsBridgeMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jsBridgeReady: true
        }
    }

    componentDidMount() {
        jsBridge.ready((bridge) => {
            this.setState({
                jsBridgeReady: true
            })
        })
    }

    render() {
        let node = routes.map((item, index) => {
            return (
                <Route path={item.path} component={item.component} key={index}/>
            )
        })

        if (this.state.jsBridgeReady) {
            return (
                <Switch>
                    <Route exact path="/jsBridge" component={JsBridgeHome}/>
                    { node }
                </Switch>
            )
        } else {
            return null
        }
    }
}
