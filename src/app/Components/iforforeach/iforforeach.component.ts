import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-iforforeach',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './iforforeach.component.html',
  styleUrl: './iforforeach.component.css'
})
export class IforforeachComponent {

  firstname: string = '';
  middlename: string = '';
  thirdname: string = '';
  yourname: string = '';
  countrycodelabel: string = '';
  proviceselect: boolean = false;
  pkprovice: boolean = false;
  indprovice: boolean = false;
  uaeprovice: boolean = false;
  banprovice: boolean = false;
  
  relegionoption : string[] = ['select','Islam','Christianity','Hindusm','Other'] ;

  branchlist : any[] = [
    {Id:11, ContryCode:'pk', LocationArea:'Karachi', IsAvtive: true} ,
    {Id:22, ContryCode:'ind', LocationArea:'Mumbai', IsAvtive: true} ,
    {Id:33, ContryCode:'uae', LocationArea:'Dubai', IsAvtive: true} ,
    {Id:44, ContryCode:'bd', LocationArea:'Dhaka', IsAvtive: true}    
  ];
 
  studlist : any[] = [
    {Id:11, Named:'Saim Khan', shift:'Morning', batch:'241224F', Avtive: true} ,
    {Id:112, Named:'Faraz Shahab', shift:'Evening',batch:'241225G', Avtive: true} ,
    {Id:113, Named:'Asad Ali', shift:'Afternoon',batch:'241225G', Avtive: false} ,
    {Id:114, Named:'Waqar Khan', shift:'Afternoon',batch:'241224F', Avtive: true} ,
    {Id:115, Named:'Sheikh Umer', shift:'morning',batch:'241226A', Avtive: true} ,
    {Id:116, Named:'Taha Siddiqui', shift:'Evening',batch:'241224F', Avtive: false} ,
    {Id:117, Named:'Faiq Khan', shift:'morning',batch:'241226A', Avtive: true} 
  ]

  btncountryclick(event: any) {
    const selectedValue = event.target.value;
    if (selectedValue === "pk") {

      this.proviceselect = true;
      this.pkprovice = true;
      this.countrycodelabel = '+92';
      this.indprovice = false;
      this.banprovice = false;
      this.uaeprovice = false;
    }
    else if (selectedValue === "ind") {
      this.pkprovice = false;
      this.proviceselect = true;
      this.indprovice = true;
      this.countrycodelabel = '+91';
      this.banprovice = false;
      this.uaeprovice = false;
    }

    else if (selectedValue === "uae") {
      this.uaeprovice = true;
      this.pkprovice = false;
      this.indprovice = false;
      this.banprovice = false;
      this.proviceselect = true;
      this.countrycodelabel = '+971';
    }
    else if (selectedValue === "bd") {
      this.uaeprovice = false;
      this.pkprovice = false;
      this.indprovice = false;
      this.banprovice = true;
      this.proviceselect = true;
      this.countrycodelabel = '+880';
    }
    else {
      this.countrycodelabel = '';
      this.proviceselect = false;
      this.indprovice = false;
      this.uaeprovice = false;
      this.pkprovice = false;
      this.banprovice = true;
      
    }
  }

}

export class IforforeachComponentfor {

  
} 
