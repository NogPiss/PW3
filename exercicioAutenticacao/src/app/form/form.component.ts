import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AlertaComponent } from "../alerta/alerta.component";

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule, AlertaComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() validado : boolean = true;

  @Output() usuarioPadrao : string = "Saulo";
  senhaPadrao : string = "senha123";

  loginForm : FormGroup;

    constructor(private fb:FormBuilder){

      this.loginForm = this.fb.group({
        usuario : this.fb.control("Saulo"),
        senha : this.fb.control("senha123")
    });

    }

    OnAutenticar(){
      let usuario: string = this.loginForm.get('usuario')?.value;
      let senha: string = this.loginForm.get('senha')?.value;


      if(usuario != this.usuarioPadrao || senha != this.senhaPadrao){
        this.validado = false;
      }
      else{
        this.validado = true;
      }
    }
}
