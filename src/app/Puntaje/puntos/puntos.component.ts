import { Component, OnInit } from '@angular/core';
import { PuntajesModel, UsuariosModel } from '../../models';
import { PuntosService } from '../../services/puntos.service'


@Component({
  selector: 'app-puntos',
  templateUrl: './puntos.component.html',
  styleUrls: ['./puntos.component.css']
})
export class PuntosComponent implements OnInit {



  jugadores: PuntajesModel[] = [];

  model: PuntajesModel = {};
  search: string = "";
  user: UsuariosModel[]= []


  resp: any;


  constructor(private PuntosService: PuntosService) { }

  ngOnInit(): void {
    this.PuntosService.getPuntaje().subscribe((resp: any) => {
      this.jugadores = resp;
      console.log(this.jugadores)
    })
     
    
  }
  deleteJugador(jugador: PuntajesModel) {

    this.PuntosService.DeleteUser(jugador.id).subscribe(response=>{
      this.jugadores = this.jugadores.filter(j=> j.id !== jugador.id)
    })
  }


  createUser() {
    this.PuntosService.Createusuario(this.model).subscribe(response => {

      debugger;
      this.jugadores.push(response);
    });
  }

actualizar(id?: number){
  this.PuntosService.getUserById(id).subscribe((resp: any) => {
  this.model = resp;
  })

}

  updateUser(jugador: PuntajesModel){
    this.PuntosService.updateUser(jugador.id, jugador).subscribe(response =>{
      window.location.reload();

     })
    
  }

  searchUser(){

    this.PuntosService.getPuntaje().subscribe((response: any)=>{
      this.jugadores = response;
      if(this.search != "" && this.search != null){
    this.jugadores = this.jugadores.filter(j=>j.nombre == this.search)
  }
  
    })
  }

  // Createuser(nombre: string, puntaje: string) {
  //   var puntos = Number(puntaje);
  //   this.User = [
  //     {
  //       id: 0,
  //       nombre: nombre,
  //       puntaje: puntos
  //     }]
  //   this.PuntosService.CreateUser(this.User).subscribe();
  // }

}
