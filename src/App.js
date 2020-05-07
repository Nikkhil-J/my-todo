import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'
import About from './pages/About'
import Axios from 'axios';

let count =5;

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: []
    }
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=15')
    .then(res => this.setState({todos:res.data}))
  }


  //Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
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
      completed: false
    }
    this.setState({
      todos : [newTodo,...this.state.todos]
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
