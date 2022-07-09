import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Cool dog',
      url: 'https://media.istockphoto.com/photos/doberman-pinscher-picture-id948013218?b=1&k=20&m=948013218&s=170667a&w=0&h=x35PGIsZOb0UwnZsUx6iD5Avmm3skZI9S9mtIlKKuqI=',
    },
    {
      title: 'bmw m2',
      url: 'https://images.unsplash.com/photo-1593465234573-3a2b343ab4eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG0yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Tokyo',
      url: 'https://media.istockphoto.com/photos/alley-of-memories-picture-id1345059895?b=1&k=20&m=1345059895&s=170667a&w=0&h=GZqveavDWugpz0j5JbxAh6NrCUwgGhtBVs267RWUS3Y=',
    },
    {
      title: 'Piano',
      url: 'https://images.unsplash.com/photo-1479118013749-9f79d55a28d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBpYW5vfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
      title: 'Technology',
      url: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
    },
  ];
}
