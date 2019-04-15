import React, { Component } from 'react';

const Todo = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
        <span>{todo.content}</span>
        <button onClick={()=> {deleteTodo(todo.id)}}> Delete </button>
        </div>
      )  
    })  
  ) : (
    <p className="center">You do not have any todo</p>
  )
  return (  
    <div className="todos collection">
      {todoList}   
    </div>
  );
}
 
export default Todo;