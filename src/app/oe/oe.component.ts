import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oe',
  templateUrl: './oe.component.html',
  styleUrls: ['./oe.component.css']
})
export class OeComponent implements OnInit {


  nums: number[] = [12, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor() { }

  ngOnInit() {
    
  }

}
