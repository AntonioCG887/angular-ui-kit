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
  variants: string[] = [
    `.ngui-btn-primary {
    color: #000000;
    border-radius: 20px;
    font-size: 16px;
    padding: 12px 24px;
    border: none;        
    font-weight: bold;
    background: #f5bd3f;
}`,


    `.ngui-btn-secondary {
    border-radius: 20px;
    font-size: 16px;
    padding: 12px 24px;
    border: 1px solid #292b36;    
    color: #c6c6c6;        
    background: #11131a;
}`,

    `.ngui-btn-outline {
    border-radius: 20px;
    font-size: 16px;
    padding: 12px 24px;
    border: 2px solid #f5bd3f;
    color: #f5bd3f;
    background: #0e0f15;
}`,

    `.ngui-btn-danger {
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;    
    color: #D19090;
    background: #851818;
}`,

    `.ngui-btn-success {
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;    
    color: #90D190;
    background: #698550;
}`,

    `.ngui-btn-warning {
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;    
    color: #D1C790;
    background: #857B50;
}`,

    `.ngui-btn-ghost {
    border-radius: 20px;
    font-size: 16px;    
    padding: 12px 24px;
    border: 1px solid #292b36;
    color: #c6c6c6;
    background: #0e0f15;
}`
  ]

  selectedVariant = signal<number>(0);
  currentPadding = signal<number>(12);
  currentRadius = signal<number>(20);
  textColor = signal<string>("#000000");
  bgColor = signal<string>("#f5bd3f");
  selectedSize = signal<string>('m');
  selectedStyle = signal<string>(this.variants[this.selectedVariant()]);
  selectedStyleInline = computed(() => this.selectedStyle().substring(this.selectedStyle().indexOf("{", 0) + 1, this.selectedStyle().length - 1).replace('\n', ''));

  setStyle(variant: number) {
    this.selectedVariant.set(variant);
    this.selectedStyle.set(this.variants[this.selectedVariant()]);
    this.changeSize(this.selectedSize(), false);

    var cssProperty: string = this.extractCSSProperty(this.selectedStyle(), "background:");
    this.bgColor.set(cssProperty.substring(cssProperty.indexOf(":") + 1, cssProperty.length - 1).trim());

    cssProperty = this.extractCSSProperty(this.selectedStyle(), "color:");
    this.textColor.set(cssProperty.substring(cssProperty.indexOf(":") + 1, cssProperty.length - 1).trim());
  }

  resetPropertyToDefault(property: string) {

    var variantDefaultProperty: string = this.extractCSSProperty(this.variants[this.selectedVariant()], property);
    var currentColor: string = this.extractCSSProperty(this.selectedStyle(), property);

    // If the color/background was reset without changing it we don't need to change anything.
    if (currentColor !== variantDefaultProperty) {

      switch (property) {
        
        case "color:":
          this.textColor.set(variantDefaultProperty.substring(variantDefaultProperty.indexOf(":") + 1, variantDefaultProperty.length - 1).trim());
          break;

        case "background:":
          this.bgColor.set(variantDefaultProperty.substring(variantDefaultProperty.indexOf(":") + 1, variantDefaultProperty.length - 1).trim());
          break;

        case "padding:":
          var size = 0;
          if (this.selectedSize() === 's'){
            size = 6;
          } else if (this.selectedSize() === 'm'){
            size = 12;
          }else{
            size = 16;
          }
          this.currentPadding.set(size);
          break;

        case "border-radius:":
          this.currentRadius.set(20);
          break;
      }

    }

  }

  changeSize(size: string, applyPadding: boolean = true) {
    switch (size) {
      case 's':
        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty(this.selectedStyle(), "font-size:"), "font-size: 12px;"));
        if (applyPadding)
          this.currentPadding.set(6);
        break;

      case 'm':
        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty(this.selectedStyle(), "font-size:"), "font-size: 16px;"));
        if (applyPadding)
          this.currentPadding.set(12);
        break;

      case 'l':
        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty(this.selectedStyle(), "font-size:"), "font-size: 27px;"));
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
        this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty(this.selectedStyle(), "border-radius:"), "border-radius: " + this.currentRadius() + "px;"));
      }
    );

    effect(() => {
      if (!this.currentPadding()) {
        this.currentPadding.set(0);
      } else if (this.currentPadding() > 100) {
        this.currentPadding.set(100);
      }
      this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty(this.selectedStyle(), "padding:"), "padding: " + this.currentPadding() + "px " + this.currentPadding() * 2 + "px;"));
    });

    effect(() => {
      if (!this.textColor() || this.textColor() === "") {
        this.textColor.set("#000000");
      }
      this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty(this.selectedStyle(), "color:"), "color: " + this.textColor() + ";"));
    });

    effect(() => {
      if (!this.bgColor() || this.bgColor() === "") {
        this.bgColor.set("#FFFFFF");
      }
      this.selectedStyle.set(this.selectedStyle().replace(this.extractCSSProperty(this.selectedStyle(), "background:"), "background: " + this.bgColor() + ";"));
    });
  }


  extractCSSProperty(cssStyles: string, propertyToExtract: string): string {

    var cssProperty: string = "";
    var styleLines: string[] = cssStyles.split("\n");

    styleLines.forEach(styleLine => {
      if (styleLine.includes(propertyToExtract)) {
        cssProperty = styleLine;
      }
    });
    //Returns the entire CSS Style , based on the property name passed as a parameter
    return cssProperty.trim();
  }

}
