import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerFormComponent } from './freelancer-form.component';

describe('FreelancerFormComponent', () => {
  let component: FreelancerFormComponent;
  let fixture: ComponentFixture<FreelancerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreelancerFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreelancerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
