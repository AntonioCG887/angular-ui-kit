import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'section [app-customizer]',
  imports: [],
  templateUrl: './customizer.html',
  styleUrl: './customizer.css',
  encapsulation: ViewEncapsulation.None
})
export class Customizer {
  title = input.required<string>();
  subtitle = input.required<string>();
}
