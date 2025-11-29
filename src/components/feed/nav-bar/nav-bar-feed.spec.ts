import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFeed } from './nav-bar-feed';

describe('NavBarFeed', () => {
  let component: NavBarFeed;
  let fixture: ComponentFixture<NavBarFeed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavBarFeed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarFeed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
