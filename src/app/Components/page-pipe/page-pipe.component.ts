import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { observable,interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../Na-Pipe/na.pipe';

@Component({
  selector: 'app-page-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe,PercentPipe,LowerCasePipe,UpperCasePipe,TitleCasePipe],
  templateUrl: './page-pipe.component.html',
  styleUrl: './page-pipe.component.css'
})
export class PagePipeComponent {
uppercasevalue : string ='impossible';
wordline : string = 'you are good boy'
CurrentDate : Date = new Date;
currenttime : Observable<Date> = new Observable <Date>;
City : string = 'Karachi';
Cityna : string = '';

namearray : any ={
  Name:'Saim Khan' ,
  MobileNo : '0300-111111119',
  Gender : 'Male' ,
  City : 'Karachi'
}
constructor (){
this.currenttime = interval(1000).pipe(map(() => new Date())) ;
}

}
