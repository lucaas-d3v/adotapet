import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { PetService } from '../../../app/services/pet.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // <--- Importante para *ngIf, *ngFor

@Component({
  selector: 'app-pet-create',
  templateUrl: './create-pet.html',
  styleUrls: ['./create-pet.css'],
  standalone: true, 
  imports: [        
    CommonModule, 
    ReactiveFormsModule 
  ]
})
export class PetCreateComponent {
  petForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private petService: PetService,
    private router: Router
  ) {
    this.petForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      species: ['', Validators.required], // Ex: Cachorro, Gato
      age: [null, Validators.required],
      size: ['', Validators.required], // Pequeno, Médio, Grande
      imageUrl: [''] // Campo de texto simples para URL da foto (MVP)
    });
  }

  onSubmit() {
    if (this.petForm.valid) {
      this.petService.createPet(this.petForm.value).subscribe({
        next: () => {
          alert('Pet cadastrado com sucesso!');
          this.router.navigate(['/feed']);
        },
        error: (err) => {
          console.error(err);
          alert('Erro ao cadastrar pet.');
        }
      });
    }
  }
}