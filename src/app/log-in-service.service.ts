import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import {map} from 'rxjs/operators';

@Injectable()
export class LogInServiceService {
   
  baseURl:String ='http://localhost:8080'
   
  constructor(private http:HttpClient) { }

logInAuthentication(user:any):Observable<any>{
  console.log(user)
  return this.http.post<User>(this.baseURl+'/user/login',user,{observe: 'response'}).pipe(map((response : HttpResponse<any>)=>{
    return response;
  }));
}



getAllUsers():Observable<any>{
  return this.http.get(this.baseURl+'/user/userdetail');
}

}


