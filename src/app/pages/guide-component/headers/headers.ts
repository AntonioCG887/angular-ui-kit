import { Component } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';



@Component({
  selector: 'app-headers',
  imports: [ComponentExamples, Customizer],
  templateUrl: './headers.html',
  styleUrl: './headers.css',
})
export class Headers {

}
