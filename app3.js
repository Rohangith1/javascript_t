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

//js is synchronous
console.log("hi");
console.log("phuke");
console.log("Im");


//set-time out
// console.log("hi");
// setTimeout(() => {
//     console.log("phuke");
// }, 1000)

// console.log("Im");

// //
// setTimeout(ram, 2000)

// setTimeout(() => {
//   console.log("Is");
// }, 1000);



// function ram() {
//     console.log("Asynchrounus")
// }

// console.log("This");


//callback--
function fun(val) {
    console.log(val);
}

function add(a, b,callback) {
    let sum = a + b;
    callback(sum)
}

add(5, 10, fun)

//callback hell

//function loadingData(callback) {
//     setTimeout(() => {
//         console.log("1. Loading Data");
//         callback();
//     },4000)
    
// }
// function collectingData(callback) {
//     setTimeout(() => {
//         console.log("2. collecting Data");
//         callback()
//     }, 5000);
// }
// function approvingdata() {
//     console.log("3. Approving Data")
// }
// function approved() {
//     console.log("4. Approved")
// }


// //callback hell
// loadingData(function () {
//     collectingData(function () {
//         approvingdata();
//         approved();

//     });
    
// });


//promise== fullfill/reject/pending

// function fun(task) {
//     return new Promise((resolve, reject)=> {
//         if (task) {
//             resolve("Completed");
//         }
//         else {
//             reject("not completed");
//         }
//     })
// }

// let onResolve = (res)=>{
//     console.log(res);
// }
// let onReject = (err)=>{
//     console.log(err);
// }

// fun(false).then(onResolve).catch(onReject)


// //promise

// function loadingData() {
//     return new Promise((resolve, reject)=> {
//          setTimeout(() => {
//         console.log("1. Loading Data");
//         resolve();
//     },4000)
//     })
   
    
// }
// function collectingData() {
//     return new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         console.log("2. collecting Data");
//         resolve()
//     }, 5000);
//         })
   
// }
// function approvingdata() {
//     return new Promise((resolve, reject) => {
//         console.log("3. Approving Data");
//         //reject("requirement not-f-fill")
//         resolve()
//     })
// }
// function approved() {
//     console.log("4. Approved")
// }


// loadingData().then(collectingData).then(approvingdata).then(approved).catch((err) => {
//     console.log(err);
// })


//Asnc wait
// async function Ex() {
//     await loadingData()
    
//     await approvingdata()
//     await approved()
    
// }
// Ex().then( collectingData) .catch((err) => {
//     console.log(err);
// })


//set intervals


// let numb = 0;
// setInterval(fund, 2000)
// function fund() {
//     numb = numb + 1;
   
// }

// let inter=setInterval(fun, 1000)

// function fun() {
//     let date = new Date().toLocaleTimeString();
//     console.log(date);
// }
// setTimeout(() => {
//     clearInterval(inter);

// }, 10000)


//call bind and apply

var object= {
    fName: "Jhon",
    fun: function () {
        console.log(this.fName)
    }
}
var object2 = {
    fName : "Kendrick"
}

object.fun.call(object2)
//


function fun (age,gender) {
    console.log(this.fName,age,gender);
  }

var object3 = {
  fName: "Jhon",
  
};
var object4 = {
  fName: "lamer",
};
//call
fun.call(object4, 10, "male");
//apply
fun.apply(object3, [10, "male"]);
//bind
var ab = fun.bind(object3, [10, "male"]);
console.log(typeof ab);
console.log(ab);
