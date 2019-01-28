/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import DemoName from "@components/DemoName";
import Actions from "@components/Actions";
import jsBridge from "@lib/jsBridge";

export default class AppInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    getAppInfo = () => {
        jsBridge.getAppInfo((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'getAppInfo 获取App信息',
        onClick: this.getAppInfo
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="AppInfo"
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
