import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(ships: any, searchData: string): any {
    if(!searchData){
      return ships;
    }
    else{
      const s = searchData.trim().toLowerCase();
      return ships.filter((data: any)=>{
        return JSON.stringify(data).toLowerCase().includes(s);
      })
    }
  }

}
