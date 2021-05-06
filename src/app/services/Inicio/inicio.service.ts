import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InicioComponent } from '../../inicio/inicio.component';
import { likeModel, publicacionModel, userLoggedModel } from 'src/app/models';
import { HttpService } from '../httpService';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InicioService extends HttpService {

  constructor(private httpclient: HttpClient) 
    { 

      super(httpclient)
    }

    likeModel: likeModel = {}


  publicar(item: publicacionModel, callback : Function){
    return this.post("/publicacion", item).subscribe(response => {
      callback(response);
    })
  }

  verpublicaciones(userid: number){
    return this.get("/publicacion/getpublicacionbyuserlikecount/" + userid)
  }

  darlike(item: publicacionModel, callback : Function){
    debugger
    this.likeModel.publicacionId = item.id
    this.likeModel.remitenteId = item.userId
    return this.post("/publicacion/darlike", this.likeModel).subscribe(response =>{
      callback(response);

    })
    
  }

 

}
