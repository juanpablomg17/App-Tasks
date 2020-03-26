
import '../Css/Asistencia.css';


import React, { Component } from 'react'

export default class UnaAsistencia extends Component {


  Asistencia = (props) => {
    const { id, title, responsible, description, priority } = this.props.asistencia;
    return(
      <div className="col-md-12">
           
         
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
                 onClick={this.props.DeleteAsistencia.bind(this,id)}>
                 Delete
                 </button>
             </div>
           </div>
         </div>
         </div>
      
     


  );
  }

  render() {

   
   
    return (

          
                <div >
                      {this.Asistencia()}
                </div>
                
              

         



    )
  }
}
