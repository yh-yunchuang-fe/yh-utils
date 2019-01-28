/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import jsBridge from "@lib/jsBridge";
import DemoName from "@components/DemoName";
import Actions from "@components/Actions";

export default class Pay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    pay = () => {
        jsBridge.pay({
            orderId: 10299
        }, (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'pay 支付',
        onClick: this.pay
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="Pay"
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
