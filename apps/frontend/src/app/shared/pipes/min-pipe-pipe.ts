import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min',
  standalone: true,
})
export class MinPipe implements PipeTransform {
  transform(a: number, b: number): number {
    return Math.min(a, b);
  }
}
