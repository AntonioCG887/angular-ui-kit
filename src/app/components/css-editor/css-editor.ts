import { Component, input } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-css-editor',
  imports: [],
  templateUrl: './css-editor.html',
  styleUrl: './css-editor.css',
})
export class CssEditor {


  cssTabOpened = signal<boolean>(true);
  cssCode = input.required<string>();
  htmlCode = input.required<string>();

  async copyCSS(copyCss: boolean): Promise<void> {
    try {
      if(copyCss)
        await navigator.clipboard.writeText(this.cssCode());
      else
        await navigator.clipboard.writeText(this.htmlCode());
    } catch (error) {
      console.error('Unable to copy:', error);
    }
  }

  changeTab(openCssTab:boolean){

    this.cssTabOpened.set(openCssTab);
  }
}
