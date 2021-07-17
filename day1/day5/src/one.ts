let message:string = "welcome to your life, there's no turning back";
// alert(message);
let userage:number = 20;
let avengers:Array<string> = ['Ironman', 'Hulk','Captain America'];


function adder(num1:number = 0, num2:number = 0): number{
    return num1 + num2;
}

let userdata:(string | number | boolean) = true;
let mydata:any = "hello";
document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("h1").innerHTML = message;
    document.querySelector("#num").innerHTML = userage.toString();
    document.querySelector("#arr").innerHTML = avengers.join('~');
})
