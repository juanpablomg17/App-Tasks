import React, { Component } from 'react'

export default class FormAsistencia extends Component {
   
    busquedaref = React.createRef();
   
    ObtenerDatos = e => {


          // tomamos el valor del input
          const busqueda = this.busquedaref.current.value;
        
          // lo enviamos al componente principal
          this.props.termino(busqueda);
    }
   
   
   
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="card-title">
                            <h3>AGREGAR ASISTENCIA</h3>
                        </div>
                    </div>
                    <form onSubmit={this.onSubmit} className="card-body">
                        <div className="form-group">
                            <input
                                type="text"
                                name="title"
                                className="form-control"
                                
                                value=""
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="responsible"
                                className="form-control"
                               
                                placeholder="Responsible"
                            />
                        </div>
                        <div className="form-group">
                           <textarea name="descripcion" id="descripcion" cols="30" rows="10" 
                           placeholder="Description">

                           </textarea>
                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                              
                            >
                                <option>Positiva</option>
                                <option>Negativa</option>
                                
                            </select>
                        </div>
                        <button id="boton" type="submit" className="btn btn-primary" >
                            Save
          </button>
                    </form>
                </div>

            </div>
        )
    }
}
