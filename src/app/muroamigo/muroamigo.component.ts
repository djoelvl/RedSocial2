import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { likeModel, publicacionModel, userLoggedModel } from '../models';
import { MuroamigoService } from '../services/muroamigo/muroamigo.service';

@Component({
  selector: 'app-muroamigo',
  templateUrl: './muroamigo.component.html',
  styleUrls: ['./muroamigo.component.css']
})
export class MuroamigoComponent implements OnInit {

  constructor(private muroamigoservice: MuroamigoService,
              public route : ActivatedRoute,
              private router: Router) { }

   like: likeModel = {}
    user: userLoggedModel [] = []
    publicacionViewModel: publicacionModel[] = []

  ngOnInit(): void {

     this.muroamigoservice.vermuro(this.route.snapshot.params.amigoid).subscribe((response: any)=>{
       this.user = response;
     });

     this.muroamigoservice.verpublicaciones(this.route.snapshot.params.amigoid,this.route.snapshot.params.userid ).subscribe((response: any)=>{
       this.publicacionViewModel = response;
     }) 
  }

  darlike(item: any){
    
   this.muroamigoservice.darlike(item, this.route.snapshot.params.userid ,((response: any)=>{

   }))
  }
  logOut() 
  {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  volver(){
    this.router.navigate(["/amigos/" + 
    this.route.snapshot.params.username +
     "/" + this.route.snapshot.params.userid ]);
  }
}
