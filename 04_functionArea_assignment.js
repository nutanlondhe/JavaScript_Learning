console.log("=============functionExp===============")
console.log("Area Of Square");
var square=function(value)
{
    console.log(value*value);
}
square(5);

console.log("Area Of Square");
var square=function(value)
{
    console.log(value*value);
}
square(6);
console.log("Area Of Square");
var square=function(value)
{
    console.log(value*value);
}
square(25);
console.log("Area Of Square");
var square=function(value)
{
    console.log(value*value);
}
square(100);
console.log("=========Area of triagle=========");

console.log("Area Of Triagle");
var triangle=function(base,height)
{
    console.log(base*height/2);
}
triangle(45,34);

console.log("Area Of Rectangle");
var rectangle=function(length,width)
{
    console.log(length*width);
}
rectangle(499,917);

console.log("Area of Circle");
var circle = function(radius){
    var pi = 3.14;
    console.log(pi*radius*radius);
}
circle(12);
    
function swap_values(arg1,arg2){
    console.log("=======================Befor Swap=======================");
    console.log(arg1,arg2);
    var temp =arg1;
    arg1=arg2;
    arg2=temp;
    console.log("=======================After Swap=======================");
    console.log(arg1,arg2);
}
swap_values ("Virat","Anushka");
swap_values (1000,2000);

console.log("========================================");

console.log("Javascript the most popular language");
var text= function(count){
    console.log(count.length);
}
var count = "Javascript the most popular language";
text(count);

console.log("Using the inbuild function charAt()");
var search = function(count){
    console.log(count.charAt(34));
    console.log(count.charAt(0));
}
var text = function (count){
    console.log(count.length);
}
 console.log("================charAt===============");
 var search=function(count){
    console.log(count.charAt(12));
    console.log(count.charAt(11));
 }
 search(count);

 