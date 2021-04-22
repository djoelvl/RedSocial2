import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PuntosService } from 'src/app/services/puntos.service';
import {userLoggedModel, UsuariosModel} from '../../models'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

 
  user: userLoggedModel[]= [];

  constructor(private puntosService: PuntosService,
    private route: ActivatedRoute) { }

  

  ngOnInit(): void {
   this.puntosService.loginResult(this.route.snapshot.params.userName)
   .subscribe((response: any)=>{
    this.user = response;
    console.log(response)
   })
   
   
   
  }

}
