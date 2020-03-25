import React from 'react'
import '../Css/Asistencia.css';

const Asistencia = (props) => {

    const {id,title, responsible,description,priority} = props.asistencia;
    return(
        <div className="col-md-6">
           <div className="card" id="tajeta">
            
            <div className="card mt-4">
              <div className="card-title text-center mb-5">
                <h3>{title}</h3>
                <span className="badge badge-pill badge-danger ml-2 mb-5">
                  {priority}
                </span>
              </div>
              <div className="card-body text-center">
                <div>{description}</div> 
                <div>{responsible}</div>
                
              </div>
              <div className="card-footer">
                <button id="boton" 
                  className="btn btn-danger"
                  >
                  Delete
                </button>
              </div>
            </div>
          
      </div>

        </div>
       
    )
}


export default Asistencia;