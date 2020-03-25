import React, { Component } from 'react'
import Tasks from './Tasks';


import Prueba from './prueba';


export default class ConsultTask extends Component {
    
    constructor () {
        super();
        this.state = {
          title: '',
          responsible: '',
          description: '',
          priority: 'low'
        };
       
        this.onSubmit = this.onSubmit.bind(this);
      }


    onSubmit = e =>{
        
         const con = this.props.consultTask(this.state.title);

         console.log(con);
       
           
       e.preventDefault();
    }

   

    onChange = e =>{
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit2 = e =>{
        
        const con = this.props.volver(e);
        console.log(con);
      
          
      e.preventDefault();
   }



   
    
    render() {
        return (
            <div className="row">
                <div className="card">
                    <div className="card-header">   
                        <h1>Consultar de Tarea</h1>
                    </div>
                    <form className="card-body" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" 
                            placeholder="digite el nombre la tarea"
                            value={this.state.title}
                            onChange={this.onChange}
                            name="title"/>
                        </div>
                        <div className="card-footer">
                            <div className="form-group">
                                <input type="submit"/>
                        
                                
                                
                            </div>
                        </div>

                    </form>

                    <form className="card" onSubmit={this.onSubmit2}>
                            <div className="form-group">
                                <button type="submit" onClick={this.onSubmit2}>
                                    volver
                                </button>

                            </div>

                        </form>
                    

                </div>
                
            </div>
        )
    }
}
