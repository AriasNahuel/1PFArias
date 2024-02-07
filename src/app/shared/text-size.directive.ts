import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextSize]'
})
export class TextSizeDirective implements OnInit {
  @Input()
  size = '200px'; // Set the default size to '20px'

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('Directive appTextSize instantiated', this.elementRef);
  }

  ngOnInit(): void {
    this.renderSize();
  }

  renderSize(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.size);
  }
}
