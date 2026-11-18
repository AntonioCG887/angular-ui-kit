import { Component } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';



@Component({
  selector: 'app-modals',
  imports: [ComponentExamples, Customizer],
  templateUrl: './modals.html',
  styleUrl: './modals.css',
})
export class Modals {

}
