import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-components',
  standalone: true,
  imports: [],
  templateUrl: './post-components.html',
  styleUrl: './post-components.css',
})
export class PostComponents {
  @Input() nomePet: string = '';
  @Input() idadePet: string = '';

  ngOnChanges() {
    console.log('[PostComponents] nomePet changed ->', this.nomePet);
    console.log('[PostComponents] idadePet changed ->', this.idadePet);
    if (!this.nomePet) {
      this.nomePet = 'Nome Pet Padrão';
    }
    if (!this.idadePet) {
      this.idadePet = 'Idade Pet Padrão';
    }
  }
}
