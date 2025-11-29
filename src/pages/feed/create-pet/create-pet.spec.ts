import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component } from '@angular/core';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.html',
  styleUrls: ['./create-pet.css']
})
export class CreatePet {
}

describe('CreatePet', () => {
  let component: CreatePet;
  let fixture: ComponentFixture<CreatePet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
