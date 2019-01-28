/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import jsBridge from "@lib/jsBridge";
import DemoName from "@components/DemoName";
import Actions from "@components/Actions";

export default class Network extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    getEnv = () => {
        jsBridge.getEnv((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    getNetwork = () => {
        jsBridge.getNetwork((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'getEnv 获取当前环境',
        onClick: this.getEnv
    },{
        name: 'getNetwork 获取网络类型',
        onClick: this.getNetwork
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="Network"
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
