import { Routes } from '@angular/router';
import { ListarComponent } from './Component/listar/listar.component';
import { GuardarComponent } from './Component/guardar/guardar.component';
import { EditarComponent } from './Component/editar/editar.component';
import { EliminarComponent } from './Component/eliminar/eliminar.component';
import { BuscarComponent } from './Component/buscar/buscar.component';
import { CancionesComponent } from './Component/canciones/canciones.component';
import { GeneroComponent } from './Component/genero/genero.component';


export const routes: Routes = [
    {path:"listar", component: ListarComponent},
    {path:"guardar", component: GuardarComponent},
    {path:"editar", component: EditarComponent},
    {path:"eliminar", component: EliminarComponent},
    {path:"canciones", component : CancionesComponent},
    {path:"artista", component: BuscarComponent},
    {path:"genero", component:GeneroComponent}
];
