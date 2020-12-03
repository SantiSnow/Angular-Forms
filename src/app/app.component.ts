import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    
  }

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
