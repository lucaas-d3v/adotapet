import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponents } from './search-bar-components';

describe('SearchBarComponents', () => {
  let component: SearchBarComponents;
  let fixture: ComponentFixture<SearchBarComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBarComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
