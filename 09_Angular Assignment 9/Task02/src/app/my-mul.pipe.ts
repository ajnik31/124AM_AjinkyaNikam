import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myMul',
  standalone: true
})
export class MyMulPipe implements PipeTransform {

  transform(value: number,param:number): number {
    return value*param;
  }

}
