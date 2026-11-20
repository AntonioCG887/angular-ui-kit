import { Component, input, ViewEncapsulation } from '@angular/core';
import { CssEditor } from '../css-editor/css-editor';

@Component({
  selector: 'section [app-customizer]',
  imports: [CssEditor],
  templateUrl: './customizer.html',
  styleUrl: './customizer.css',
  encapsulation: ViewEncapsulation.None
})
export class Customizer {
  title = input.required<string>();  
  cssCode = input.required<string>();
  htmlCode = input.required<string>();
}
