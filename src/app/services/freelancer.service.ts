import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable, map, switchMap } from 'rxjs';
import { Freelancer } from '../interfaces/freelancer';
import { Skills } from '../enums/skills';
import { IUser } from '../interfaces/iuser';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private apiUrl = 'http://localhost:3000/freelancers';

  constructor(private http: HttpClient,private authService:AuthService,private router: Router) {

   }

  getFreelancers(): Observable<Freelancer[]> {
    return this.http.get<Freelancer[]>(this.apiUrl);
  }

  getFreelancer(id: number): Observable<Freelancer> {
    return this.http.get<Freelancer>(`${this.apiUrl}/${id}`);
  }

  updateprofile(freelancer: Freelancer): Observable<Freelancer> {
    return this.authService.getAuthenticatedUser().pipe(
      switchMap((user: IUser | null) => {
        if (!user) {
          this.router.navigate(["/login"]);
          throw new Error('User not authenticated');
        }
        return this.http.put<Freelancer>(this.apiUrl, { ...user, ...freelancer });
      })
    );
  }


  deleteFreelancer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  searchFreelancers(skills: string [] , freelancerLocation: string): Observable<Freelancer[]> {

    const params = {
        skills: skills,
        freelancerLocation: freelancerLocation
    };
    console.log(params);
    return  this.http.get<Freelancer[]>(this.apiUrl, { params }).pipe(
          map((freelancers: any[]) => {
            return freelancers.filter(freelancer => {
              return freelancer.skills.some((skill: string) => skill.includes(skills.join(',')));
            })
          })
        );
}
getLocations(): Observable<string[]> {
  return this.http.get<Freelancer[]>(this.apiUrl).pipe(
    map((freelancers: Freelancer[]) => {
      const locations: string[] = [];
      freelancers.forEach(freelancer => {
        if (freelancer.freelancerLocation && !locations.includes(freelancer.freelancerLocation)) {
          locations.push(freelancer.freelancerLocation);
        }
      });
      return locations;
    })
  );
}
getAuthenticatedFreelancer(): Observable<Freelancer> {
  return this.authService.getAuthenticatedUser().pipe(
    switchMap((user: IUser | null) => {
      if (!user) {
        this.router.navigate(['/login']);
        throw new Error('User not authenticated');
      }
      return this.http.get<Freelancer>(`${this.apiUrl}/${user.id}`);
    })
  );
}
}
