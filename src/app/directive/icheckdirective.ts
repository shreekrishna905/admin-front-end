
import {Directive, ElementRef} from '@angular/core';
declare var $: any;

@Directive({
  selector: '[appIcheck]'
})
export class IcheckDirective {

  $: any = $;
  constructor(el: ElementRef) {
    this.$(el.nativeElement).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'
    })
  }

}