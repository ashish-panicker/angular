import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage:string;
  dt:Date

  constructor() { 

  }

  ngOnInit() {
    this.dt = new Date();
    setInterval(() => {
      let dt = new Date()
      this.dateMessage = dt.toDateString() + "  " + dt.toTimeString();
    }, 1000);
          
  }

}
