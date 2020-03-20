import React, { Component } from 'react'

export default class Header extends Component {


    /*
     <header>
        <nav class="navbar navbar-expand-lg" style="padding-left: 40px;">
            <a class="navbar-brand" href="#">
                <img src="../IMAGENES/Nuevos logos/logo.png" width="30" height="30" alt="">
                <b>SEPA</b>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav navbar-nav navbar-nav-first">
                    <li class="nav-item active">
                        <a class="nav-link" href="Inicio.html"
                            style="color: white; padding-left: 25px; padding-right: 25px;">Home
                            <span class="sr-only">(current)</span> </a>


                </ul>

                <ul class="nav navbar-nav navbar-nav-first">
                    <li style="padding-left: 25px;" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Paciente
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item"  data-toggle="modal" data-target="#exampleModalCenter">Crear Perfil</a>
                            <a class="dropdown-item" data-toggle="modal" data-target="#exampleModalCenter1">Consultar Paciente</a>

                        </div>
                    </li>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#asistenciaencasa" style="padding-left: 30px; padding-right: 30px;">Asistencia en
                            Casa</a>
                    </li>
                </ul>
                <ul style="padding-right: 25px;" class="nav navbar-nav navbar-nav-first">
                    <li class="nav-item">
                        <a class="nav-link" id="showChart"  style="padding-left: 30px; padding-right: 30px;">Reportes</a>
                   </li>
                   </ul>
                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                           

                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          </div>
                        </div>
                      </div>
                    </div>

                <form class="nav navbar-nav navbar-nav-first" style="margin-right: 2%; margin-left: 15.5%;" id="search">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                </form>


            </div>
        </nav>


    </header>


    */





    render() {
        return (
            
            <header>
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                        Hola!!!
                    </a>
                </nav>
            </header>
        )
    }
}
