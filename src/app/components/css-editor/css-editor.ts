import { Component, input } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-css-editor',
  imports: [],
  templateUrl: './css-editor.html',
  styleUrl: './css-editor.css',
})
export class CssEditor {

  

  cssCode = input.required<string>();
    

  async copyCSS(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.cssCode());
    } catch (error) {
      console.error('Unable to copy CSS:', error);
    }
  }
}
