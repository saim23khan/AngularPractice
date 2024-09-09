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
