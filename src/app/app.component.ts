import { Component } from '@angular/core';
import { PrimeComponent } from './prime/prime.component';
import { store } from '@angular/core/src/render3';

function log(target: any, name: any, descriptor: any){
  //console.log(target, name, descriptor);
  //store the original function in a variable
  const org=descriptor.value;
  //do some manipulation with descirptor.value
  descriptor.value= (...args: number[]) => {
    console.log("this Function was hacked to modify the Orginal ", args);
    const result = org.apply(this, args);
    console.log("Function result is ", result);
    return result;
  }
  //Return back the descriptor
  return descriptor
}

// function test(className){
//   console.log(className);
//   return (...args: number[])=>{
//     console.log("Arguments passed to the Constructor are", args); 
//     return new className(...args);
//   }
// }


// @test 
// class MyClass{
//   constructor(arg1: number, arg2: number){
//     console.log("MyClass Constructor invoked");
//   }
// }
// const m= new MyClass(2,5);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular 7';

constructor() {
  console.log("In AppComponent Class constructor ", this.simpleMethod(20, 10));
 }

@log
  simpleMethod(inp: number, mul: number){
    console.log('simple Method. Hello!! Num applied: ' + inp*mul);
    return inp*mul;
  }
}
