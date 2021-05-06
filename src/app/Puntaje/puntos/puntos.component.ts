import { Component, OnInit } from '@angular/core';
import { PuntajesModel, UsuariosModel } from '../../models';


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


  constructor() { }

  ngOnInit(): void {
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
