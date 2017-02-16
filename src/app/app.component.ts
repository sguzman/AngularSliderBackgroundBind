import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = "Slider Background Bind";

  redSlider: number;
  blueSlider: number;
  greenSlider: number;

  ngOnInit(): void {
    this.redSlider = 0;
    this.blueSlider = 0;
    this.greenSlider = 0;
  }

  normalize(n): number {
      return (n / 100) * 255;
  }

  changeHeaderColor(): any {
      return { 'color' : `rgb(${256 - this.normalize(this.redSlider)},${256 - this.normalize(this.blueSlider)},${256 - this.normalize(this.greenSlider)})` }
  }

  changeStyle(): any {
    return { 'background' : `rgb(${this.normalize(this.redSlider)},${this.normalize(this.blueSlider)},${this.normalize(this.greenSlider)})` }
  }
}
