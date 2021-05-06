import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { solicitudmodel } from 'src/app/models';
import { HttpService } from '../httpService';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService extends HttpService {

  constructor(httpclient: HttpClient) {

    super(httpclient)
  }

  versolicitud(id: number) {
    return this.get("/amigo/getsolicitud/" + id)
  }

  aceptarsolicitud(item: any, callback: Function) {
    return this.put("/Amigo/AceptarSolicitud", item).subscribe(response => {
      callback(response);
    })
  }
  
  rechazarsolicitud(item: solicitudmodel){
    return this.delete("/Amigo/DeleteSolicitud/"+ item.remitenteId+ "/" + item.destinatarioId  )
  }

}
