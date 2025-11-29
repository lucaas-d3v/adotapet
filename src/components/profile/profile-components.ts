import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarFeed } from '../feed/nav-bar/nav-bar-feed';
import { ProfileHeaderComponents } from "./profile-header-components/profile-header-components";
import { ProfilePostComponents } from './profile-post-components/profile-post-components';

@Component({
  selector: 'app-profile-components',
  standalone: true,
  imports: [RouterOutlet, NavBarFeed, ProfileHeaderComponents, ProfilePostComponents],
  templateUrl: './profile-components.html',
  styleUrl: './profile-components.css',
})
export class ProfileComponents {
    @Input() user: string = '';

  buscarUsuarioNaBaseDeDados(username: string) {
    // Lógica para buscar o usuário na base de dados
    console.log(`Buscando usuário: ${username}`);
  }
  pets = [
    { 
      nome: 'Rex', 
      idade: '2 anos', 
      imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      nome: 'Luna', 
      idade: '5 meses', 
      imagem: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      nome: 'Thor', 
      idade: '3 anos', 
      imagem: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      nome: 'Mel', 
      idade: '1 ano', 
      imagem: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=1000&auto=format&fit=crop' 
    },
    { 
      nome: 'Bob', 
      idade: '4 anos', 
      imagem: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop' 
    }
  ];

}
