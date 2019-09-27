import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit {

  @Input("a") strNum1:string;
  @Input("b") strNum2:string;

  num1:number;
  num2:number;

  nums:number[] = [];

  constructor() { }

  ngOnInit() {
    this.num2 = parseInt(this.strNum2);
    this.num1 = parseInt(this.strNum1);

    for (let index = 1; index <= this.num2; index++) {
      this.nums.push(index);
    }
  }

}
