import { Component, Signal, input, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {

  // string, number , boolean , date

  CourseName: string = "Angular 18";
  RollNumber: number = 123;
  iseligible: boolean = false;
  CurrentDate: Date = new Date();
  inputType = "radio"

  // signal 

  Firstname = signal("SAIM MUHAMMAD KHAN SHAHID");


  constructor() {

  }

  btnclick(message: string) {
    alert(message)
  }
  chngeCourse(){
    this.CourseName='React JS'
  }

  // Signal changing

  chngename(){
    this.Firstname.set('HELLO SAIM GOOD')
  }
  dblchangename(){
    this.Firstname.set('Saim Khan Shahid')
  }

}
