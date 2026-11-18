import { Component } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-css-editor',
  imports: [],
  templateUrl: './css-editor.html',
  styleUrl: './css-editor.css',
})
export class CssEditor {
  cssCode = signal(`
  .ngui-button {
    background: #D6A64F;
    color: #171717;
    padding: 10px 24px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
  }
    `.trim());

  async copyCSS(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.cssCode());
    } catch (error) {
      console.error('Unable to copy CSS:', error);
    }
  }
}
