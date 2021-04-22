import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { publicacionModel, PuntajesModel, UsuariosModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PuntosService {

  constructor( private http: HttpClient) { 

  }
  
  getPuntaje(){
    return this.http.get(`${environment.ApiURL}`);
  }

  DeleteUser (id?: number){
    return this.http.delete(`${environment.ApiURL}` + id  );
  }

  Createusuario(jugador: PuntajesModel) {

    return this.http.post(`${environment.ApiURL}`, jugador);
  }

  updateUser(id?: number, jugador?: PuntajesModel){
    debugger
    return this.http.put(`${environment.ApiURL}` + id, jugador)
  }

  getUserById(id?: number){
    return this.http.get(`${environment.ApiURL}` + id);
  }


  createUser(usuario: UsuariosModel){
     return this.http.post(`${environment.UserURL}Register/`, usuario )
  }

  getUser(){
    return this.http.get(`${environment.UserURL}`);
  }
  loginResult(userName?: string){
    return this.http.get(`${environment.UserURL}loginResult/` + userName);
  }

  login(username?: string, password?:string){
    return this.http.get(`${environment.UserURL}login/` + username+"/"+ password)
  }

  postPublicacion(publicacion : publicacionModel){
    debugger
    return this.http.post(`${environment.publicacionURL}`, publicacion);
  }

  getPublicaciones(){
    return this.http.get(`${environment.publicacionURL}`)
  }

}

