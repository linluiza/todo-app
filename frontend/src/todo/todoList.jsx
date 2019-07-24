import React from 'react'
import IconButton from '../template/iconButton';

export default props => {

  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
          <td>{todo.description}</td>
          <td>
            <IconButton icon="trash-o" style="danger" onClick={() => props.handleDelete(todo)}></IconButton>
          </td>
      </tr>
    ))
  }

  return (
    <table className="table">

      <thead>
        <tr>
          <td>Description</td>
          <td>Ações</td>
        </tr>
      </thead>

      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
