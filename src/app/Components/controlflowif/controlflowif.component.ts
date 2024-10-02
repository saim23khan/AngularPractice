import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflowif',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './controlflowif.component.html',
  styleUrl: './controlflowif.component.css'
})
export class ControlflowifComponent {
  btnchk : boolean = false ;
  nametxtbox : string ='' ;
  chkgendercase : string ='' ;
  
  btnclickname(){
    this.btnchk = !this.btnchk ;
  }
}
