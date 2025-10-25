import { Component } from '@angular/core';
import { HeaderComponents } from "../../components/header-components/header-components";
import { FooterComponents } from "../../components/footer-components/footer-components";
import { LoginComponents } from '../../components/login-components/login-components';

@Component({
  selector: 'app-login',
  imports: [HeaderComponents, FooterComponents, LoginComponents],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
