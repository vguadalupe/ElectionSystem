import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginRequest, LoginResponseGenericResponse } from 'src/api/models';
import { AuthService } from 'src/api/services';
import { StrictHttpResponse } from 'src/api/strict-http-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  loginResponse!: StrictHttpResponse<LoginResponseGenericResponse>;
  loginRequest!: LoginRequest;
  constructor(
    private _authService: AuthService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    // This is intentional
  }

  ingresar(): void {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;
    console.log(usuario);
    console.log(password);
    this.loginRequest = { email: usuario, password: password };
    this.loading = true;
    this._authService
      .apiAuthLoginPost$Json$Response({ body: this.loginRequest })
      .subscribe(
        (res) => {
          this.loginResponse = res;
          if (this.loginResponse.status == 200) {
            localStorage.setItem('token', 'Bearer ' + res.body.content?.token!);
            this.loading = false;
            this.router.navigate(['dashboard']);
          }
        },
        (err) => {
          this.loading = false;
          this.error(err.error.message);
          this.form.reset();
        }
      );
  }

  error(message: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      duration: 5000,
    });
  }

  fakeLoading() {
    setTimeout(() => {
      //redireccion al dashboard
      // this.loading=false;
    }, 1500);
  }
}
