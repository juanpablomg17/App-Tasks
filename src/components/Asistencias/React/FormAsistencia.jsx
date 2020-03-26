import React, { Component } from 'react'

export default class FormAsistencia extends Component {


    state={
        title:'',
        responsible:'',
        descripcion:'',
        priority:''
        
    }
   
    handleInputChange = (e) => {
        const {value, name} = e.target;
        
        this.setState({
          [name]: value
        });
      }


      // enviar el formulario
    onSubmit = e =>{
        e.preventDefault();
        this.props.addAsistencia(this.state.title, this.state.responsible, this.state.description, this.state.priority);
        
    }

    // guardar los cambios de los inputs
    onChange = e =>{
        
        this.setState({
            [e.target.name]: e.target.value
        })
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
                                onChange={this.handleInputChange}
                                value={this.state.title}
                                placeholder="Title"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                name="responsible"
                                className="form-control"
                                value={this.state.responsible}
                                onChange={this.handleInputChange}
                               
                                placeholder="Responsible"
                            />
                        </div>
                        <div className="form-group">
                           <textarea name="descripcion" 
                           id="descripcion" cols="40" rows="10" 
                           placeholder="Description"
                           onChange={this.handleInputChange}
                           value={this.state.descripcion}>

                           </textarea>
                        </div>
                        <div className="form-group">
                            <select
                                name="priority"
                                className="form-control"
                                value={this.state.priority}
                                onChange={this.handleInputChange}
                              
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
