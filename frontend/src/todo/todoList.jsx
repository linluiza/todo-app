import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {remove, markAsDone} from './todoActions'

import IconButton from '../template/iconButton';

class TodoList extends Component {

  renderRows(){
    const list = this.props.list || []

    return list.map(todo => (
      <tr key={todo._id}>
          <td className={todo.done ? 'taskDone' : ''}>{todo.description}</td>
          <td>
            <IconButton icon="check" style="success" onClick={() => this.props.markAsDone(todo)} hide={todo.done}></IconButton>
            <IconButton icon="undo" style="warning" onClick={() => this.props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
            <IconButton icon="trash-o" style="danger" onClick={() => this.props.remove(todo._id)}></IconButton>
          </td>
      </tr>
    ))
  }

  render(){
    return (
      <table className="table">
  
        <thead>
          <tr>
            <th>Description</th>
            <th className="tableActions">Ações</th>
          </tr>
        </thead>
  
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({remove, markAsDone}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (TodoList)