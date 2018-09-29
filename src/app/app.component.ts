import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Slider Background Bind';

  redSlider: number;
  blueSlider: number;
  greenSlider: number;

  static normalize(n): number {
    return (n / 100) * 255;
  }

  ngOnInit(): void {
    this.redSlider = 0;
    this.blueSlider = 0;
    this.greenSlider = 0;
  }

  changeHeaderColor(): any {
      return { 'color' :
          `rgb(${256 - AppComponent.normalize(this.redSlider)}` +
          `,${256 - AppComponent.normalize(this.blueSlider)},${256 - AppComponent.normalize(this.greenSlider)})` };
  }

  changeStyle(): any {
    return { 'background' :
        `rgb(${AppComponent.normalize(this.redSlider)}` +
        `,${AppComponent.normalize(this.blueSlider)},${AppComponent.normalize(this.greenSlider)})` };
  }
}
