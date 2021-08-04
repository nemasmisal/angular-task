import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(baseUrl + 'users');
  }
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(baseUrl + 'users' + id)
  }
}
