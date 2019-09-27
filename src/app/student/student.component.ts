import { Component, OnInit, Input } from '@angular/core';
import { Student } from './student.modal'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input("desc") description:string;
  @Input("expiry") expiry:string;

  students:Student[] = [];

  constructor() { }

  ngOnInit() {
    this.students.push(new Student(1, "Akhil", "akhil@gmail.com"));
    this.students.push(new Student(2, "Sajal", "sajal@gmail.com"));
    this.students.push(new Student(3, "Rahul", "rahul@gmail.com"));
  }

}
