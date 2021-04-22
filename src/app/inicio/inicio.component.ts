import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { publicacionModel, userLoggedModel } from '../models';
import { PuntosService } from '../services/puntos.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  user: userLoggedModel[]= []
  publicacionModel: publicacionModel= {}
  publicacionViewModel: publicacionModel[]=[]
  
  username = localStorage.getItem('userName');

  constructor( private puntosService: PuntosService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    

        
    if (localStorage.getItem('userToken') != null && localStorage.getItem('userToken')!=""){
      this.puntosService.loginResult(this.route.snapshot.params.userName)
      .subscribe((response: any)=>{
        this.user = response
        for(let userr of this.user){
        this.publicacionModel.userId = userr.id;
       console.log(this.publicacionModel.userId)
        }
      })
     
      this.puntosService.getPublicaciones().subscribe((response: any)=>{
        this.publicacionViewModel = response;
      })
    }
    else{
      this.router.navigate(["/login"]);
    }
  
   
  
    
  }

logOut(){
  localStorage.clear();
  this.router.navigate(["/login"]);
}

publicar(){


  
  this.puntosService.postPublicacion(this.publicacionModel).subscribe(response=>{
    this.toastr.info('Publicación exitosa')
    this.publicacionViewModel.push(response);
  })
}

}
