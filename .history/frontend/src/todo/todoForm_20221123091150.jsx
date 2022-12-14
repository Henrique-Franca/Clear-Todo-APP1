import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component{
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }
    keyHandler(e){
        if (e.key === 'Enter') {
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
        } else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

    render(){
        return (
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa'
                        onChange={props.changeDescription}
                        onKeyUp={keyHandler}
                        value={props.description}></input>
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus'
                        onClick={props.handleAdd}></IconButton>
                    <IconButton style='info' icon='search'
                        onClick={props.handleSearch}></IconButton>
                    <IconButton style='default' icon='close'
                        onClick={props.handleClear}></IconButton>
                </Grid>
            </div>
        )
    }

}

const TodoForm = props => {
    const keyHandler = (e) => {
      
    }

    return (
        
    )
}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch => 
    bindActionCreators({changeDescription, search}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)