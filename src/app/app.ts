import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponents } from "../components/header-components/header-components";
import { FooterComponents } from "../components/footer-components/footer-components";
import { LoginComponents } from "../components/login-components/login-components";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponents, FooterComponents, LoginComponents],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('adota-pet');
}
