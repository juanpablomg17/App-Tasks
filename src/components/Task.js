import React, {Component} from 'react'

import './Task.css'
import PropTypes from 'prop-types'
import Tasks from './Tasks'

class Task extends Component{

    StyleCompletd(){
        return{
            fontSize : '20px',
            color : this.props.task.Done ? 'gray' : 'black',
            textDecoration: 'none',
            

        }
    }

    Btnx(){
        return{
            background: 'red',
            borderRadius: '50%',
            color: 'white',
            padding: '10px 15px',
            cursor: 'pointer'
        }
    }
    TareaHecha(){
        return{

            
            textDecoration: 'line-through'
        }
    }


    render(){

        const {task} = this.props;
        return <div style={this.StyleCompletd()}>
            {task.title}-
            {task.Description} - 
            {task.Done} 
            {task.id}

        <input type="checkbox" onChange={this.props.checkDone.bind(this,task.id)} style={this.TareaHecha()}/>
        <button onClick={this.props.deleteTask.bind(this,task.id)}  style={this.Btnx()}>
            x
        </button>

        </div> 

    }
}




export default Task;