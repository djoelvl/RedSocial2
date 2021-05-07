import { ngModuleJitUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { likeModel, publicacionModel, userLoggedModel } from '../models';
import { InicioService } from '../services/Inicio/inicio.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  

  constructor(private inicioService: InicioService,
    public route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService) { }


    like: likeModel = {}
    publicacionModel: publicacionModel = {}
    user: userLoggedModel = {}
    publicacionViewModel: publicacionModel[] = []
    username = this.route.snapshot.params.username;
    userid = this.route.snapshot.params.userid;
    
  
  ngOnInit(): void {
    if (localStorage.getItem('user')) 
    {
      this.user = JSON.parse(localStorage.getItem('user') || {} as any);
      this.inicioService.verpublicaciones(this.userid).subscribe((response: any) =>
    {
     this.publicacionViewModel = response;
    })
    }
    else 
    {
      this.router.navigate(["/login"]);
    }
  }

  logOut() 
  {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }
  
  publicar() 
  {
    this.publicacionModel.userId = this.userid
    this.inicioService.publicar(this.publicacionModel, (response : any) =>{
    this.publicacionViewModel.push(response);
  });
  }

  darlike(item: any) 
  {
    this.inicioService.darlike(item, (response: any) =>{

    });
  }
  verAmigos()
  {
    this.router.navigate(["/amigos/" + this.username +"/"+ this.userid]);
  }

}
