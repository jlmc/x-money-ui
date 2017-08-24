import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActivitiesSearchComponent } from './app-activities-search.component';

describe('AppActivitiesSearchComponent', () => {
  let component: AppActivitiesSearchComponent;
  let fixture: ComponentFixture<AppActivitiesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppActivitiesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppActivitiesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
