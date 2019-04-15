import React, { Component } from 'react';
import Todo from './Todo';

class App extends Component {
  state = {
    todos : [
      {id: 1, content: 'buy milk'},
      {id: 2, content: 'Go to Gym'}
    ]
  }

  deleteTodo = (id) => {
    const todoListing = this.state.todos.filter(singletodo => {
      return singletodo.id!== id
    })
    this.setState({
      todos: todoListing
    })
  }
  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo List</h1>
        <Todo todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
