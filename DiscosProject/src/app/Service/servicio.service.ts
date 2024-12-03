import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Respuesta } from '../Entidad/Respuesta';
import { Disco } from '../Entidad/Disco';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  http = inject(HttpClient);
  url_mostrar = "http://localhost:9001/Disco/mostrar";
  url_guardar = "http://localhost:9001/Disco/guardar";
  url_editar = "http://localhost:9001/Disco/editar";
  url_eliminar = "http://localhost:9001/Disco/eliminar";
  url_mascanciones = "http://localhost:9001/Disco/maxCanciones";
  url_buscarartista = "http://localhost:9001/Disco/buscarArtista";
  url_buscargenero = "http://localhost:9001/Disco/mostrarGenero";

  mostrar(){
    return this.http.get<Respuesta>(this.url_mostrar);
  }
  guardar(disco:Disco){
    return this.http.post<Respuesta>(this.url_guardar, disco);
  }
  editar(disco:Disco){
    return this.http.post<Respuesta>(this.url_editar, disco);
  }
  eliminar(disco:Disco){
    return this.http.post<Respuesta>(this.url_eliminar, disco);
  }
  mascanciones(){
    return this.http.get<Respuesta>(this.url_mascanciones);    
  }
  buscarartista(artista:String){
    return this.http.post<Respuesta>(this.url_buscarartista,artista);
  }
  buscargenero(genero:String){
    return this.http.post<Respuesta>(this.url_buscargenero,genero);
  }

}
