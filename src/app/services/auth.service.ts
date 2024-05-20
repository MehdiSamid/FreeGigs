import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
<<<<<<< HEAD
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
=======
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/users';
<<<<<<< HEAD
  public isAuth: boolean = false;
  private authenticatedUser: IUser | null = null;
  userIdKey!: string;
  role!: string;

  constructor(private http: HttpClient, private router: Router) { }

  SignUp(user: IUser): Observable<IUser> {
=======
  public isAuth : boolean = false;
  constructor( private http : HttpClient , private route : Router) { }

  SignUp( user :IUser ) :Observable<IUser> {
>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427
    return this.getLastUserId().pipe(
      switchMap(lastId => {
        const nextId = lastId + 1;
        user.id = nextId;
<<<<<<< HEAD
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

=======
        return this.http.post<IUser>(this.apiUrl, user);
      })
    );
  }

  SignIn(username : string , password : string) : Observable<IUser>{
    return this.http.post<IUser>(`${this.apiUrl}`,{username,password});
  }


>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427
  authenticate(username: string, password: string): void {
    this.SignIn(username, password).subscribe(
      (user: IUser) => {
        this.isAuth = true;
<<<<<<< HEAD
        this.authenticatedUser = user;
        this.router.navigate(['/']);  // Redirect to the root path
        console.log('User authenticated:', user);
        localStorage.setItem('role', user.role);
=======
        this.route.navigate(['/companies']);
        console.log('this is user return true : '+user);
        console.log('this is isauth : '+ this.isAuth);

>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427
      },
      (error) => {
        console.error('Authentication error:', error);
        this.isAuth = false;
      }
    );
  }
<<<<<<< HEAD

  getAuthenticatedUser(): Observable<IUser | null> {
    return of(this.authenticatedUser);
  }

=======
>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427
  private getLastUserId(): Observable<number> {
    return this.http.get<IUser[]>(this.apiUrl).pipe(
      map(users => {
        if (users.length === 0) {
          return 0;
        }
        const lastUser = users[users.length - 1];
<<<<<<< HEAD
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
 
=======
        return lastUser.id !== undefined ? +lastUser.id : 0; // Convert to number using unary plus operator
      })
    );
  }



>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427
}
