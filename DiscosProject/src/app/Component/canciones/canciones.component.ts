import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Disco } from '../../Entidad/Disco';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-canciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canciones.component.html',
  styleUrl: './canciones.component.css'
})
export class CancionesComponent {
  router = inject(Router);
  service = inject(ServicioService);
  disco!:Disco;

  ngOnInit(){
    this.service.mascanciones().subscribe(respuesta =>{
      console.log("Recibiendo datos");
      if(respuesta.success){
        this.disco = respuesta.obj;
      }
      else{
        alert(respuesta.msg)
      }
    })
  }
}
