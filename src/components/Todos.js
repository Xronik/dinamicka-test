import React from 'react'

const Todos = ({ todos, deleteTodo }) => {

  return (
    <div className='todos collection'>
      {
        todos.map((el) =>
          <div className='collection-item row' key={el.id} >
            <span className="col s10">{el.content}</span>
            <div className='col s1'>
              <a className="  btn-floating btn-medium waves-effect waves-light green end"><i className="material-icons">add</i></a>
            </div>
            <div className='col s1'>
              <a className="  btn-floating btn-medium waves-effect waves-light red end" onClick={() => deleteTodo(el.id)}><i className="material-icons">delete</i></a>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Todos

