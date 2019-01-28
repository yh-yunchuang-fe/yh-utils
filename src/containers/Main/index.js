/**
 * @Author zhangyi
 * @Date 2019/1/17
 **/
import React, { Component } from 'react'
import './index.less'
import { Link } from 'react-router-dom'
import jsBridge from '@lib/jsBridge'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    openJsBridge = ()=> {
        window.location.href = `myyh://yhlife.com/show/web?url=${encodeURIComponent(`${window.location.origin}/index.html#/jsBridge`)}`
    }

    render() {
        return (
            <div className="demo-page">
                <div className="demo-hd">
                    <h1 className="demo-title">yh-utils</h1>
                    <h2 className="demo-subtitle">永辉云创前端公用JS</h2>
                </div>
                <div className="demo-bd">
                    <div className="demo-category">
                        <a href="javascript:;" onClick={this.openJsBridge}>
                            JsBridge
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
