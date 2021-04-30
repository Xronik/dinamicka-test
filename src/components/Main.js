import React, { useState } from 'react'
import Addtodo from './Addtodo'
import Todos from './Todos'
import data from './Todosdata.json'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Main() {

  const [state, setState] = useState(data)

  const deleteTodo = (id) => {
    setState((todos) => {
      const newTodos = [...todos].filter((el) => el.id !== id)
      return newTodos
    })
  }

  const addTodo = (data) => {
    setState((todos) => {
      const id = Math.random()
      const newTodos = [...todos, { id: id, content: data }]
      return newTodos
    })
  }

  return (

    <div className="todo-app container">
      <h1 className='center blue-text'> Todos</h1>
      <Todos todos={state} deleteTodo={deleteTodo} />
      <Addtodo addTodo={addTodo} />

    </div>

  );
}

export default Main;
