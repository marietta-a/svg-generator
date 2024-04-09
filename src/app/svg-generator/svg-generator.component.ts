import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-svg-generator',
  standalone: true,
  imports: [
  ],
  templateUrl: './svg-generator.component.html',
  styleUrl: './svg-generator.component.css'
})
export class SvgGeneratorComponent {
  fillColor = 'rgb(255, 0, 0)';
  w: number = 150;
  wRange = new FormControl(150);
  h: number = 100;
  hRange = new FormControl(100);
  p: number = this.getPerimenter(this.w, this.h);

  constructor(){
    
  }

  changeColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.fillColor = `rgb(${r}, ${g}, ${b})`;
  }
  
  getPerimenter(width: number, height: number){
    return (width + height) * 2;
  }

  widthChanged(e: any){
    const newValue = (e.target as HTMLInputElement).value;
    this.w = parseInt(newValue);
  }

  heightChanged(e: any){
    const newValue = (e.target as HTMLInputElement).value;
    this.h = parseInt(newValue);
  }
}
