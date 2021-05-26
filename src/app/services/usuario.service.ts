import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "aguadalupe", nombre: 'Adrian', apellido: "Guadalupe", sexo: 'H'},
    {usuario: "bgranda", nombre: 'Belen', apellido: "Granda", sexo: 'M'},
    {usuario: "nperez", nombre: 'Nicole', apellido: "Perez", sexo: 'M'},
    {usuario: "dcardenas", nombre: 'Danny', apellido: "Cardenas", sexo: 'H'},
    {usuario: "larenas", nombre: 'Luisa', apellido: "Arenas", sexo: 'M'},
    {usuario: "japonte", nombre: 'Juan', apellido: "Aponte", sexo: 'H'},
    {usuario: "vbravo", nombre: 'Vinicio', apellido: "Bravo", sexo: 'H'},
  ];
  

  constructor() { }
  getUsuario(){
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }
}
