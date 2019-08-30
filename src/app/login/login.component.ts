import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
declare function init_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  recuerdame: boolean = false;
  email: string;
  auth2: any;

  constructor(private router: Router,
    private usuarioServce: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
   this.email =  localStorage.getItem('email') || '';
   if (this.email.length) {
     this.recuerdame = true;
   }
}
  // Inicializar google signIn
  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        'client_id': '62773079746-9uq8u5jb1egc63dd2skq7s3iaicpjf7r.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignIn(document.getElementById('btnGoogle'));
    });
  }
  // Al hacer click en boton google
  attachSignIn (element) {
    this.auth2.attachClickHandler(element, {}, googleUser => {
       let profile = googleUser.getBasicProfile();
      let token = googleUser.getAuthResponse().id_token;
      console.log(token, profile);
    },
    err => console.log('Error en attachSignIn') + err);
  }
  ingresa(form: NgForm) {

    if (!form.valid) {
      return;
    }
    let usuario: Usuario = new Usuario(
      null,
      form.value.email,
      form.value.password
    );
    this.usuarioServce.login(usuario, form.value.recuerdame).
    subscribe((response) => this.router.navigate(['/dashboard']).then);
  }
   // this.router.navigate(['/dashboard']);
}
