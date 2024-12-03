import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient){}

  url_mostrar ="https://pokeapi.co/api/v2/pokemon/";

  getPokemon(name:String){
    return this.http.get(this.url_mostrar + name)
  }
}
