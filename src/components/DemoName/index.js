/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class DemoName extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { name } = this.props
        return (
            <div className="demo-name">
                <Link to="/" className="demo-name-home">
                    Home
                </Link>
                { name }
            </div>
        )
    }
}
