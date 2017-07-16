import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  statusForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.statusForm = fb.group({
      'status': ['']
    });
  }

  ngOnInit() {
  }

}
