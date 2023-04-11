import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }

  public doRegistration(user: User){
    return this.http.post("http://localhost:8090/api/v1/addRegistration",user,{responseType:'text' as 'json'});
  }

  public getUsers(){
    return this.http.get("http://localhost:8090/api/v1/findAllRegistration");
  }
  
  public deleteUser(emailId:string){
    return this.http.delete("http://localhost:8090/api/v1/delete/"+emailId);
  }
  
  
}
