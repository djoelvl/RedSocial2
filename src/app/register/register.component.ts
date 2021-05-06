import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { LoginResult, PuntajesModel, UsuariosModel } from '../models';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../services/register/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  Usuarios: UsuariosModel[] = []
  model: UsuariosModel = {}
  userToken: LoginResult = {};


  
  constructor(
    private registerservice: RegisterService, 
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {}

  createUser() {
 

    this.registerservice.createuser(this.model).subscribe((response: any) => {
      this.toastr.success('Se ha creado el usuario')
      this.router.navigate(['/login'])
    },(err)=>{
      this.toastr.warning('Error al intentar crear')
    })

  }

}
