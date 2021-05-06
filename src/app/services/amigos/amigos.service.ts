import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';

@Injectable({
  providedIn: 'root'
})
export class AmigosService extends HttpService {

  constructor(httpclient: HttpClient) { 

    super(httpclient);
  }

  verusuarios(id: number)
  {
    return this.get("/amigo/getamigo/"+ id);
  }

  enviarsolicitud(item: any, )
  {
    debugger
    return this.post("/Amigo/EnviarSolicitud", item);
  }
}
