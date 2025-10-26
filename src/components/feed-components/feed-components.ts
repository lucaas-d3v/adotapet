import { Component } from '@angular/core';
import { NavBarFeed } from '../under-nav-bar/nav-bar-feed';
import { PostComponents } from './post-components/post-components';
import { SearchBarComponents } from '../search-bar-components/search-bar-components';

@Component({
  selector: 'app-feed-components',
  imports: [NavBarFeed, PostComponents, SearchBarComponents],
  templateUrl: './feed-components.html',
  styleUrl: './feed-components.css',
})
export class FeedComponents {

}
