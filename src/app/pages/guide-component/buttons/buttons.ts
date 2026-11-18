import { Component, ViewEncapsulation } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';
import { CssEditor } from '../../../components/css-editor/css-editor';


@Component({
  selector: 'app-buttons',
  imports: [ComponentExamples, Customizer,CssEditor],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
  
})
export class Buttons {

}
