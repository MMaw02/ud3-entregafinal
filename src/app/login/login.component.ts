import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensaje: String = '';

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  onSubmit() {

    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    if (username == 'Anthony' && password == "75437010") {
      Swal.fire({
        icon: 'success',
        title: 'Ingresaste con éxito',
        showConfirmButton: false,
        timer: 1000
      });
      this.mensaje = '';

      setTimeout(() => {
        this.router.navigate(["Home"]);
      }, 2000);

    } else {
      this.mensaje = "Usuario o contraseña incorrecto";
    }
  }
}
