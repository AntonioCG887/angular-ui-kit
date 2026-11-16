import { Component } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';

@Component({
  selector: 'app-cards',
  imports: [ComponentExamples, Customizer],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {

}
