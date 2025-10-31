import { Component } from '@angular/core';
import { HeaderComponents } from "../../components/header-components/header-components";
import { FooterComponents } from '../../components/footer-components/footer-components';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { RegisterCcomponents } from '../../components/register-ccomponents/register-ccomponents';



@Component({
  selector: 'app-register',
  imports: [HeaderComponents, FooterComponents, RouterOutlet, RouterLinkWithHref, RegisterCcomponents],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

}
