import { Component } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';


@Component({
  selector: 'app-inputs',
  imports: [ComponentExamples, Customizer],
  templateUrl: './inputs.html',
  styleUrl: './inputs.css',
})
export class Inputs {

}
