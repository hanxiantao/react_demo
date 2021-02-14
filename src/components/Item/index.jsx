import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouse: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleCheck = (id) => {
        const { updateTodo } = this.props
        return (event) => {
            updateTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        const { deleteTodo } = this.props
        if (window.confirm('确定删除吗？')) {
            deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state

        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
