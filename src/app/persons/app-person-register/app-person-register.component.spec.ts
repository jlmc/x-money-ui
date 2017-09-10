import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPersonRegisterComponent } from './app-person-register.component';

describe('AppPersonRegisterComponent', () => {
  let component: AppPersonRegisterComponent;
  let fixture: ComponentFixture<AppPersonRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPersonRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPersonRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
