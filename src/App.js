import React, { Component } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

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

  AddTodos = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos : todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text">Todo List</h1>
        <Todo todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
        <AddTodo addtodo ={this.AddTodos}/>
      </div>
    );
  }
}

export default App;
