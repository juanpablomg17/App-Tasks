import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import tasks from './sample/tasks.json';


//componentes
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import Header from './components/Header';



console.log(tasks)

export default class App extends Component{

  state = {
    tasks: tasks
  }

  addTask = (title,responsible,description,priority) => {
    const newTask ={
      title: title,
      responsible: responsible,
      description: description,
      priority: priority,
      id: this.state.tasks.length
   }
     this.setState({
      tasks: [...this.state.tasks, newTask]
     })
    }
    
  // }

   DeleteTask = (id) => {
    // él método filter nos permite devolver un arreglo ignorando algunos datos
   const tareas=  this.state.tasks.filter(task => task.id !== id)
    console.log(tareas);
    this.setState({tasks: tareas})
   }

  // checkDone = id => {
  //   const tareas = this.state.tasks.map(task => {
  //     if (task.id === id){
  //       task.Done = !task.Done
  //     }
  //     else{
  //       return task;
  //     }
  //   });

  //   this.setState({tasks: tareas})

   //<TaskForm addTask={this.addTask}/>
   // deleteTask={this.DeleteTask} checkDone={this.checkDone}
  // }


  render(){
    return(
      
    
        <div>
          <div>
            <Header/>
          </div>

          <div className="row">
          <div className="col-md-4">
          <TaskForm addTask={this.addTask}/>
          </div>

          <div className="col-md-8">
          <Tasks tasks= {this.state.tasks} deleteTask={this.DeleteTask}/>
          </div>
        

        </div>



        </div>
        


      
    
      
    
    
    

   
    
    
    );
  }


}