import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms'; // Removido Validators se não estiver usando
import { CommonModule } from '@angular/common'; 
import { UserService } from '../../../app/services/user.service'; // <--- 1. Importe o Service

@Component({
  selector: 'app-register-ccomponents',
  standalone: true, 
  imports: [
    ReactiveFormsModule,
    CommonModule 
  ],
  templateUrl: './register-components.html',
  styleUrl: './register-components.css'
})
export class RegisterComponents {

  erros: any = {}; 

  @Output() loginRequested = new EventEmitter<void>();

  cadastro = new FormGroup({
    nome: new FormControl(''),
    telefone: new FormControl(''),
    whatsappCheck: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    confirmarSenha: new FormControl('') 
  });

  constructor(private userService: UserService) {}

  register() {
    this.erros = {};
    let formularioValido = true;
    const valores = this.cadastro.value;

    // Validações 
    for (const campo of this.camposParaValidacao) {
      const formControlName = campo.FormControl; 
      const valorDoCampo = valores[formControlName as keyof typeof valores];

      if (!valorDoCampo) {
        this.erros[formControlName] = 'Este campo é obrigatório.';
        formularioValido = false;
        continue; 
      }

      if (!campo.metodoValidacao(valorDoCampo)) {
        this.erros[formControlName] = campo.mensagemErro;
        formularioValido = false;
      }
    }

    const senha = valores.senha || '';
    const confirmarSenha = valores.confirmarSenha || '';

    if (!this.confirmarSenha(senha, confirmarSenha)) {
      this.erros['confirmarSenha'] = 'As senhas não coincidem.';
      formularioValido = false;
    }

    // 3. Se estiver tudo certo, chama o Backend
    if (formularioValido) {
      
      this.userService.cadastrar(valores).subscribe({
        next: (res: any) => {
          alert('Cadastrado com sucesso! Faça login para continuar.');
          console.log('Resposta do servidor:', res);
          this.cadastro.reset();
          
          // Redireciona para a tela de login (usando o evento que já existe)
          this.loginRequested.emit();
        },
        error: (err: any) => {
          console.error('Erro no cadastro:', err);
          
          // Lógica de verificação do erro
          if (err.status === 400 || err.status === 409 || err.status === 500) {
            // Verifica se a mensagem do backend menciona o email ou "Duplicate"
            if (JSON.stringify(err.error).toLowerCase().includes('email') || 
                JSON.stringify(err.error).toLowerCase().includes('duplicate')) {
              alert('ERRO: Este email já está cadastrado no sistema.');
            } else {
              alert('Ocorreu um erro ao cadastrar. Verifique os dados.');
            }
          } else {
            alert('Erro de conexão com o servidor.');
          }
        }
      });

    } else {
      console.log('Formulário inválido. Erros:', this.erros);
    }
  }

  // ... (Mantenha o restante dos seus métodos: onWhatsappChange, validações, etc)
  onWhatsappChange(option: 'sim' | 'nao', event: Event) {
    const input = event.target as HTMLInputElement;
    this.cadastro.patchValue({
      whatsappCheck: input.checked ? option : null
    });
  }

  isNomeValido(nome: string) {
    const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{6,}$/;
    return nomeRegex.test(nome);
  }

  isTelefoneValido(telefone: string) {
    const padraoTelefone = /^\s*\(?\d{2}\)?\s*(\d{4,5}[-.\s]?\d{4})\s*$/;
    return padraoTelefone.test(telefone);
  }

  isEmailValido(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isSenhaValida(senha: string) {
    const senhaRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;
    return senhaRegex.test(senha);
  }

  confirmarSenha(senha: string, confirmarSenha: string) {
    return senha === confirmarSenha;
  }

  closeRegisterOpenLogin(event?: Event) {
    event?.preventDefault();
    this.loginRequested.emit();
  }

  readonly camposParaValidacao = [
    { FormControl: 'nome', metodoValidacao: this.isNomeValido, mensagemErro: 'Nome inválido. Use apenas letras e espaços.' },
    { FormControl: 'telefone', metodoValidacao: this.isTelefoneValido, mensagemErro: 'Telefone inválido. Use o formato correto.' },
    { FormControl: 'email', metodoValidacao: this.isEmailValido, mensagemErro: 'Email inválido. Use um formato válido.' },
    { FormControl: 'senha', metodoValidacao: this.isSenhaValida, mensagemErro: 'Senha inválida. 8-20 caracteres, 1 maiúscula e 1 número.' }
  ];
}