import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective implements OnChanges {
@Input()
color = 'yellow'

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('Se instancio la directiva appResaltado', this.elementRef);
    this.renderColor();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('No cambia al color:', this.color);
    this.renderColor();
  }

  renderColor(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.color);
  }

}
