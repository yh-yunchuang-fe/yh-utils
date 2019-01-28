/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import jsBridge from "@lib/jsBridge";
import DemoName from "@components/DemoName";
import Actions from "@components/Actions";

export default class WebPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    openWebPage = () => {
        jsBridge.openWebPage('https://www.baidu.com', (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    closeWebPage = () => {
        jsBridge.closeWebPage((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'openWebPage 打开一个新的webView页面',
        onClick: this.openWebPage
    }, {
        name: 'closeWebPage 关闭当前webView页面',
        onClick: this.closeWebPage
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="WebPage"
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

