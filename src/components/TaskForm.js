import React, {Component} from 'react';


// css
import '../App.css'

export default class TaskForm extends Component{

    constructor () {
        super();
        this.state = {
          title: '',
          responsible: '',
          description: '',
          priority: 'low'
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }


    handleInputChange = (e) => {
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
          [name]: value
        });
      }

    onSubmit = e =>{
        console.log(this.state)
        this.props.addTask(this.state.title, this.state.responsible, this.state.description, this.state.priority);
        e.preventDefault();
    }

    onChange = e =>{
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render(){

        
        return (
            <div className="card">
        <form onSubmit={this.onSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
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
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button id="boton" type="submit" className="btn btn-primary" >
            Save
          </button>
        </form>
      </div>

        )

    }

}

