import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class LogInServiceService {

   
  constructor(private http:HttpClient) { }

logInAuthentication(user:any):Observable<any>{
  console.log(user)
  return this.http.post<User>('/backend/user/login',user);
}
getAllUsers():Observable<any>{
  return this.http.get('/backend/user/userdetail');
}

}
