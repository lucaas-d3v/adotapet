import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Pet {
    id: string;
    name: string;
    age: number | null;
    species: string;
    breed: string;
    photos: string[];
}

export interface PetCardInfo {
 id: string;
    nome: string;
    idade: string;
    imagem: string;
    owner?: { phoneNumber: string };  
    ong?: { phoneNumber: string };    
}

@Injectable({
  providedIn: 'root'
})
export class PetService {
    private api = 'http://localhost:5293';

    constructor(private http: HttpClient){}

    createPet(petData: any): Observable<any> {
        return this.http.post(`${this.api}/pets`, petData);
    }

    getFeed(): Observable<PetCardInfo[]> {
        return this.http.get<any>(`${this.api}/feed`).pipe(
            map(response => {
                const pets: Pet[] = (response && response.$values) ? response.$values : response;

                return pets.map(pet => this.transformToCardInfo(pet));
            })
        );
    }

    private transformToCardInfo(pet: Pet): PetCardInfo {
        const baseUrl = 'http://localhost:5293';
        const photosUrl = (pet.photos && pet.photos.length > 0)
            ? `${baseUrl}${pet.photos[0]}`
            : 'assets/exemplo-pet.avif';

        return {
            id: pet.id,
            nome: pet.name,
            idade: pet.age ? `${pet.age} anos` : 'Idade não informada',
            imagem: photosUrl
        };
    }
}
