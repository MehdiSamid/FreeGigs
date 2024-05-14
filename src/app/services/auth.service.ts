import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';
  constructor( private http : HttpClient) { }

  SignUp( user :IUser ) :Observable<IUser> {
    return this.getLastUserId().pipe(
      switchMap(lastId => {
        const nextId = lastId + 1;
        user.id = nextId;
        return this.http.post<IUser>(this.apiUrl, user);
      })
    );
  }

  SignIn(username : string , password : string) : Observable<IUser>{
    return this.http.post<IUser>(`${this.apiUrl}/login`,{username,password});
  }

  private getLastUserId(): Observable<number> {
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map(users => {
        if (users.length === 0) {
          return 0;
        }
        const lastUser = users[users.length - 1];
        return lastUser.id !== undefined ? +lastUser.id : 0; // Convert to number using unary plus operator
      })
    );
  }



}
