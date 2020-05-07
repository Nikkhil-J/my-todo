import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './pages/About'

let count =5;

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

  //Add todo
  addTodo =(title) => {
    const newTodo = {
      id: count,
      title: title,
      isCompleted: false
    }
    this.setState({
      todos : [...this.state.todos,newTodo]
    });
    count++;
  }
 

  render() {
    return (
      <Router>
        <div className="App">
        <div className="container">
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo}/>
              <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/>
        </div>
        </div>
      </Router>
    )
  }
}

export default App
