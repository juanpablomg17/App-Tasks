import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import tasks from './sample/tasks.json';
import Tasks from './components/Tasks';

//componentes
import TaskForm from './components/TaskForm'
import Post from './components/Post'



console.log(tasks)

export default class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title,description) => {
    const newTask ={
      title: title,
      Description: description,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })

    
  }

  DeleteTask = (id) => {
    // él método filter nos permite devolver un arreglo ignorando algunos datos
   const tareas=  this.state.tasks.filter(task => task.id !== id)
   console.log(tareas);
   this.setState({tasks: tareas})
  }

  checkDone = id => {
    const tareas = this.state.tasks.map(task => {
      if (task.id === id){
        task.Done = !task.Done
      }
      else{
        return task;
      }
    });

    this.setState({tasks: tareas})
  }


  render(){
    return(
      
    
        
        <div>
       <TaskForm addTask={this.addTask}/>
        <Tasks tasks= {this.state.tasks} deleteTask={this.DeleteTask} checkDone={this.checkDone}/>

        </div>




      
    
      
    
    
    

   
    
    
    );
  }
}

