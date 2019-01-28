/**
 * @Author zhangyi
 * @Date 2019/1/18
 **/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Actions from '@components/Actions'
import jsBridge from '@lib/jsBridge'
import DemoName from "@components/DemoName";

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: ''
        }
    }

    getUserInfo = () => {
        this.setState({
            json: ''
        })
        jsBridge.getUserInfo((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    login = () => {
        this.setState({
            json: ''
        })
        jsBridge.login((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    refreshToken = () => {
        this.setState({
            json: ''
        })
        jsBridge.refreshToken((json) => {
            this.setState({
                json: JSON.stringify(json)
            })
        })
    }

    actions = [{
        name: 'getUserInfo 获取用户信息',
        onClick: this.getUserInfo
    },{
        name: 'login 调起App登录',
        onClick: this.login
    },{
        name: 'refreshToken 刷新token',
        onClick: this.refreshToken
    }]

    render() {
        const { json } = this.state

        return (
            <div className="demo-page">
                <DemoName
                    name="User"
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
