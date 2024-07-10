console.log("......day. .4.......")


//proto
var obj = {
fName: "Jhon"
};

var obj2 = {
  lName: "smith"
};

obj2.__proto__ = obj;

console.log(obj2.fName)

var obj3 = {
  lName: "smith",
};

obj4 = Object.create(obj3);
obj4.fName="nike"


console.log(obj4.lName);

console.log(obj4);


//prototype

function Person(name, age) {
  let person = Object.create(obj)
  person.name = name;
  person.age = age;

  return person

}

var obj = {
  greet() {
    console.log(`Hello ${this.name}`)
  }
}

let User = Person("adiii", 18)
User.greet()
console.log(User)

//better-way

console.log(Person.prototype);


function Person1(name, age) {
  let person1 = Object.create(Person1.prototype);
  person1.name = name;
  person1.age = age;

  return person1;
}


  Person1.prototype.greet=function() {
    console.log(`Hello ${this.name}`);
  }


let Users = Person1("mike", 18);
Users.greet()
console.log(Users);

//using-new

function customer(assests, price) {
  this.assests = assests;
  this.price = price;

}

customer.prototype.recep = function () {
  console.log(`Dear Customer pay Rs ${this.price}` );
}

let r = new customer("Dairy Milk", 200);
r.recep()
console.log(r)

//class

class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let dean =new Student("Ram", 18);
dean.greet();
console.log(dean);

//class-->

class Teacher{
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    console.log("Hello "+this.name)
  }
}

let staff = new Teacher("Phuke")
staff.sayHi()

let staff2 = new Teacher("jhon");
staff2.sayHi();

let staff3 = new Teacher("ram");
staff3.sayHi();

console.log(typeof Teacher);

console.log(Teacher.prototype.sayHi);


//imheritance

class Animal{
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make some noise`)
  }
  sing() {
    console.log(`${this.name} sing please`)
  }
}

class Dog extends Animal{
  constructor(name) {
    super(name);
  }
  
    
  
}

class cat extends Animal {
  constructor(name) {
    super(name);
  }
}



let d = new Dog("rufus")
d.speak();

let e = new Animal("rufus");
e.speak()

let h = new cat("billi");
h.sing()


//static

class Animals {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} make some noise`);
  }
  static sing(name) {
    console.log(`${name} plz sing a song `);
  }
}

let p = new Animals("ruhi");
Animals.sing(p.name)

let q = "shila";
Animals.sing(q);


//static game
class Game{
  static score = 0;
  constructor() {
    this.isPlaying = false;
  }
  start() {
    this.isPlaying = true;
    console.log(`The game has started`);

  }
  end() {
    this.isPlaying = false;
    console.log(`The game has ended`)
    Game.updateScore();
  }
  static updateScore() {
    Game.score++;
    console.log(`Score ${Game.score}`);
  }
}

const game = new Game();
game.start();
game.end();
game.end();
game.end();


//Public Private

class BankAccount{
  #balance = 0;
  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposited: ${amount}, new balance is: ${this.#balance}`);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Insuficient fund`);

    }
    else {
      this.balance -= amount;
      console.log(`Withdraw: ${amount}, new balance : ${this.#balance}`)
    }
  }
  fund() {
    console.log(this.#balance);
  }
}

const account = new BankAccount();
account.deposit(100);
account.deposit(1000);
account.withdraw(986);
account.fund()


//try-catch-trow

function dn(a, b) {
  try {
    if (b == 0) {
      throw new Error("cant devided by 0");
    }
    else {
      console.log(a / b);
    }
  } catch (error) {
    console.log(error.message)
  }
  
}
dn(10, 0)

//Fetch API

fetch("app4.txt")
  .then((response) => {
    return response.text();
  })
  .then((data) => console.log(data));


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network is not responding");
      }
      return response.json();
    })
    .then(data => data.forEach(element=> {
      console.log(element);
      console.log(element.title);
    }) )
    .catch((error) => console.log(error))
  .catch((error) => console.error(error));

//https://jsonplaceholder.typicode.com/guide/
  

    


