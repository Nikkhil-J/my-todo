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
                {title}
                <button onClick={this.props.deleteTodo.bind(this,id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    color: '#fff',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right',
    borderRadius: '50%',
    background: 'red',
    border: 'none'
}

export default TodoItem
