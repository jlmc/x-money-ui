import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppActivityRegisterComponent } from './app-activity-register.component';

describe('AppActivityRegisterComponent', () => {
  let component: AppActivityRegisterComponent;
  let fixture: ComponentFixture<AppActivityRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppActivityRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppActivityRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
