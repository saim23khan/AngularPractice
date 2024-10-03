import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-controlflowif',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './controlflowif.component.html',
  styleUrl: './controlflowif.component.css'
})
export class ControlflowifComponent {
  btnchk : boolean = false ;
  nametxtbox : string ='' ;
  chkgendercase : string ='' ;
  batchtxtget : string = '';
  
 studentlistfor: string [] = ['Saim Khan','Waqar Ali','Asad Ali','Dilshad Ahmer'] ;

 detaillistofstdnt : any[] =[
    {Id:11, Named:'Saim Khan', shift:'Morning',     batch:'241224F', Active: true} ,
    {Id:112, Named:'Faraz Shahab', shift:'Evening', batch:'241226G', Active: true} ,
    {Id:113, Named:'Asad Ali', shift:'Afternoon',   batch:'241235G', Active: false} ,
    {Id:114, Named:'Waqar Khan', shift:'Afternoon', batch:'241224F', Active: true} ,
    {Id:115, Named:'Sheikh Umer', shift:'morning',  batch:'241226A', Active: true} ,
    {Id:116, Named:'Taha Siddiqui', shift:'Evening',batch:'241224F', Active: false} ,
    {Id:117, Named:'Faiq Khan', shift:'morning',    batch:'241226A', Active: true} 
 ]

  btnclickname(){
    this.btnchk = !this.btnchk ;
  }
}
