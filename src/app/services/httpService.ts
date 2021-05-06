import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";


export class HttpService {

    constructor(private http: HttpClient) {
    }

    get(url: string, option?: any){
        return this.http.get(`${environment.ApiURL}${url}`, option);
     }

    post(url: string, body: any, options?: any){
       return this.http.post(`${environment.ApiURL}${url}`, body, options);
    }

    delete(url: string){
        return this.http.delete(`${environment.ApiURL}${url}` );
     }

     put(url: string, body:any, options?: any){
        return this.http.put(`${environment.ApiURL}${url}`, body, options);
     }
}