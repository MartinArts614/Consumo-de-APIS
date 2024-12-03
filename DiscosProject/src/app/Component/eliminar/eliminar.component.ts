import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from '../../Service/servicio.service';
import { Disco } from '../../Entidad/Disco';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  router = inject(Router);
  service = inject(ServicioService);
  disco!:Disco;

  ngOnInit(){
    this.disco = JSON.parse(String(localStorage.getItem("disco")))
  }

  eliminar(){
    this.service.eliminar(this.disco).subscribe(data => {
      alert(data.msg);
      if(data.success){
        this.router.navigate(["listar"])
      }
    })
  }
}
