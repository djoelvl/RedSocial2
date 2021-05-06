import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { amigosModel, solicitudmodel, UsuariosModel, UsuariosSolicitudModel } from '../models';
import { SolicitudService } from '../services/solicitud/solicitud.service';


@Component({
  selector: 'app-solicitud-amistad',
  templateUrl: './solicitud-amistad.component.html',
  styleUrls: ['./solicitud-amistad.component.css']
})
export class SolicitudAmistadComponent implements OnInit {

  solicitud: solicitudmodel={}
   amigosModel: amigosModel= {}
   usuariosModel: UsuariosSolicitudModel[]= []

  constructor(private router: Router,
    public route: ActivatedRoute,
    private solicitudservice: SolicitudService) { }

  ngOnInit(): void {
    this.solicitudservice.versolicitud(this.route.snapshot.params.userid).subscribe((response: any)=>{
      this.usuariosModel = response
      console.log(response)
    })
  }


  volver(){
    this.router.navigate(["/amigos/" + 
    this.route.snapshot.params.username +
     "/" + this.route.snapshot.params.userid ]);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  aceptarsolicitud(remitenteId?: number){
     this.solicitud.remitenteId = remitenteId
     this.solicitud.destinatarioId = this.route.snapshot.params.userid
     this.solicitud.estado = "aceptada"
    this.solicitudservice.aceptarsolicitud(this.solicitud, (response : any)=>{
    });
    
  }
  
  rechazarsolicitud(remitenteId?: number){
    this.solicitud.remitenteId = remitenteId
     this.solicitud.destinatarioId = this.route.snapshot.params.userid
     this.solicitudservice.rechazarsolicitud(this.solicitud)
  }

  }

