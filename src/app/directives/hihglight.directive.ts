import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.backgroundColor = 'gold'
    console.log(`* AppRoot highlight called for ${el.nativeElement.tagName}`)
  }

}
