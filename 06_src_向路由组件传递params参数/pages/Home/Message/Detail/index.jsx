import React, { Component } from 'react'

const detailData = [
    { id: '01', content: '消息1详情' },
    { id: '02', content: '消息2详情' },
    { id: '03', content: '消息3详情' }
]
export default class Detail extends Component {
    render() {
        //接收params参数
        const { id, title } = this.props.match.params
        const findResult = detailData.find((detailObj) => {
            return detailObj.id === id
        })

        return (
            <ul>
                <li>ID：{id}</li>
                <li>TITLE：{title}</li>
                <li>CONTENT：{findResult.content}</li>
            </ul>
        )
    }
}
