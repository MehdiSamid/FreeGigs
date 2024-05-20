import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchfreelancerComponent } from './searchfreelancer.component';

describe('SearchfreelancerComponent', () => {
  let component: SearchfreelancerComponent;
  let fixture: ComponentFixture<SearchfreelancerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchfreelancerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchfreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
