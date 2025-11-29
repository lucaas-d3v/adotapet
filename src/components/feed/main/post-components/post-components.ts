import { Component, Input } from '@angular/core';
import { PetCardInfo } from '../../../../app/services/pet.service';

@Component({
  selector: 'app-post-components',
  standalone: true,
  imports: [],
  templateUrl: './post-components.html',
  styleUrl: './post-components.css',
})
export class PostComponents {
  @Input() pets: PetCardInfo[] = [];

readonly defaultImage = 'assets/exemplo-pet.jpg';

contactOwner(pet: any) {
  const phone = pet.owner?.phoneNumber || pet.ong?.phoneNumber;

  if (!phone){
    alert('Número de telefone não disponível.');
    return;
  }

  const cleanPhone = phone.replace(/\D/g, '');

  const message = `Olá! Vi o pet *${pet.nome}* no AdotaPet e tenho interesse em adotá-lo!`;

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/55${cleanPhone}?text=${encodedMessage}`, '_blank');
}
}