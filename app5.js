console.log("Welcome to day 5");

//dom tree

//dom selector

//getElementBy TagName

var a = document.getElementsByTagName('div')
console.log(a);

//get element by class

var a = document.getElementsByClassName("hero");
console.log(a);

//get element by id

var a = document.getElementById("language");
console.log(a);

//query selector

var a = document.querySelector(".hero");
console.log(a);

//query selector all
var a = document.querySelectorAll("li");
console.log(a);

//Traverse The DOM
//parentElement:

var parent = document.querySelector('div');
var p = parent.parentElement;
console.log(p);

//previousElementSiblings

var child = document.querySelector('.hero');
if (child.previousElementSibling== null) {
    console.log("Siblings not present")
}
else {
    console.log(child.previousElementSibling);
}


var q = document.querySelectorAll(".hero");
q.forEach((ele)=> console.log(ele.previousElementSibling))

//append child

const ul = document.querySelector('ul');
const newE = document.createElement('li');
newE.textContent = "gigaByte";
ul.appendChild(newE)

//remove

// const dl = document.querySelector('li');
// dl.remove()

//replace child

const list = document.querySelector('ul');

const childtoChange = list.children[1];//index-1
const newList = document.createElement('Li');
newList.textContent="JQuery"
list.replaceChild(newList, childtoChange)

//parent node

var parent = document.querySelector("div");
var x = parent.parentNode;
console.log(x);

//previous sinblings

var child1 = document.querySelector(".hero");

  console.log(child1.previousSibling);

//next siblings
var child1 = document.querySelector(".hero");

console.log(child1.nextSibling);

//next element siblings

var child1 = document.querySelector(".hero");

console.log(child1.nextElementSibling);

//FIRST CHILED
var fChild = document.querySelector('ul')
console.log(fChild.firstChild)
//first element chiled
var fChild = document.querySelector("ul");
console.log(fChild.firstElementChild);
//last  chiled
var lChild = document.querySelector('ul');
console.log(lChild.lastChild);
//last element child
var lChild = document.querySelector("ul");
console.log(lChild.lastElementChild);


//inner text & Text content

var a = document.querySelector('h1').innerText;
console.log(a)

var b = document.querySelector("h1").textContent;
console.log(b);

//adjecent element


var target = document.querySelector('.noob')
var newELe = '<b>Welcome to Phuke</b>';
target.insertAdjacentHTML("beforebegin", newELe)

target.insertAdjacentHTML("beforeEnd", newELe);
target.insertAdjacentHTML("afterBegin", newELe);
target.insertAdjacentHTML("afterEnd", newELe);

//innerHTML

let ab = document.querySelector('.hero')
ab.innerHTML='<i>Ram krishna</i>'
console.log(ab)
console.log(ab.innerHTML);

ab.innerHTML += " <i>hari</i>";

//outerHTML
let abc = document.querySelector(".hero");
ab.outerHTML = "<li><i>jesus</i></li>";
console.log(ab);
console.log(ab.outerHTML);

//styling

document.body.style.backgroundColor = "red"

let main = document.querySelector('h1');
main.style.color = "white";
main.style.backgroundColor = "blue"
main.style.border = "2px solid black"
main.style.borderRadius = "5px"

//Get and set attributes

let xy = document.querySelector('#non')
console.log(xy.getAttribute('about'))
console.log(xy.getAttribute("id"));

xy.setAttribute("example", 123)
console.log(xy.outerHTML)

for (let atb of xy.attributes) {
    console.log(atb)
    console.log(`${atb.name}=${atb.value}`);
}

