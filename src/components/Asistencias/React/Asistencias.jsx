import React, { Component } from 'react'
import UnaAsistencia from '../React/UnaAsistencia';

export default class Asistencias extends Component {
    
    mostrarAsistencias = () =>{

        const asistencia = this.props.asistencias;  
        if (asistencia.length === 0) return null;
        console.log(asistencia);

        return(
           <React.Fragment>
                 <div>
                 
                     <div className="row">
                     {asistencia.map(asis => (
                          
                          
                          <UnaAsistencia
                            key ={asis.id}
                            asistencia={asis}
                            DeleteAsistencia={this.props.DeleteAsistencia}     
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
