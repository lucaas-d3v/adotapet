import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private api = 'http://localhost:5293';

    constructor(private http: HttpClient){}

    login(email:string, password:string){
        return this.http.post<{token:string }>(`${this.api}/login`, {
            email,
            password
        }).pipe(
            tap((response) => {
                sessionStorage.setItem('token', response.token);
            })
        );
    }

    cadastrar(dados: any) {
        // Simple validation or transformation if needed
        const payload = {
            Name: dados.nome,
            Email: dados.email,
            Password: dados.senha,
            UserType: 1, // Default to adopter/regular user
            Phone: dados.telefone,
            HasWhatsapp: dados.whatsappCheck === 'sim'
        };

        return this.http.post(`${this.api}/users`, payload);
    }

    getToken(){
        return sessionStorage.getItem('token');
    }

    logout(){
        sessionStorage.removeItem('token');
    }

    getUserProfile(){
        return this.http.get(`${this.api}/me`);
    }
}
