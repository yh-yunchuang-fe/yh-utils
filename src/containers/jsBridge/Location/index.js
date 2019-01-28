/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import Actions from "@components/Actions";
import DemoName from "@components/DemoName";
import jsBridge from "@lib/jsBridge";


export default class Location extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    getLocation = () => {
        jsBridge.getLocation((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'getLocation 获取定位信息',
        onClick: this.getLocation
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="Location"
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
