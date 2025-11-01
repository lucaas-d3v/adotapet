import { Component, Input } from '@angular/core';
import { PostComponents } from "../../feed-components/post-components/post-components";

@Component({
  selector: 'app-profile-header-components',
  imports: [PostComponents],
  templateUrl: './profile-header-components.html',
  styleUrl: './profile-header-components.css',
})
export class ProfileHeaderComponents {
  nome = "João Pedro";
  petsCadastrados = 5; // exemplo de dado que deve vir do banco
  bio = "Apaixonado por animais e defensor dos direitos dos pets.";

  listaPets = [
    { nome: 'Rex', idade: '2 anos' },
    { nome: 'Luna', idade: '1 ano' },
    { nome: 'Milo', idade: '3 anos' },
    { nome: 'Bella', idade: '4 anos' },
    { nome: 'Charlie', idade: '5 anos' }
  ];


}
