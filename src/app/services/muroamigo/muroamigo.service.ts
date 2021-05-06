import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { likeModel, publicacionModel } from 'src/app/models';
import { HttpService } from '../httpService';

@Injectable({
  providedIn: 'root'
})
export class MuroamigoService extends HttpService {

  constructor(httpclient: HttpClient) {
    super(httpclient)
   }

   likemodel : likeModel= {}

   vermuro(id? : number){
     return this.get("/User/GetUsuarios/" + id);
   }

   verpublicaciones(id?: number){
     return this.get("/publicacion/getpublicacionbyuserlikecount/" + id);
   }

   darlike(item: publicacionModel, id: number,callback : Function){
    debugger
    this.likemodel.publicacionId = item.id
    this.likemodel.remitenteId = id
    return this.post("/publicacion/darlike", this.likemodel).subscribe(response =>{
      callback(response);

    })
    
  }
}
