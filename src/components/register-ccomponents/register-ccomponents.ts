import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-ccomponents',
  imports: [ReactiveFormsModule],
  templateUrl: './register-ccomponents.html',
  styleUrl: './register-ccomponents.css',
})
export class RegisterCcomponents {

  cadastro = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    whatsappCheck: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  });

}
