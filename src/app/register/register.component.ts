import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { LoginResult, PuntajesModel, UsuariosModel } from '../models';
import { PuntosService } from '../services/puntos.service'
import { ToastrService } from 'ngx-toastr';


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
    private PuntosService: PuntosService, 
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }
  

  ngOnInit(): void {

    this.PuntosService.getUser().subscribe((response: any) => {
      this.Usuarios = response;
      
    })

  }

  createUser() {


    this.PuntosService.createUser(this.model).subscribe((response: any) => {
      this.toastr.success('Se ha creado el usuario')
      this.router.navigate(['/login'])
      //redirect     

      localStorage.setItem('user', JSON.stringify(response));
      const userToken = JSON.stringify(localStorage.getItem('user'))
      console.log(userToken)
    },(err)=>{
      this.toastr.warning('Error al intentar crear')
    })

  }

}
