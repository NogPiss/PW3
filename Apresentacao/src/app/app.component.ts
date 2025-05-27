import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteBootstrapComponent } from './teste-bootstrap/teste-bootstrap.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TesteBootstrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Apresentacao';
}
