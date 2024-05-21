import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';
import { Company } from '../interfaces/company';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies';

  constructor(private http: HttpClient , private router : Router) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompany(idUser: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${idUser}`);
  }
  getCompanyByIdUser(idUser: number): Observable<Company> {
    const url = `${this.apiUrl}?idUser.id=${idUser}`;
    return this.http.get<Company[]>(url).pipe(
      map((companies: any[]) => companies[0]) // Assuming that the API returns an array
    );
  }

  private getLastCompanyId(): Observable<number> {
    return this.http.get<Company[]>(this.apiUrl).pipe(
      map(company => {
        if (company.length === 0) {
          return 0;
        }
        const lastCompany = company[company.length - 1];
        return lastCompany.id !== undefined ? +lastCompany.id : 0;
      }),

    );
  }

  createCompany(company: Company): Observable<Company> {
    // return this.http.post<Company>(this.apiUrl, company);
    return this.getLastCompanyId().pipe(
      switchMap(lastId => {
        const nextId = lastId + 1;
        company.id = nextId;
        return this.http.post<Company>(this.apiUrl, company).pipe(
        );
      }),
      map((company: Company) => {
        // After successful signup, redirect to login
        this.router.navigate(['/login']);
        return company;
      })
    );


  }

  updateCompany(company: Company): Observable<Company> {
    const url = `${this.apiUrl}/${company.id}`;
    console.log(url);
    // return this.http.put<Company>(`${this.apiUrl}/${company.id}/`, company);
    console.log('Object : '+JSON.stringify(company))
     return this.http.put<Company>(url, {...company} );
  }

  deleteCompany(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
