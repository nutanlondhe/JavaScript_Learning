var num1 = "100";
var num2 = "200";
var num3 = "300"; 
console.log(num1,num2,num3);

var temp = num1
num1=num2;
num2=num3;
num3=temp;

console.log("After swipe");
console.log(num1,num2,num3);

var sweet = num1;
num1=num2;
num2=num3;
num3=sweet;

console.log("After swap");
console.log(num1,num2,num3);

var sweety = num1;
num1=num2;
num2=num3;
num3=sweety;

console.log("After swap");
console.log(num1,num2,num3);
  
 session 10 vowel

for (let index = 0; index < 10 ; index++) {
    if(index==5){
        break;
    }
        console.log(index);
    }

    for (let index = 0; index < 10 ; index++) {
        if(index==2){
            continue;
        }
            console.log(index);
        }