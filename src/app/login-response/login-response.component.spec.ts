import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginResponseComponent } from './login-response.component';

describe('LoginResponseComponent', () => {
  let component: LoginResponseComponent;
  let fixture: ComponentFixture<LoginResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginResponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
