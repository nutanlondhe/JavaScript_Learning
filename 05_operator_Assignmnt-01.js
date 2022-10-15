console.log(".............01................")
var wordLengthSquare = function(Word){
    var wordLength = Word.longth;
    console.log(`Given word "Javascript"`);
    console.log("Length of given word :",wordLength);
    return wordLength * wordLength;
}
console.log("Length of square of given word :", wordLengthSquare("Javascript"));

console.log("-----------------------------------------------");

var wordlengthSquare= function (word){
    var wordLength= word.length;
    console.log(`Given word "Google"`);
    console.log("Length of given word ;",wordLength );
    return wordLength* wordLength
}
console.log("Length of Square of given word :", wordLengthSquare("Google"));

console.log("-----------------------------------");

var wordLengthSquare = function (word) {
    var wordLength = word.length;
    console.log(`Given word "Developer"`);
    console.log("Length of given word :",wordLength );
    return wordLength* wordLength;
}
console.log("Length of square of given word :", wordLengthSquare("Developer"));

console.log("*************02**********");
var str = "I am Angular Developer";
console.log(str);
var len = str.length;
console.log("Given string length :" ,len);
var spl = str.split(" ")
console.log("The total no. of words available in given string",spl.length);
var result = len/spl.length;
var result1 = len*spl.length;
console.log("String length divided by total no. of word in given string :",result);
console.log("String length into total no. of word in given string :",result);
