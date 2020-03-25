import React, { Component } from 'react'

import Asistencia from './Asistencia'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Header extends Component {

    busquedaref = React.createRef();

    obtenerDatos = (e) => { 


        e.preventDefault();

        // tomamos el valor del input
        const busqueda = this.busquedaref.current.value;
        
        // lo enviamos al componente principal
        this.props.termino(busqueda);
    }



    render() {
        return (
            <div className="container">
                <form onSubmit={this.obtenerDatos}>
                <div>
                    
                    <div className="row">
                        <div className="form-group col-md-8">
                            <input ref={this.busquedaref} type="text" className="form-control form-control-lg"
                            placeholder="Digite el nombre de la asistencia que deseas buscar"/>

                        </div>
                        <div className="from-group col-md-4">
                            <input type="submit"  className="form-control  btn btn-lg btn-danger btn-block"
                            value="Buscar"/>
                        </div>

                    </div>
                    
                        
                </div>
                
            </form>
               
            </div>
            

            
        )
    }
}
