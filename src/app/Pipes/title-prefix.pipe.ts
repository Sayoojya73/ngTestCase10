import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlePrefix',
  standalone: true
})
export class TitlePrefixPipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender.toLowerCase() === 'male') {
      return 'Mr. ' + name;
    } else if (gender.toLowerCase() === 'female') {
      return 'Miss. ' + name;
    } else {
      return name;
    }
  }

}
