import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight], input'
})
export class HighlightDirective {

  constructor(
    private el: ElementRef
  ) {
    el.nativeElement.style.backgroudColor = "poderblue"
    console.log(
      `* Contact heighlight called for ${el.nativeElement.tagName}`
    )
  }

}
