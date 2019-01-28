/**
 * @Author zhangyi
 * @Date 2019/1/21
 **/
import React, { Component } from 'react'
import jsBridge from "@lib/jsBridge";
import DemoName from "@components/DemoName";
import Actions from "@components/Actions";

export default class NativeStore extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    setNativeStore = () => {
        jsBridge.setNativeStore({
            key: 'nativeStoreName',
            value: 'nativeStoreValue'
        }, (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    getNativeStore = () => {
        jsBridge.getNativeStore('nativeStoreName', (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    removeNativeStore = () => {
        jsBridge.removeNativeStore('nativeStoreName', (json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'setNativeStore 存储native缓存',
        onClick: this.setNativeStore
    },{
        name: 'getNativeStore 获取native缓存',
        onClick: this.getNativeStore
    },{
        name: 'removeNativeStore 删除native缓存',
        onClick: this.removeNativeStore
    }]

    render() {
        const { json } = this.state
        return (
            <div className="demo-page">
                <DemoName
                    name="NativeStore"
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
