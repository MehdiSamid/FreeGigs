import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { CommonModule } from '@angular/common';
import { Company } from '../../interfaces/company';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  styleUrls: ['./company-form.component.css']

})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;
  company! : any ;
  @Input() Company: any;
  isUpdate : boolean = false;
  CompanyData! : Company ;
  btn : string = 'Create Company' ;



  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router ,
    private auth : AuthService,
    private route: ActivatedRoute ,
  ) {
    this.companyForm = this.fb.group({
      companyName: ['', Validators.required],
      industry: ['', Validators.required]
    });
    if(this.isUpdate){
      this.btn = "Edit Company";
    }
  }

  ngOnInit(): void {
    console.log(this.Company);
    console.log(this.isUpdate);
    // if(this.isUpdate && this.Company){
    //   this.companyForm.value.companyName = this.Company.companyName ;
    //   this.companyForm.value.industry = this.Company.industry ;
    // }
    this.route.paramMap.subscribe(params => {
      const companyParam = params.get('company');
      if (companyParam) {
        this.company = JSON.parse(companyParam);
        this.isUpdate = params.get('isUpdate') === 'true';
        console.log(this.Company);
        console.log(this.isUpdate);
        if (this.isUpdate && this.company) {
          this.companyForm.patchValue({
            companyName: this.company.companyName,
            industry: this.company.industry
          });
        }
      }
    });
  }

  submit(): void {
    if (this.companyForm.valid) {
       this.CompanyData={
        id : 0,
        idUser : this.auth.authenticatedUser ,
        companyName : this.companyForm.value.companyName,
        industry : this.companyForm.value.industry
      }
      console.log( "Company : "+this.CompanyData);

      if(this.isUpdate){
        this.CompanyData['id'] = this.company.id;
        this.companyService.updateCompany(this.CompanyData).subscribe(() =>{
          console.log('edit succesfuly')
        });
      }else {
        console.log('this is company : '+ this.CompanyData);
        this.companyService.createCompany(this.CompanyData).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    }
  }
}
