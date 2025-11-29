import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface profilePosts {
  id?: string | number;
  nome?: string;
  idade?: string;
  imagem?: string;
}
@Component({
  selector: 'app-profile-post-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-post-components.html',
  styleUrl: './profile-post-components.css',
})
export class ProfilePostComponents {
  @Input() pets: profilePosts[] = [];
  readonly defaultImage = 'assets/exemplo-pet.jpg';  

}

