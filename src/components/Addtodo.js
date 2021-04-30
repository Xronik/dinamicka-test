import React, { useState } from 'react'

function Addtodo({ addTodo }) {

  const [content, setContent] = useState('')

  const handleChange = (e) => {
    setContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(content)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add new:</label>
        <input type='text' onChange={(e) => handleChange(e)}></input>
        <button className="col s5 btn waves-effect waves-light" type="submit" name="action">Add
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  )
}

export default Addtodo
