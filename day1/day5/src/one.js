var message = "welcome to your life, there's no turning back";
// alert(message);
var userage = 20;
var avengers = ['Ironman', 'Hulk', 'Captain America'];
function adder(num1, num2) {
    if (num1 === void 0) { num1 = 0; }
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
}
var userdata = true;
var mydata = "hello";
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("h1").innerHTML = message;
    document.querySelector("#num").innerHTML = userage.toString();
    document.querySelector("#arr").innerHTML = avengers.join('~');
});
