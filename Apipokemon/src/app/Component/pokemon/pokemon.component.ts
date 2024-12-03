import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../Service/pokemon.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit {

  name!:String;
  url_image!:String;

  constructor(private pokemonService : PokemonService){}

  ngOnInit(): void {
      
  }

  search(){
    this.pokemonService.getPokemon(this.name).subscribe((data:any) => {
      console.log(data)
      this.url_image = data.sprites.front_default
      
    })
  }


}
