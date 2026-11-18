import { Component } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';



@Component({
  selector: 'app-footers',
  imports: [ComponentExamples, Customizer],
  templateUrl: './footers.html',
  styleUrl: './footers.css',
})
export class Footers {

}
