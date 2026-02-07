import { ChangeDetectorRef, Directive, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAphaNumeric]',
})
export class AphaNumeric {

  constructor(private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: any) {
    let rawValue = event.target.value;
    let sanitizedValue = rawValue.replace(/[^a-zA-Z0-9 ]/g, '');
    console.log(sanitizedValue)
    if (rawValue !== sanitizedValue) {
      this.renderer.setProperty(event.target, 'value', sanitizedValue)
    }
  }

}
