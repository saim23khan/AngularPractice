import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { observable,interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-page-pipe',
  standalone: true,
  imports: [AsyncPipe,JsonPipe,DatePipe,PercentPipe,LowerCasePipe,UpperCasePipe,TitleCasePipe],
  templateUrl: './page-pipe.component.html',
  styleUrl: './page-pipe.component.css'
})
export class PagePipeComponent {
uppercasevalue : string ='impossible';
wordline : string = 'you are good boy'
CurrentDate : Date = new Date;
currenttime : Observable<Date> = new Observable <Date>;

namearray : any ={
  Name:'Saim Khan' ,
  MobileNo : '0300-111111119',
  Gender : 'Male'
}
constructor (){
this.currenttime = interval(1000).pipe(map(() => new Date())) ;
}

}
