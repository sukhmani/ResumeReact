import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'gen'
})
export class GenPipe implements PipeTransform{
    transform(arg1: any, arg2: any){
       if(arg2 == 'female'){
           return "Miss "+arg1;
       }else{
           return "Mr "+arg1;
       }
    }
}
