import React from 'react'
import IconButton from '../template/iconButton';

export default props => {

  const renderRows = () => {
    const list = props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
          <td className={todo.done ? 'taskDone' : ''}>{todo.description}</td>
          <td>
            <IconButton icon="check" style="success" onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
            <IconButton icon="undo" style="warning" onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
            <IconButton icon="trash-o" style="danger" onClick={() => props.handleDelete(todo)}></IconButton>
          </td>
      </tr>
    ))
  }

  return (
    <table className="table">

      <thead>
        <tr>
          <th>Description</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>

      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )
}
