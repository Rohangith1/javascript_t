console.log("............welcome to day 3............");


//This keyboard

var obj = {
    fName: "Phuke",
    age: 21,
    fun: function () {
        console.log(this);
        console.log(this.age);
    }
}
obj.fun();


function fun() {
    console.log(this);
}
window.fun();

//New keyboard

function fun1() {
    return this;
}
console.log(fun1());

//undefined
function fun2() {
    let fName="'jhon"
  return this.fName;
}
console.log(fun2());

//new---
function fun3() {
    let fName="'jhon"
  return this.fName;
}
console.log(new fun3());

//
//new-implement
function fun4() {
    let fName="'jhon"
   this.fName=fName;
}
console.log(new fun4());

let op = new fun4();
console.log(obj.fName)


//constructor
//new word used

function User(name) {
    this.name = name;
}
console.log(new User("Jack"))

let person = new User("Jack");
console.log(person.name)

//another way
function User1(name) {
    if (!new.target) {
        return new User(name);
    }
  this.name = name;
}


let person1 =  User1("Jack");
console.log(person1.name);

//Symbol

let sys = Symbol("id");

let sys1 = Symbol("id");
console.log(sys.description);

console.log(sys === sys1);


//with object


let id = Symbol("u_id");
let obj1 = {
    name: "Jhon",
    age: 20,
    [id]:1
}

console.log(obj1);


console.log(obj1[id]);

obj1[id] = 1;

console.log(obj1[id]);

for (let key in obj1) {
    console.log(key);
}

//Recursion

function printNumRecursion(n) {
    if (n <= 10) {
        console.log(n);
        printNumRecursion(n+1)

    }
}

printNumRecursion(1)

//factorial trough recursion: 5!= 5*4*3*2*1=120

function fact(n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * fact(n - 1);
    }
}
console.log(fact(5));