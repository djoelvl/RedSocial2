import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userLoggedModel } from './models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  title = 'AngPractice';

  usermodel : userLoggedModel = {}
  Jugador:Array <any> = [];
    
  constructor(private router: Router){

  }

  ngOnInit(){
    if (localStorage.getItem('user')) 
    {
      this.usermodel = JSON.parse (localStorage.getItem('user') || {} as any)
      this.router.navigate(["/inicio/" + this.usermodel.userName + "/" + this.usermodel.id]);
     }
    else 
    {
      this.router.navigate(["/login"]);
    }

    
  }

 
}
