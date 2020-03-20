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
        console.log("esta es una fucking prubeas",task);

        const tarieta = this.props.tasks.map((task, i) => {
            return (
              <div className="col-md-4" key={i}>
                <div className="card mt-4">
                  <div className="card-title text-center">
                    <h3>{task.title}</h3>
                    <span className="badge badge-pill badge-danger ml-2">
                      {task.priority}
                    </span>
                  </div>
                  <div className="card-body">
                    {task.description}
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-danger"
                      >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )
          });
        
        return <div>
            {tarieta}

        

        </div> 

    }
}




export default Task;