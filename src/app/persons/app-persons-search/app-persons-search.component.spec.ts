import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPersonsSearchComponent } from './app-persons-search.component';

describe('AppPersonsSearchComponent', () => {
  let component: AppPersonsSearchComponent;
  let fixture: ComponentFixture<AppPersonsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPersonsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPersonsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
