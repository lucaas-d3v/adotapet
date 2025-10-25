import { Component } from '@angular/core';
import { HeaderComponents } from "../../components/header-components/header-components";
import { FooterComponents } from "../../components/footer-components/footer-components";

@Component({
  selector: 'app-login',
  imports: [HeaderComponents, FooterComponents],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
