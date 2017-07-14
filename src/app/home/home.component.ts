import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  host: {'class': 'hold-transition skin-blue layout-top-nav'},
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
  }

}
