import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import asistencia from './sample/asistencia.json';


//componentes
import Buscador from './components/Asistencias/React/Buscador'
import Asistencia from './components/Asistencias/React/Asistencia';
import Asistencias from './components/Asistencias/React/Asistencias';







export default class App extends Component {
  /*
    state = {
      tasks: tasks,
      consultas: tasks,
    }
  
    
  
  
  
    addTask = (title, responsible, description, priority) => {
      const newTask = {
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
      const tareas = this.state.tasks.filter(task => task.id !== id)
  
      this.setState({ tasks: tareas, consultas: tareas })
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
  
  
    ConsultTask = (title) => {
      const tareas = this.state.tasks.filter(task => task.title === title);
      this.setState({ tasks: tareas });
  
  
  
  
  
  
  
  
  
  
    }
  
  
    Volver(e) {
  
      this.setState({ tasks: tasks });
    }
  
  
  
  
   */

  state = {
    asistencia: asistencia,
    resultados: []
  }

  datosBusqueda = (title) => {
    const asis = this.state.asistencia.filter(asis => asis.title === title);
    this.setState({ resultados: asis });





  }



  render() {




    return (


     

      <Router>

        <Route  path="/" render={() => {
          return <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Gestionar Asistencias
              </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="/ConsultarAsistencia">Consultar Asistencia</Link>
                    <Link class="dropdown-item" to="/VerAgregarAsistencias">Ver y agregar Asistencias</Link>
                    
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
                </nav>

          
        }}>


        </Route>   
          <Route exact path="/VerAgregarAsistencias"> 
              <div>
              <Asistencias

                asistencias={this.state.asistencia}
              />
            </div>

          </Route>

          <Route exact path='/ConsultarAsistencia'>

          <div className="app container">
            <div className="jumbotron">
              <p className="lead text-center">Busca tu asistencia</p>
              <Buscador termino={this.datosBusqueda} />
            </div>
            <Asistencia
              asistencias={this.state.resultados}

            />
          </div>

          </Route>
            


      </Router>
      











    );
  }


}