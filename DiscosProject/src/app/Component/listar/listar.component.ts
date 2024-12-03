import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Disco } from '../../Entidad/Disco';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  router = inject(Router);
  service = inject(ServicioService);
  discos!: Disco[];
  mismoArt!: Disco[];
  mismoGen!: Disco[];

  ngOnInit(){
    this.service.mostrar().subscribe(respuesta => {
      console.log("Recibiendo datos");
      if(respuesta.success){
        this.discos = respuesta.obj;
      }
      else{
        alert(respuesta.msg);
      }
    })
  }

  editar(disco:Disco){
    let json= JSON.stringify(disco);
    localStorage.setItem("disco", json);
    this.router.navigate(["editar"]);
  }

  eliminar(disco:Disco){
    localStorage.setItem("disco", JSON.stringify(disco));
    this.router.navigate(["eliminar"]);
  }

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

  buscargen(genero:String){
    if(genero == ''){
      alert("Debe ingresar un genero para buscar")
    }
    else{
      this.service.buscargenero(genero).subscribe(respuesta => {
        console.log("Recibiendo datos");
        if(respuesta.success){
          this.mismoGen=respuesta.obj;
        }
        else{
          alert(respuesta.msg)
        }
      })
    }
  }
}


