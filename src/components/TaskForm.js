import React, {Component} from 'react';

export default class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }

    onSubmit = e =>{
        console.log(this.state)
        this.props.addTask(this.state.title, this.state.description);
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
            <form onSubmit={this.onSubmit}>
                <input onChange={this.onChange} name="title" value={this.state.title} type="text" placeholder="Escribe una Tarea"/> <br></br> <br></br>
                <textarea name="description" onChange={this.onChange}
                 value={this.state.description} 
                  placeholder="Write a Description">
                      </textarea> <br></br> 
                <input type="submit"/>
                

            </form>

        )

    }

}

