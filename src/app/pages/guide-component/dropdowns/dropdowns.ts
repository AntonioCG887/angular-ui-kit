import { Component } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';

@Component({
  selector: 'app-dropdowns',
  imports: [ComponentExamples, Customizer],
  templateUrl: './dropdowns.html',
  styleUrl: './dropdowns.css',
})
export class Dropdowns {

}
