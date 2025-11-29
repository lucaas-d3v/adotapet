import { Component, OnInit } from '@angular/core';
import { NavBarFeed } from '../nav-bar/nav-bar-feed';
import { PostComponents } from './post-components/post-components';
import { SearchBarComponents } from '../../shared/search-bar/search-bar-components';
import { PetService, PetCardInfo } from '../../../app/services/pet.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feed-components',
  imports: [NavBarFeed, PostComponents, SearchBarComponents, CommonModule],
  templateUrl: './feed-components.html',
  styleUrls: ['./feed-components.css'],
})
export class FeedComponents implements OnInit {

  pets: PetCardInfo[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.loadFeed();
  }

  loadFeed(): void {
    this.petService.getFeed().subscribe({
      next: (data: PetCardInfo[]) => {
        console.log("Dados do feed recebidos:", data);
        this.pets = data;
      },
      error: (err: any) => {
        console.error("Erro ao carregar o feed:", err);
      }
    });
  }
}
