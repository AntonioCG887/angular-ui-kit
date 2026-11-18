import { Component } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';


@Component({
  selector: 'app-navs',
  imports: [ComponentExamples, Customizer],
  templateUrl: './navs.html',
  styleUrl: './navs.css',
})
export class Navs {

}
