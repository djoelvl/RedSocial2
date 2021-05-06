import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends HttpService {

  constructor(httpclient: HttpClient) { 

    super(httpclient)
  }

  createuser(item: any){
      return this.post("/User/CreateUser", item)
  }
}
