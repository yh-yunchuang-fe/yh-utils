/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Actions from "@components/Actions";
import jsBridge from "@lib/jsBridge";
import DemoName from "@components/DemoName";

export default class Share extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    share = () => {
        jsBridge.share({
            title: '分享下载页',
            desc: '这是一个下载页',
            icon: '',
            url: 'https://activity.yonghuivip.com/h5/yh-door/index.html'
        }, (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    setShareConfig = () => {
        jsBridge.setShareConfig({
            title: '设置分享下载页',
            desc: '这是一个下载页',
            icon: '',
            url: 'https://activity.yonghuivip.com/h5/yh-door/index.html'
        }, (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'share 分享',
        onClick: this.share
    },{
        name: 'setShareConfig 设置分享内容',
        onClick: this.setShareConfig
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="Share"
                />
                <div className="demo-bd">
                    <Actions
                        actions={this.actions}
                    />
                    <div className="demo-json-content">
                        { json }
                    </div>
                </div>
            </div>
        )
    }
}
