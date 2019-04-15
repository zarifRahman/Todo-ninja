import React, { Component } from 'react';

const Todo = ({todos, deleteTodo}) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
        <span  onClick={()=> {deleteTodo(todo.id)}}>{todo.content}</span>
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