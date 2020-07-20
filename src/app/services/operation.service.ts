import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  selectedUser: User;
  readonly URL_API = 'http://localhost:3000/api';
  
  constructor(private http: HttpClient) { 
    this.selectedUser = new User();
  }

  realizarConsulta(user: User) {
    return this.http.post(this.URL_API, user);
  }
}
