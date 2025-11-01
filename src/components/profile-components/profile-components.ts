import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { NavBarFeed } from '../under-nav-bar/nav-bar-feed';
import { ProfileHeaderComponents } from "./profile-header-components/profile-header-components";

@Component({
  selector: 'app-profile-components',
  imports: [RouterOutlet, NavBarFeed, ProfileHeaderComponents],
  templateUrl: './profile-components.html',
  styleUrl: './profile-components.css',
})
export class ProfileComponents {
    @Input() user: string = '';

  buscarUsuarioNaBaseDeDados(username: string) {
    // Lógica para buscar o usuário na base de dados
    console.log(`Buscando usuário: ${username}`);
  }

}
