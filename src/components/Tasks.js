import React, {Component} from 'react';



import PropTypes from 'prop-types'

//css
import '../App.css'


class Tasks extends Component{



  

    render() {


        
        const task = this.props.tasks.map((task,i) => {
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
    
        // RETURN THE COMPONENT
        return (
          <div className="row">
              {task}
           
          </div>
        );
      }
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}


export default Tasks;