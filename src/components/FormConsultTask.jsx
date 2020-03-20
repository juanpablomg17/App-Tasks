import React, { Component } from 'react'

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
        
         const tareas = this.props.consultTask(this.state.title);

       
        
       
           
       e.preventDefault();
    }

    onChange = e =>{
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
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

                </div>
                
            </div>
        )
    }
}
