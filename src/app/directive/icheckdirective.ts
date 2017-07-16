
import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs';
declare var $: any;

@Directive({
  selector: '[appIcheck]'
})
export class IcheckDirective {

  $: any = $;
  constructor(private el: ElementRef) {
    this.$(el.nativeElement).iCheck({
      checkboxClass: 'icheckbox_square-blue',
      radioClass: 'iradio_square-blue',
      increaseArea: '20%'
    })
  }

}