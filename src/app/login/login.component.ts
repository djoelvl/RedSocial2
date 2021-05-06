import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {userLoggedModel, UsuariosModel} from '../models'
import { LoginServiceService } from '../services/Login/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private loginService: LoginServiceService) { }

    
    usermodel: userLoggedModel= {};
    
  ngOnInit(): void {
    
  }

  login(){
    
      this.loginService.login(this.usermodel,(response:any)=>{
      this.usermodel = JSON.parse(localStorage.getItem('user') || {} as any);
      this.router.navigate(["/inicio/" + this.usermodel.userName + "/"+ this.usermodel.id])
      if (this.usermodel == null){
      this.toastr.warning('usuario o contraseña incorrectos')
     }
     else{
      this.toastr.success('Se ha logueado')
     }
    })
  }
}
