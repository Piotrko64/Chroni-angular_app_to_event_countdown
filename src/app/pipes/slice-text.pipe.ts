import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceText',
})
export class SliceTextPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 29) {
      return value.slice(0, 26) + '...';
    } else return value;
  }
}
