import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DiscosProject';

  constructor(private router : Router){}

  mostrar(){
    this.router.navigate(["listar"]);
  }

  guardar(){
    this.router.navigate(["guardar"]);
  }

  maxcanciones(){
    this.router.navigate(["canciones"]);
  }

  buscarartista(){
    this.router.navigate(["artista"]);
  }

  buscargenero(){
    this.router.navigate(["genero"])
  }

}
