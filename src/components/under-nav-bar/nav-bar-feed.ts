import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-nav-bar-feed',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './nav-bar-feed.html',
  styleUrl: './nav-bar-feed.css',
})
export class NavBarFeed {

}
