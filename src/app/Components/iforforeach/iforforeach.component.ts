import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

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
  showbtn : boolean = false;
  showdetailbtn : boolean =false;
  
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

  marklist : any [] = [
    {rollno:123451, Named:'Saim Khan',     shift:'Morning', Math:66, Physics:50, Chemistry:98,Computer:66,ObtainNumber:280,Totalmarks:400,Percentage:'70%'} ,
    {rollno:123452, Named:'Asad Ali',      shift:'Evening', Math:54, Physics:45, Chemistry:55,Computer:56,ObtainNumber:210,Totalmarks:400,Percentage:'52.5%'} ,
    {rollno:123453, Named:'Waqar Ali',     shift:'Morning', Math:77, Physics:66, Chemistry:78,Computer:78,ObtainNumber:299,Totalmarks:400,Percentage:'74.75%'} ,
    {rollno:123454, Named:'Dilshad Ahmer', shift:'Morning', Math:89, Physics:73, Chemistry:87,Computer:98,ObtainNumber:347,Totalmarks:400,Percentage:'86.75%'} ,
    {rollno:123455, Named:'Ashar Siddiqui',shift:'Evening', Math:45, Physics:89, Chemistry:67,Computer:45,ObtainNumber:246,Totalmarks:400,Percentage:'61.5%'} ,
    {rollno:123456, Named:'Shahzaib Khan', shift:'Evening', Math:78, Physics:76, Chemistry:54,Computer:87,ObtainNumber:295,Totalmarks:400,Percentage:'73.75%'} ,
    {rollno:123457, Named:'Waleed Ansari', shift:'Morning', Math:68, Physics:67, Chemistry:44,Computer:55,ObtainNumber:234,Totalmarks:400,Percentage:'58.5%'} 
   
  ]
  constructor(private router : Router){
    
  }

  navigatetoAddemployee(){
    this.router.navigateByUrl("addemployee1")
  }

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

  marksreportshow(event:any){
    this.showbtn = true ;
  }

  marksreportnotshow(event: any){
    this.showbtn = false ;
  }

  stddetailshow(event:any){
    this.showdetailbtn = true ;
  }

  stddetailnotshow(event: any){
    this.showdetailbtn = false ;
  }

  getbackgroundcolor(Percentage: string): string{
    const numericPercentage = parseFloat(Percentage.replace('%', ''));

    if (numericPercentage >= 80){
      return 'green';
    }
    else if(numericPercentage == 79 || numericPercentage >=70 ){
     return 'GreenYellow'
    }
    else if(numericPercentage == 69 || numericPercentage>=60){
     return 'DarkViolet'
    }
    else if(numericPercentage == 59 || numericPercentage>=50){
      return 'Magenta'
     }
    else{
      return 'red' ;
    }
  }
}

export class IforforeachComponentfor {

  
} 
