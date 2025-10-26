import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { FooterComponents } from "../../components/footer-components/footer-components";
import { HeaderComponents } from "../../components/header-components/header-components";

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, RouterLinkWithHref, FooterComponents, HeaderComponents],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
