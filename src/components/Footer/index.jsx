import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Footer extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        checkAllTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired
    }

    handleCheckAll = (event) => {
        const { checkAllTodo } = this.props
        checkAllTodo(event.target.checked)
    }

    handleClearAllDone = () => {
        const { clearAllDone } = this.props
        clearAllDone()
    }

    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, todo) => { return pre + (todo.done ? 1 : 0) }, 0)
        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={total !== 0 && doneCount === total} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
