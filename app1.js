//array-- for in for loop
let arr = [10, 20, 30, 40];
for (let ar in arr) {
    console.log(ar);
    console.log(arr[ar]);
}

let arr2 = [10, 20, 30, 40];
for (let arr3 of arr2) {
  console.log(arr3);
}
    
//multidimentional array

let dat = [
    ["phuke", 39],
    ["thomas", 45],
    ["andy", 40]
    
]

console.log(dat);

// for (let i = 0; i <= dat.length; i++){
//     for (let j = 0; j <dat[i].length; j++) {
//         console.log(dat[i][j]);

//     }
// }

dat.forEach(data => {
    data.forEach(val => {
        console.log(val);
    })
})
//
let dataa = [
    ["phuke", 39],
    ["thomas", 45],
    ["andy", 40]
    
]
for (let inn of dataa) {
    for (i of inn) {
        console.log(i);
    }
  
}

//copy
arr3 = [10, 20, 30, 40];
arr3.push("new");
arr4 = [10, 20, 31, 14, 50, 10, 16, 70];

arr5 = arr3;
console.log(arr3);
console.log(arr5);


let arr6 = arr3.slice(0).concat(["new3"]);
arr6.push("new2");

console.log(arr3);
console.log(arr6);


//spread

let arr7 = [...arr3];

arr7.push("hi..there")


console.log(arr3);
console.log(arr7);


    
//array destructing
let abc = ["thomas", "ched",3,true]
let item1 = abc[0];
let item2 = abc[1];

console.log(item1);
console.log(item2);

let [i1, i2,...i3] = abc;
console.log(i1);
console.log(i2);
console.log(i3);

//object

let obj = {
    name: "Bravo",
    "age": 31,
    "last name": "don",
    func: function () {
        console.log("this is me")
    },
    arr: ["ram", "hari", "jhony"]
}
obj.func();


console.log(obj.name);
console.log(obj["age"]);
console.log(obj["last name"]);
console.log(obj.arr);

let x = "adhaar";
obj.pan = "456";
obj[x]="691212167943"

console.log(obj);

for (let i in obj) {
    console.log(i);
    console.log(obj[i]);
}

//

for (let i of Object.keys(obj)) {
  
  console.log(obj[i]);
}

//object inside array

let ar1 = [
    {
        user: 1,
        name: "rahim"
    },
    {
        user: 2,
        name: "Brahim"
    },
    {
        user: 3,
        name: "kahim"
    },
]

console.log(ar1);

console.log(ar1[0]);

for (let i in ar1) {
    console.log(ar1[i]);
}

for (let i of ar1) {
  console.log(i);
}
//name print

let [{name}, it2,{name:name1}] = ar1;

console.log(name);
console.log(it2);
console.log(name1);

