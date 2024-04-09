import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SvgGeneratorComponent } from './svg-generator/svg-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SvgGeneratorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'svg-generator';
}
