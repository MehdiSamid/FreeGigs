import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../../services/company.service';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  styleUrls: ['./company-form.component.css']

})
export class CompanyFormComponent implements OnInit {
  companyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router
  ) {
    this.companyForm = this.fb.group({
      userId: ['', Validators.required],
      companyName: ['', Validators.required],
      industry: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  createCompany(): void {
    if (this.companyForm.valid) {
      this.companyService.createCompany(this.companyForm.value).subscribe(() => {
        this.router.navigate(['/companies']);
      });
    }
  }
}
