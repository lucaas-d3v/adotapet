import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-components',
  imports: [],
  templateUrl: './footer-components.html',
  styleUrl: './footer-components.css',
})
export class FooterComponents {
  anoAtual: number = new Date().getFullYear();

}
