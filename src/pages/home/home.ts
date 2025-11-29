import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponents } from "../../components/shared/header/header-components";
import { LoginComponents } from "../../components/auth/login/login-components";
import { RegisterComponents } from "../../components/auth/register/register-components";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, HeaderComponents, LoginComponents, RegisterComponents],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  showLogin = false;
  animateLogin = false;
  showRegister = false;
  animateRegister = false;

  toggleLogin() {
    if (!this.showLogin) {
      this.openLogin();
    } else {
      this.closeLogin();
    }
  }
  
  openLogin(){
    this.closeRegister();
    this.showLogin = true;
    
    setTimeout(() => {
      this.animateLogin = true;
      document.body.classList.add('no-scroll');
    }, 200);
    
  }

  closeLogin() {
    this.animateLogin = false;
    document.body.classList.remove('no-scroll');
  
    setTimeout(() => {
      this.showLogin = false;
    }, 200);
  }

  toggleRegister() {
    if (!this.showRegister) {
      this.openRegister();
    } else {
      this.closeRegister();
    }
  }
  
  openRegister(){
    this.closeLogin();
    this.showRegister = true;

    setTimeout(() => {
        this.animateRegister = true;
        document.body.classList.add('no-scroll');
      }, 200);
  }

  closeRegister() {
    this.animateRegister = false;
    document.body.classList.remove('no-scroll');

    setTimeout(() => {
      this.showRegister = false;
    }, 200);
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  const footer = document.querySelector('.novo-footer') as HTMLElement;
  
  if (scrollPosition > 100) { // mostra após rolar 100px
    footer?.classList.add('visible');
  } else {
    footer?.classList.remove('visible');
  }
}
}
