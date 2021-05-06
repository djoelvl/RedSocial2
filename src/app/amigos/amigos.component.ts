import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { solicitudOneUserModel, UsuariosModel, UsuariosSolicitudModel } from '../models';
import {MatExpansionModule, MatAccordion, matExpansionAnimations} from '@angular/material/expansion';
import { AmigosService } from '../services/amigos/amigos.service';

// MDB Angular Pro
@Component({
  selector: 'app-amigos',
  templateUrl: './amigos.component.html',
  styleUrls: ['./amigos.component.css']
})
export class AmigosComponent implements OnInit {

  usuarioNoamigo: UsuariosSolicitudModel[]= []
  solicitudfriend: solicitudOneUserModel = {}
  search: string= "";
  
  

  constructor(private router: Router,
             public route: ActivatedRoute,
             private amigoservice: AmigosService) { }

  ngOnInit(): void {
    this.amigoservice.verusuarios(this.route.snapshot.params.userid).subscribe((response: any) =>
    {
      this.usuarioNoamigo = response
    })
   
    
   }
  volver(){
    this.router.navigate(["/inicio/" + 
    this.route.snapshot.params.username +
     "/" + this.route.snapshot.params.userid ]);
  }
  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  enviarSolicitudAmistad(id?: number){
    debugger
    this.solicitudfriend.remitenteId = this.route.snapshot.params.userid;
    this.solicitudfriend.destinatarioId = id
    this.solicitudfriend.estado = "enviada"
    this.amigoservice.enviarsolicitud(this.solicitudfriend).subscribe(response=>{
      console.log(response)
    })
  }
 
  
 


searchUser (){
debugger
this.amigoservice.verusuarios(this.route.snapshot.params.userid).subscribe((response: any) =>
{
    this.usuarioNoamigo = response;
    if(this.search != "" && this.search != null){
  this.usuarioNoamigo = this.usuarioNoamigo.filter(j=>j.firstName == this.search || 
    j.lastName == this.search|| this.search == j.firstName +" "+j.lastName)
}

  })
}

verSolicitud(){
  this.router.navigate(["/solicitud/" + this.route.snapshot.params.username +"/"+ this.route.snapshot.params.userid]);
}
verperfil(id?: number){
  this.router.navigate(["/muro/" + this.route.snapshot.params.username +"/"+ this.route.snapshot.params.userid + "/" +id]);
}

}

