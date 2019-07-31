import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {remove, markAsDone} from './todoActions'

import IconButton from '../template/iconButton';
import If from '../template/if'

class TodoList extends Component {

  renderRows(){
    const list = this.props.list || []
    const { markAsDone, remove } = this.props

    return list.map(todo => (
      <tr key={todo._id}>
          <td className={todo.done ? 'taskDone' : ''}>{todo.description}</td>
          <td>
            <IconButton icon="check" style="success" onClick={() => markAsDone(todo, true)} hide={todo.done}></IconButton>
            <IconButton icon="undo" style="warning" onClick={() => markAsDone(todo, false)} hide={!todo.done}></IconButton>
            <IconButton icon="trash-o" style="danger" onClick={() => remove(todo._id)}></IconButton>
          </td>
      </tr>
    ))
  }

  render(){
    return (
      <div>
        <If condition={this.props.list.length > 0}>

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
        </If>

        <If condition={this.props.list.length == 0}>
          <label>Não existem tarefas cadastradas</label>
        </If>
      </div>
    )
  }
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({remove, markAsDone}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (TodoList)