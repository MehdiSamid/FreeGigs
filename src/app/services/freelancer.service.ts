import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Freelancer } from '../interfaces/freelancer';


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
}
