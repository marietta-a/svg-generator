import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {SVGFigureDimensions} from '../../core/svgFigureDimension';
import { SvgServiceService } from '../../services/svg-service.service';

@Component({
  selector: 'app-svg-generator',
  standalone: true,
  imports: [
  ],
  providers: [
    SvgServiceService
  ],
  templateUrl: './svg-generator.component.html',
  styleUrl: './svg-generator.component.css'
})
export class SvgGeneratorComponent implements OnInit {
  fillColor = 'rgb(255, 0, 0)';
  svgDimension: SVGFigureDimensions = {
    Width: 0,
    Height: 0
  }
  wRange = new FormControl(150);
  hRange = new FormControl(100);
  p: number = this.getPerimenter(this.svgDimension.Width, this.svgDimension.Height);

  constructor(private srv: SvgServiceService){
     
  }
  ngOnInit(): void {
     this.srv.getSVGDimensions().subscribe((data: any) => {
      this.svgDimension.Height = parseInt(data.height);
      this.svgDimension.Width = parseInt(data.width);
     })
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
    this.svgDimension.Width = parseInt(newValue);
    this.createDimensions();
  }

  heightChanged(e: any){
    const newValue = (e.target as HTMLInputElement).value;
    this.svgDimension.Height = parseInt(newValue);
    this.createDimensions();
  }

  createDimensions(){
     this.srv.createSVGDimensions(this.svgDimension).subscribe((value: any) => {
       console.log(value);
     });
  }
}
