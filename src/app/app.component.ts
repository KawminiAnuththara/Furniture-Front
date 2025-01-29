import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoAngularMaterial } from './DemoAngularMaterial';

@Component({
  selector: 'app-root',
  imports: 
  [ 
    RouterOutlet,
    DemoAngularMaterial,
    RouterModule

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'furnitureE';
}
