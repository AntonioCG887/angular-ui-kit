import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-examples',
  imports: [],
  templateUrl: './component-examples.html',
  styleUrl: './component-examples.css',
  encapsulation: ViewEncapsulation.None
})
export class ComponentExamples {
  componentType = input.required<string>();
  componentDesc = input.required<string>();
}
