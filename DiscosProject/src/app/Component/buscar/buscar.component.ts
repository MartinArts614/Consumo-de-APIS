import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Disco } from '../../Entidad/Disco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  router = inject(Router);
  service = inject(ServicioService);
  mismoArt!: Disco;
  
  buscarart(artista:String){
    if(artista == ''){
      alert("Debe ingresar un artista para buscar")
    }
    else{
      this.service.buscarartista(artista).subscribe(respuesta => {
        console.log("Recibiendo datos");
        if(respuesta.success){
          this.mismoArt=respuesta.obj;
        }
        else{
          alert(respuesta.msg)
        }
      })
    }
  }

 
}
