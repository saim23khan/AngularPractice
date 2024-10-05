import { Pipe, PipeTransform } from '@angular/core';
import { hasLift } from 'rxjs/internal/util/lift';

@Pipe({
  name: 'na',
  standalone: true
})
export class NaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value !== null && value !== undefined && value !== ''){
      return value;
    } else {
      return 'NA';
    }
    
  }

}
