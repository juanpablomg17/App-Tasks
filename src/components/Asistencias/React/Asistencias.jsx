import React, { Component } from 'react'
import UnaAsistencia from '../React/UnaAsistencia';

export default class Asistencias extends Component {
    
    mostrarAsistencias = () =>{

        const asistencia = this.props.asistencias;  
        if (asistencia.length === 0) return null;
        console.log(asistencia);

        return(
           <React.Fragment>
               <div className="row">
               <div className="col-md-6 p-5 ">
                    
                    {asistencia.map(asis => (
                          
                          
                          <UnaAsistencia
                            key ={asis.id}
                            asistencia={asis}     
                          />
                    ))

                    }
                    
                  
               </div>

               </div>
              

           </React.Fragment>
        )
    }
    
    render() {
        
       

        return (
                <React.Fragment>
                    {this.mostrarAsistencias()}
                </React.Fragment>
              
            
        );
    }
}
