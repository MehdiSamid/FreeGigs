import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Freelancer } from '../interfaces/freelancer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {
  private apiUrl = 'http://localhost:3000/freelancers'; 

  constructor(private http: HttpClient) {
    
   }

  getFreelancers(): Observable<Freelancer[]> {
    return this.http.get<Freelancer[]>(this.apiUrl);
  }

  getFreelancer(id: number): Observable<Freelancer> {
    return this.http.get<Freelancer>(`${this.apiUrl}/${id}`);
  }

  createFreelancer(freelancer: Freelancer): Observable<Freelancer> {
    return this.http.post<Freelancer>(this.apiUrl, freelancer);
  }

  updateFreelancer(freelancer: Freelancer): Observable<Freelancer> {
    return this.http.put<Freelancer>(`${this.apiUrl}/${freelancer.id}`, freelancer);
  }

  deleteFreelancer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  searchFreelancers(skills: string, freelancerLocation: string): Observable<Freelancer[]> {
    const params = {
        skills: skills,
        freelancerLocation: freelancerLocation
    }; 
    return this.http.get<Freelancer[]>(this.apiUrl, { params });
}

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
}
