import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor( private fb: FormBuilder,private _snackBar: MatSnackBar) { 
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]

    })
  }

  ngOnInit(): void {
  }

  ingresar(){
    
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario);
    console.log(password);

    if (usuario=="admin" && password=="123"){
      //redireccion al dashboard
      this.fakeLoading();
    }else{
      //mensaje de error
      this.error();
      this.form.reset();
    }

  }

  error(){
    this._snackBar.open('Datos incorrectos','',{
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    })
  }


  fakeLoading(){
    this.loading=true;
    setTimeout(() => {

      
      //redireccion al dashboard
        this.loading=false;
    }, 1500);
  }


}

