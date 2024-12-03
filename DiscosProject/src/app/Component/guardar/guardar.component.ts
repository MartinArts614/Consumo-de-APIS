import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Disco } from '../../Entidad/Disco';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guardar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './guardar.component.html',
  styleUrl: './guardar.component.css'
})
export class GuardarComponent {
  router = inject(Router)
  service = inject(ServicioService);
  disco:Disco = new Disco;

  guardar(){
    if(this.disco.id == null){
      alert("El ID es obligatorio");
    }
    else if(this.disco.nombre == null){
      alert("El nombre no debe estar vacío");
    }
    else if(this.disco.artista == null){
      alert("El artista no debe estar vacío");
    }
    else if(this.disco.numcanciones == null){
      alert("El número de canciones no puede estar vacío");
    }
    else if(this.disco.idioma == null){
      alert("El idioma no puede estar vacío");
    }
    else if(this.disco.genero == null){
      alert("El genero no puede estar vacío");
    }
    else{
      this.service.guardar(this.disco).subscribe(data => {
        alert(data.msg);
        if(data.success){
          this.router.navigate(["listar"])

        }
      })
    }
  }
}
