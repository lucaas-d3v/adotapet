import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHeaderComponents } from './profile-header-components';

describe('ProfileHeaderComponents', () => {
  let component: ProfileHeaderComponents;
  let fixture: ComponentFixture<ProfileHeaderComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileHeaderComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileHeaderComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
