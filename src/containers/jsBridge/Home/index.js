/**
 * @Author zhangyi
 * @Date 2019/1/17
 **/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import routes from '../routes'

export default class JsBridgeHome extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let listDom = routes.map((item, index) => {
            return (
                <div className="demo-category" key={index}>
                    <Link to={item.path}>
                        { item.name }
                    </Link>
                </div>
            )
        })

        return (
            <div className="demo-page">
                <div className="demo-hd">
                    <h1 className="demo-title">JsBridge</h1>
                    <h2 className="demo-subtitle">通过 Bridge 调用永辉生活App原生功能</h2>
                </div>
                <div className="demo-bd">
                    { listDom }
                </div>
            </div>
        )
    }
}
