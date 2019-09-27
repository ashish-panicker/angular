import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {

  @Input("num1") number1:number;
  @Input("num2") number2:number;

  constructor() { }

  ngOnInit() {
  }

}
