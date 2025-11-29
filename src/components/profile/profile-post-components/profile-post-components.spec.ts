import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePostComponents } from './profile-post-components';

describe('ProfilePostComponents', () => {
  let component: ProfilePostComponents;
  let fixture: ComponentFixture<ProfilePostComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilePostComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePostComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
