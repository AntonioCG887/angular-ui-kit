import { Component, computed, effect, signal } from '@angular/core';
import { ComponentExamples } from '../../../components/component-examples/component-examples';
import { Customizer } from '../../../components/customizer/customizer';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-buttons',
  imports: [ComponentExamples, Customizer, FormsModule],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css'

})
export class Buttons {
  currentPadding = signal<number>(12);
  currentRadius = signal<number>(20);
  selectedSize = signal<string>('m');

  primaryBtnStyle: string =
    `.ngui-btn-primary {
    border-radius: 20px;
    font-size: 16px;
    padding: 12px 24px;
    border: none;        
    font-weight: bold;
    background: #f5bd3f;
}`;

  secondaryBtnStyle: string =
    `.ngui-btn-secondary {
    border-radius: 20px;
    font-size: 16px;
    padding: 12px 24px;
    border: 1px solid #292b36;    
    color: #c6c6c6;        
    background: #11131a;
}`;
  outlineBtnStyle: string =
    `.ngui-btn-outline {
    border-radius: 20px;
    font-size: 16px;
    padding: 12px 24px;
    border: 2px solid #f5bd3f;
    color: #f5bd3f;
    background: #0e0f15;
}`;
  dangerBtnStyle: string =
    `.ngui-btn-danger {
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;    
    color: #D19090;
    background: #851818;
}`;
  successBtnStyle: string =
    `.ngui-btn-success {
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;    
    color: #90D190;
    background: #698550;
}`;
  warningBtnStyle: string =
    `.ngui-btn-warning {
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;    
    color: #D1C790;
    background: #857B50;
}`;
  ghostBtnStyle: string =
    `.ngui-btn-ghost {
    border-radius: 20px;
    font-size: 16px;    
    padding: 12px 24px;
    border: 1px solid #292b36;
    color: #c6c6c6;
    background: #0e0f15;
}`;


  setStyle(variant: number) {
    switch (variant) {
      case 1:
        this.selectedStyle.set(this.primaryBtnStyle);
        break;

      case 2:
        this.selectedStyle.set(this.secondaryBtnStyle);
        break;

      case 3:
        this.selectedStyle.set(this.outlineBtnStyle);
        break;

      case 4:
        this.selectedStyle.set(this.dangerBtnStyle);
        break;

      case 5:
        this.selectedStyle.set(this.successBtnStyle);
        break;

      case 6:
        this.selectedStyle.set(this.warningBtnStyle);
        break;

      case 7:
        this.selectedStyle.set(this.ghostBtnStyle);
        break;
    }
    this.changeSize(this.selectedSize(), false);
  }

  changeSize(size: string, applyPadding: boolean = true) {
    switch (size) {
      case 's':
        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty("font-size:"), "font-size: 12px;"));
        if (applyPadding)
          this.currentPadding.set(6);

        break;

      case 'm':
        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty("font-size:"), "font-size: 16px;"));
        if (applyPadding)
          this.currentPadding.set(12);
        break;

      case 'l':
        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty("font-size:"), "font-size: 27px;"));
        if (applyPadding)
          this.currentPadding.set(16);
        break;
    }
    this.selectedSize.set(size);
  }

  constructor() {
    effect(
      () => {

        if (!this.currentRadius()) {
          this.currentRadius.set(0);
        } else if (this.currentRadius() > 100) {
          this.currentRadius.set(100);
        }

        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty("border-radius:"), "border-radius: " + this.currentRadius() + "px;"));
      }
    );

    effect(() => {

      if (!this.currentPadding()) {
        this.currentPadding.set(0);
      } else if (this.currentPadding() > 100) {
        this.currentPadding.set(100);
      }

      this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty("padding:"), "padding: " + this.currentPadding() + "px " + this.currentPadding() * 2 + "px;"));
    });
  }


  extractCSSProperty(property: string): string {

    var cssProperty: string = "";
    var styleLines: string[] = this.selectedStyle().split("\n");

    styleLines.forEach(styleLine => {
      if (styleLine.includes(property)) {
        cssProperty = styleLine;
      }
    });
    //Returns the entire CSS Style , based on the property name passed as a parameter
    return cssProperty.trim();
  }


  selectedStyle = signal<string>(this.primaryBtnStyle);
  selectedStyleInline = computed(() => this.selectedStyle().substring(this.selectedStyle().indexOf("{", 0) + 1, this.selectedStyle().length - 1).replace('\n', ''));

}
