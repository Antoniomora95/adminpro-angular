import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private usuarioService: UsuarioService,
    private router: Router
    ) { }

  ngOnInit() {
    init_plugins();
    this.myForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(null, Validators.requiredTrue)
    },
    {validators: this.sonIguales('password', 'password2')}
    );
    this.myForm.setValue({
      nombre: 'test',
      correo: 'test@gmail.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }

  validate () {
    const result = [];
    Object.keys(this.myForm.controls).forEach(key => {
      console.log(key, 'key');
      const controlErrors: ValidationErrors = this.myForm.get(key).errors;
      if (controlErrors) {
        Object.keys(controlErrors).forEach(keyError => {
          console.log(keyError, 'keyE');
          result.push({
            'control ': key,
            'error': keyError,
            'value': controlErrors[keyError]
          });
        });
      }
  });
  return result;
  }
  sonIguales(campo1: string, campo2: string) {
    return (group: FormGroup) => {
      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;
      if (pass1 === pass2) {
        return null;
      }
      return {
        sonIguales: true
      };
    };
  }
  registrarUsuario () {
    if (!this.myForm.value.condiciones) {
      swal('Importante', 'Debe aceptar las condiciones', 'warning');
    }
    if (this.myForm.valid) {
      let usuario = new Usuario(
        this.myForm.value.nombre,
        this.myForm.value.correo,
        this.myForm.value.password
      );
      this.usuarioService.crearUsuario(usuario)
      .subscribe((observer) => {
        swal('Usuario creado', usuario.email, 'success').then( ok => {
          if (ok) { this.router.navigate(['/login']); }
        });
      }, (err) => console.log(err, 'error')
      , () => console.log('Done')
      );

    }
    console.log('valids', this.myForm.valid);
    console.log(this.myForm.value);
  }
}
