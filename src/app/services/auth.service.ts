import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';
  public isAuth : boolean = false;
  constructor( private http : HttpClient , private route : Router) { }

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
    return this.http.post<IUser>(`${this.apiUrl}`,{username,password});
  }


  authenticate(username: string, password: string): void {
    this.SignIn(username, password).subscribe(
      (user: IUser) => {
        this.isAuth = true;
        this.route.navigate(['/companies']);
        console.log('this is user return true : '+user);
        console.log('this is isauth : '+ this.isAuth);

      },
      (error) => {
        console.error('Authentication error:', error);
        this.isAuth = false;
      }
    );
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
