import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {userLoggedModel, UsuariosModel} from '../../models'

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

 
  user: userLoggedModel[]= [];

  constructor(
    private route: ActivatedRoute) { }

  

  ngOnInit(): void {
     }
   
   
   
  

}
