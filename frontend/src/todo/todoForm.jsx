import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { changeDescription, search, add, clearDescription } from './todoActions'

class TodoForm extends Component{
  constructor(props){
    super(props)
    this.handleKeys = this.handleKeys.bind(this)
  }

  componentWillMount(){
    this.props.search()
  }

  handleKeys(e){
    const {add, search, description, clearDescription} = this.props
    if(e.key === 'Enter'){
      e.shiftKey ? search() 
      : add(description)
    } else if(e.key === 'Escape'){
      clearDescription()
    }
  }
  
  render(){
    const {add, changeDescription, search, clearDescription, description} = this.props
    return(
      <div role='form' className='todoForm'>
        <Grid cols="12 9 10">
          <input id='description' className='form-control'
            placeholder='Adicione uma tarefa' 
            value={description}
            onChange={changeDescription}
            onKeyUp={this.handleKeys}>  
          </input>
        </Grid>
    
        <Grid cols="12 3 2">
          <IconButton style="primary" icon="plus"
            onClick={() => add(description)}></IconButton>
          <IconButton style="info" icon="search"
            onClick={search}></IconButton>
          <IconButton style="default" icon="close"
            onClick={clearDescription}></IconButton>
        </Grid>
      </div>
    )
  }

}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clearDescription }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps) (TodoForm)
