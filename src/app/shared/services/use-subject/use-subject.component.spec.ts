import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseSubjectComponent } from './use-subject.component';

describe('UseSubjectComponent', () => {
  let component: UseSubjectComponent;
  let fixture: ComponentFixture<UseSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
