import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  text = 'The Angular CLI makes it easy to create an application that already works, right out of the box.';
  ts: any;
  constructor() { }

  ngOnInit() {
  }

}
