import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseBehaviourSubjectComponent } from './use-behaviour-subject.component';

describe('UseBehaviourSubjectComponent', () => {
  let component: UseBehaviourSubjectComponent;
  let fixture: ComponentFixture<UseBehaviourSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseBehaviourSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UseBehaviourSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
