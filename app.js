//variable..............................................................//
let a = 5;

console.log(a);

var b = "Hello";
console.log(b);

let $x = "Rohan";
let _y = $x;
console.log(_y);

//
var p = "Ram";
var p= "Hari";
console.log(p);
//
const r = 5;

//
// let name = "phuke";
// name = "ph--ke";
// console.log(nmae);


//Uncaught ReferenceError: nmae is not defined

//Data types...............................................................//

//1. Primitive Datatypes
//a. numbers
let num1 = 50;
console.log(typeof num1);

//b. string

let str = "phuke";
console.log(typeof str);
//c. Boolean

let status = true;
console.log(typeof status);
//d. null
let s = null;
console.log(typeof s);


//e. undefined
let u;
console.log(typeof u);

//2. Non Premitive Dtatypes
//a. object
//b. array
//c. function


//......................Explicit................................................//

result = 'hello'+2;
console.log(result);
console.log(typeof result);

result1 = "hello" - 2;
console.log(result1);
console.log(typeof result1);


//......................Explicit................................................//
test = '3'
test=Number(test)
console.log(test)
console.log(typeof test)

test1 = true;
test1 = String(test1);
console.log(test1);
console.log(typeof test1);

test2 = 400.034;
test2 = parseInt(test2);
console.log(test2);
console.log(typeof test2);

//.........................operator.......................................//
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 ** 5);
console.log(11 % 5);

//postfix--->
let n = 5;

console.log(n++);
//prefix
let n1 = 5;
 
console.log(++n1);


//comperasion operator:
a = 5;
b = 6;
console.log(a == b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);


a1 = true;
b1 = 1;
console.log(a1 === b1);
console.log(a1 !== b1);

//logical or
console.log(2 > 3 || 5 > 4);
console.log(2 > 3 && 5 > 4);
console.log(!false);
//conditional operator:

let y = 19;
let name = "y";
if (y >= 18) {
    if (name == "jhon") {
       console.log("you are eligible");  
    }
    else {
        console.log("name not matched");

    }
   
}
else {
    console.log("not-eleigible");
}

//switch catch

let choice = 9;

switch (choice) {
    case 1:
        console.log("this is 1");
        break;
    case 2:
        console.log("this is 2");
        break;
    case 3:
        console.log("this is 3");
        break;
    default:
        console.log("unvalid");
}

//loop

//1. for loop

//for(intialization; condition; incr/dec){
//        statement;
//}

for (var i = 0; i < 20; i++) {
    console.log("hello");
}

for (var i = 0; i <= 10; i++) {
  console.log("2 x "+i+"="+2*i);
}


for (var i = 0; i <= 10; i++) {
  console.log(`3 x ${i} = ${3*i}`);
}

//while loop
var i = 1;
while (i <= 10) {
    console.log(`4 x ${i} = ${4 * i}`);
    i++
}


//do while
var i = 0;
do {
    console.log(`5 x ${i} = ${5 * i}`);
    i++
} while (i <= 10);

//functions

function fn() {
    console.log("phukeee");
}
fn();

//perameter:

function fn1(a) {
  console.log("phukeee "+a);
}
fn1("brand");

function fn2(a,b) {
  console.log(a+b);
}
fn2(3, 7);

function fn3(a,b) {
  console.log(a+b);
}
let no1 = 10;
let no2 = 4;

fn3(no1, no2);

function fn4(a, b,c) {
  return a + b+c;
}
var no3 = 10;
var no6 = 4;

let addition = fn4(no3, no6, 30);
console.log(addition);


//global and local variable:

let new1= "global";//global

function local() {
    let new2 = "local";//local
    console.log(new2);
    console.log(new1);
}
local();
console.log(new1)

//annonymous function=>
let func = function () {
        console.log("stored")
}
func();

//self invoved fn
 (func = function () {
  console.log("new-way stored");
})();
//
let fnX= function(a, b) {
  return a + b;
}
console.log(fnX(3, 7));

//arrow
let fun1 = (a, b) => {
    return a + b;
 }
console.log(fun1(5, 8));

//
let fun = (a, b) => console.log(a + b);

fun(3, 6);

//Array>>>>>>>>>>>>>>>>>>>>

let data = ["jhon", "won", "rate"]
console.log(data);
console.log(data[0]);
console.log(data.length);

let data2 = ["jhon", true, null, 5];
data2.push("cena");
console.log(data2);
console.log(data2[2]);
console.log(data2.length);

let data3 = ["jhon", true, null, 5];
data3.unshift("cena");
console.log(data3);
console.log(data3.length);

let data4 = ["jhon", true, null, 5];
data4.splice(1,0,"cena");
console.log(data4);
console.log(data4.length); 

//array

let number = [10, 20, 45, 5896, 56];

for(let j = 0; j < number.length; j++) {
    console.log(number[j]);
    
}

let arr = [10, 20, 45, 5896, 56, 78766, 56];
console.log(arr);

let arr1 = [10, 20, 45, 5896, 56, 78766, 56];
arr1.forEach((val,index,array) => {
    console.log(val+" "+index+" "+array); 
})


let arr2 = [10, 20, 30, 40, 50, 60, 70];
let newArr = arr2.map((val, index, array) => {

    console.log(val + " " + index + " " + array);
    return val + 20;
});

console.log(newArr);

let arr4 = [10, 20, 31, 14, 50, 16, 70];
let arr5 = [11, 21, 31, 41, 51, 61, 71];

console.log(arr4.concat(arr5))

console.log(arr4.indexOf(20));

console.log(arr4.reverse());

console.log(arr4.sort());

let sl = arr4.slice(1, 4);
console.log(sl);

let arr6 = [10, 20, 31, 14, 50, 16, 70];

console.log(arr6.toString());
console.log(typeof arr6.toString());

let xy = arr6.filter((val, index, arr) => {
    if (val >= 10 && val <= 25) {
        return val;
    }
 })
console.log(xy);

let arr7 = [10, 20, 31, 14, 50,10, 16, 70];
let xyz = arr7.find((val, index, arr) => {
    return val == 10;
});
console.log(xyz);

let xyzx = arr7.findIndex((val) => {
  return val == 10;
});
console.log(xyzx);

let abc = arr7.findLastIndex((val) => {
  return val == 10;
});
console.log(abc);

let abc1 = '10,20,89'

let arr8 = abc1.split(',');
arr8.forEach(element => {
    console.log(element);
})

console.log(arr8);

let joined = arr8.join(" and ")
console.log(joined);