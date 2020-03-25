import React, { Component } from 'react'

import tasks from '../sample/tasks.json';

export default class prueba extends Component {

    state = {
        tasks : tasks
    }




    render() {

        const task = this.state.tasks.map((task,i) => {
            return(

                <div className="col-md-4" key={i}>
              <div className="card mt-4">
                <div className="card-title text-center">
                  <h3>{task.title}</h3>
                  <span className="badge badge-pill badge-danger ml-2">
                    {task.priority}
                  </span>
                </div>
                <div className="card-body text-center">
                  <div>{task.description}</div> 
                  <div>{task.responsible}</div>
                  
                </div>
                <div className="card-footer">
                  <button id="boton" onClick={this.props.deleteTask.bind(this,task.id)}
                    className="btn btn-danger"
                    >
                    Delete
                  </button>
                </div>
              </div>
            </div>
            )
        });    



        return (
            <div>
                {task}
            </div>
        )
    }
}
