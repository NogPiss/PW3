import { Component, Input } from '@angular/core';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-alerta',
  imports: [FormComponent],
  templateUrl: './alerta.component.html',
  styleUrl: './alerta.component.css'
})
export class AlertaComponent {
  @Input() validado : boolean;
  @Input() usuarioPadrao: string;

}
