import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../app/services/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-profile-header-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-header-components.html',
  styleUrl: './profile-header-components.css', 
})
export class ProfileHeaderComponents implements OnInit {
  
  nome = "Carregando...";
  petsCadastrados = 0; 
  bio = "Usuário do AdotaPet"; 
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserProfile().subscribe({
      next: (dados: any) => {
        console.log("Perfil carregado:", dados);
        this.nome = dados.name;
      },
      error: (err: any) => {
        console.error("Erro ao carregar perfil", err);
        this.nome = "Visitante";
      }
    });
  }
}
