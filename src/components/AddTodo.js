import React, { Component } from 'react'

export class AddTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: ''
        }
    }

    handleTitle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title:''})
    }
    
    render() {
        return (
            <form
            onSubmit={this.handleSubmit} 
            style={{display: 'flex'}}>

                <input 
                style={{flex:10, padding: '5px'}} type="text" 
                name="title" 
                placeholder="Add Todo.."
                value={this.state.title}
                onChange={this.handleTitle}
                />

                <input 
                type="submit"
                value="Add"
                className="btn"
                style={{flex:1}}/>
            </form>
        )
    }
}

export default AddTodo
