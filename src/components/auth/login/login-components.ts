import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-components',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule 
  ],
  templateUrl: './login-components.html',
  styleUrls: ['./login-components.css'],
})

export class LoginComponents {
  erros: any = {}; 

  @Output() registerRequested = new EventEmitter<void>();

  login = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    whatsappCheck: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl('') 
  });

  constructor(private userService: UserService, private router: Router) {}

  logar() {
    const email = this.login.get('email')?.value;
    const password = this.login.get('senha')?.value;


    if (!email || !password) {
      return;
    }

    this.userService.login(email, password)
      .subscribe({
        next: () => {
          console.log("Logado com sucesso!");
          this.router.navigate(['/feed']);
        },
        error: (err: any) => {
          console.log("Erro ao logar:", err);
          alert("Usuário ou senha inválidos.");
        }
      });
      
  }

  closeLoginOpenRegister(event: Event) {
    event.preventDefault();
    this.registerRequested.emit();
  }
}
