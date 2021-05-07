import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userLoggedModel } from '../models';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const user:userLoggedModel =  JSON.parse(localStorage.getItem('user') as any);

        console.log(user)
        if (!user || !user.token) {
            return next.handle(req);
        }

        const request = req.clone({
            headers: req.headers.set('Basic', ` ${user.token}`)
        });

        return next.handle(request);
    }
}