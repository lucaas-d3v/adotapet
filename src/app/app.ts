import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { HeaderComponents } from "../components/header-components/header-components";
import { FooterComponents } from "../components/footer-components/footer-components";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('adota-pet');
}
