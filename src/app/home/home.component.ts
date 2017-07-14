import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  host: {'class': 'hold-transition skin-blue layout-top-nav'},
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private router: Router, fb: FormBuilder) {
    this.searchForm = fb.group({
      'keyword': ['']
    });
  }
  ngOnInit() {
  }

}
