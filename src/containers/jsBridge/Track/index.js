/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import jsBridge from "@lib/jsBridge";
import DemoName from "@components/DemoName";
import Actions from "@components/Actions";

export default class Track extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    track = () => {
        jsBridge.track('track_name', {
            id: '10001',
        }, (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'track 添加埋点',
        onClick: this.track
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="Track"
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
