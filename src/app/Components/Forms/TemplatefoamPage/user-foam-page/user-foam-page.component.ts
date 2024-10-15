import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-foam-page',
  standalone: true,
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './user-foam-page.component.html',
  styleUrl: './user-foam-page.component.css'
})
export class UserFoamPageComponent {

Foamlistvalue  : any = {
  firstname : '' ,
  lastname : '' ,
  fathername: '',
  email : '' ,
  city : '' ,
  Statevalue:'',
  isaccept : false 
}
formvalue : any ;

btnsubmit() {
  
  this.formvalue = this.Foamlistvalue
}

}
