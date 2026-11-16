import { Component, ViewEncapsulation } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';


@Component({
  selector: 'app-buttons',
  imports: [ComponentExamples, Customizer],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'
  
})
export class Buttons {

}
