import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpService } from '../httpService';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService extends HttpService {

  constructor(httpclient: HttpClient) {

    super(httpclient);
  }


 
  login(user: any, callback: Function) {

    return this.post("/user/getlogin", user).subscribe(response=>{

        localStorage.setItem('user', JSON.stringify(response));
       callback(response);
    }, response=> callback(response))

    
  }

}
