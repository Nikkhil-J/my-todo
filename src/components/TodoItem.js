import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background : '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid ',
            textDecoration: this.props.todo.isCompleted ? 'line-through': 'none'
        }
    }
    render() {
        const { id , title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
                {title}</p>
            </div>
        )
    }
}

export default TodoItem
