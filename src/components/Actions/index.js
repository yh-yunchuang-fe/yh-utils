/**
 * @Author zhangyi
 * @Date 2019/1/18
 **/
import React, { Component } from 'react'
import './index.less'

export default class Actions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            activeIndex: -1
        }
    }

    onChange = (index, onClick) => {
        this.setState({
            activeIndex: index
        })
        onClick && onClick()
    }

    render() {
        const { actions } = this.props
        const { activeIndex } = this.state
        const node = actions.map((item, idx)=>{
            const cls = activeIndex === idx ? 'item-active' : ''
            return (
                <li className="action-item" key={idx}>
                    <a
                        onClick={this.onChange.bind(this, idx, item.onClick)}
                        className={cls}>
                        {item.name}
                    </a>
                </li>
            )
        })

        return (
            <ul className="action-list">
                { node }
            </ul>
        )
    }
}
