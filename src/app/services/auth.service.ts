import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';
  public isAuth: boolean = false;
  private authenticatedUser: IUser | null = null;
  userIdKey!: string;
  role!: string;

  constructor(private http: HttpClient, private router: Router) { }

  SignUp(user: IUser): Observable<IUser> {
    return this.getLastUserId().pipe(
      switchMap(lastId => {
        const nextId = lastId + 1;
        user.id = nextId;
        return this.http.post<IUser>(this.apiUrl, user).pipe(
          catchError(this.handleError)
        );
      }),
      map((user: IUser) => {
        // After successful signup, redirect to login
        this.router.navigate(['/login']);
        return user;
      })
    );
  }
  SignIn(username: string, password: string): Observable<IUser> {
    return this.http.get<IUser[]>(`${this.apiUrl}?username=${username}&password=${password}`).pipe(
      map(users => {
        if (users.length > 0) {
          return users[0];
        } else {
          throw new Error('User not found');
        }
      }),
      catchError(this.handleError)
    );
  }

  authenticate(username: string, password: string): void {
    this.SignIn(username, password).subscribe(
      (user: IUser) => {
        this.isAuth = true;
        this.authenticatedUser = user;
        this.router.navigate(['/']);  // Redirect to the root path
        console.log('User authenticated:', user);
        localStorage.setItem('role', user.role);
      },
      (error) => {
        console.error('Authentication error:', error);
        this.isAuth = false;
      }
    );
  }

  getAuthenticatedUser(): Observable<IUser | null> {
    return of(this.authenticatedUser);
  }

  private getLastUserId(): Observable<number> {
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map(users => {
        if (users.length === 0) {
          return 0;
        }
        const lastUser = users[users.length - 1];
        return lastUser.id !== undefined ? +lastUser.id : 0;
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getRole() {
    return localStorage.getItem('role');
  }
 
}
