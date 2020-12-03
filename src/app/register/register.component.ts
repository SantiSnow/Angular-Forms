import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  agregarUsuario(nombre, apellido, edad, email){

    console.log(nombre.value);
    console.log(apellido.value);
    console.log(edad.value);
    console.log(email.value);

    return false;
  }

  borrarCampos(nombre, apellido, edad, email){
    nombre.value = "";
    apellido.value = "";
    edad.value = ""; 
    email.value = "";

    return false;
  }

}
