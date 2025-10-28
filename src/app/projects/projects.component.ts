import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Connect4Game',
      image: '/connect4.jpg',
      description:
        'A simple Connect 4 game built with HTML, CSS, and JavaScript. Player vs player (PvP) player vs player (PvE) modes available.',
      technologies: 'HTML, CSS, JavaScript',

      githubLink: 'https://github.com/blankk019/connect4Game',
    },
    {
      name: 'Todo App',
      image: '/toDoList.jpg',
      description: 'A simple and responsive todo application to manage tasks.',
      technologies: 'HTML, CSS, JavaScript',
      githubLink: 'https://github.com/blankk019/To-do-list-App',
    },

    {
      name: 'Weather App',
      image: '/wapp.jfif',
      description:
        'Real-time weather dashboard fetching API data for multiple cities.',
      technologies: 'JavaScript, HTML, CSS, APIs',
      githubLink: 'https://github.com/blankk019/weather-App',
    },

    {
      name: 'The Bankist App',
      image: '/bankist.png',
      description:
        'Real-time weather dashboard fetching API data for multiple cities.',
      technologies: 'JavaScript, HTML, CSS, APIs',
      githubLink: 'https://github.com/blankk019/Bankist-responsive-site',
    },
  ];
}
