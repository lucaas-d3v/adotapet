import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComponents } from './post-components';

describe('PostComponents', () => {
  let component: PostComponents;
  let fixture: ComponentFixture<PostComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
