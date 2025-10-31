import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCcomponents } from './register-ccomponents';

describe('RegisterCcomponents', () => {
  let component: RegisterCcomponents;
  let fixture: ComponentFixture<RegisterCcomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCcomponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCcomponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
