import React, { Component } from 'react'
import './App.css'
import Todos from './components/Todos'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: [
         {
           id:1,
           title: 'First Todo',
           isCompleted: false
         },
         {
          id:2,
          title: 'Second Todo',
          isCompleted: false
        },
        {
          id:3,
          title: 'Third Todo',
          isCompleted: true
        },
        {
          id:4,
          title: 'Fourth Todo',
          isCompleted: false
        }
       ]
    }
  }

  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.isCompleted = !todo.isCompleted
      }
      return todo
    })})
  }

  //delete Todo
  deleteTodo =(id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
 

  render() {
    return (
      <div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App
