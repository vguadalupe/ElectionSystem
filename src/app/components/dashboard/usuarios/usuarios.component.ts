import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/api/services';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

//------------------------

//------------------

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  listUsuarios: Usuario[] = [];

  displayedColumns: string[] = [
    'usuario',
    'nombre',
    'apellido',
    'sexo',
    'acciones',
  ];
  dataSource!: MatTableDataSource<any>; //not null assertion

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _usuarioService: UsuarioService,
    private _userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this._userService.apiUsersGet$Json$Response({}).subscribe(
      (res) => {
        if (res.status == 200) {
          res.body.content?.listUser?.forEach((u) => {
            this.listUsuarios.push({
              nombre: u.firstName,
              apellido: u.firstLastName,
              sexo: '',
              usuario: u.userName,
            });
            this.dataSource = new MatTableDataSource(this.listUsuarios);
          });
        }
      },
      (err) => {}
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarUsuario(index: number) {
    console.log(index);
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuarios();

    this._snackBar.open('Usuario fue eliminado con éxito', '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 1500,
    });
  }
}
