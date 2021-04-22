import { Component, OnInit } from '@angular/core';
import { PuntosService } from '../services/puntos.service'
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {userLoggedModel, UsuariosModel} from '../models'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private puntosService: PuntosService,
    private toastr: ToastrService,
    private router: Router,
    private route : ActivatedRoute) { }

    userName: string;
    password: string;
    model : UsuariosModel = {};
    user: userLoggedModel [] = [];
    Token? = localStorage.getItem('userToken');
  ngOnInit(): void {
 if(this.Token != null && this.Token != "")
 {
  this.router.navigate(["/inicio/" + localStorage.getItem('userName')])
 }
 
  }

  login(){
    
    this.puntosService.login(this.userName,this.password).subscribe((response: any)=>{
      this.model = response;
      this.puntosService.loginResult(this.userName).subscribe((response: any)=>{
        this.user = response
        for(let userr of this.user){
        localStorage.setItem('userToken', JSON.stringify(userr.token));
        localStorage.setItem('userFname', JSON.stringify(userr.firstName));
        localStorage.setItem('userLname', JSON.stringify(userr.lastName));
        localStorage.setItem('userName', JSON.stringify(userr.userName));
        this.toastr.success('Inicio de sesion exitoso')
        this.router.navigate(["/inicio/" + this.userName]);
      }
    })
      },(err)=>{
      this.toastr.warning('Usuario o contraseña incorrectos')
  
    })
  }
}
