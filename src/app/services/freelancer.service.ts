import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
<<<<<<< HEAD
import { Observable, map, switchMap } from 'rxjs';
import { Freelancer } from '../interfaces/freelancer';
import { Skills } from '../enums/skills';
import { IUser } from '../interfaces/iuser';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
=======
import { Observable, map } from 'rxjs';
import { Freelancer } from '../interfaces/freelancer';
// import { map } from 'rxjs/operators';
import { Skills } from '../enums/skills';
>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private apiUrl = 'http://localhost:3000/freelancers';

<<<<<<< HEAD
  constructor(private http: HttpClient,private authService:AuthService,private router: Router) {
=======
  constructor(private http: HttpClient) {
>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427

   }

  getFreelancers(): Observable<Freelancer[]> {
    return this.http.get<Freelancer[]>(this.apiUrl);
  }

  getFreelancer(id: number): Observable<Freelancer> {
    return this.http.get<Freelancer>(`${this.apiUrl}/${id}`);
  }

<<<<<<< HEAD
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

=======
  createFreelancer(freelancer: Freelancer): Observable<Freelancer> {
    return this.http.post<Freelancer>(this.apiUrl, freelancer);
  }

  updateFreelancer(freelancer: Freelancer): Observable<Freelancer> {
    return this.http.put<Freelancer>(`${this.apiUrl}/${freelancer.id}`, freelancer);
  }
>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427

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
<<<<<<< HEAD
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
=======

  // searchFreelancers(skills: string, freelancerLocation: string): Observable<Freelancer[]> {
  //   const params = new HttpParams()
  //     .set('skills', skills.toLowerCase())
  //     .set('freelancerLocation', freelancerLocation.toLowerCase());

  //   return this.http.get<Freelancer[]>(this.apiUrl, { params }).pipe(
  //     map(freelancers => {


  //       return freelancers.filter(freelancer => {
  //         return freelancer.skills.some(skill => skill.toLowerCase().includes(skills.toLowerCase()));
  //       })
  //     })
  //   );
  // }
>>>>>>> 2ba25af9675abac8c3374066d1a87c1c2b000427
}
