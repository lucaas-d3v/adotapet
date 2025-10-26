import { Component } from '@angular/core';
import { LoginComponents } from '../../components/login-components/login-components';
import { FooterComponents } from "../../components/footer-components/footer-components";
import { HeaderComponents } from "../../components/header-components/header-components";

@Component({
  selector: 'app-login',
  imports: [LoginComponents, FooterComponents, HeaderComponents],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
