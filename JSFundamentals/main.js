console.log("Hiiii");
console.warn("Noo");

//SCope var, let const

var a = 20;
if(true){
     var a = 90;
    console.log(a);
}
console.log(a);


//String
const name = "Allen"
const age = "15"
//String Cancatenation
console.log('Hi my name is '+ name + ' my age is'+ age);
//Template String
console.log(`Hi my name is ${name} and my age is ${age}`);

const str = "Hello this is world";

console.log(str.length) //property not method
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.substring(0,5));
console.log(str.split(""));


//Array
const arr = new Array(1,2,4,56);
console.log(arr)
const arr2 = ["allen","apple","12",10, true];
console.log(arr2);

arr2.push('banana');
console.log(arr2);

arr2.unshift("kwiw");
console.log(arr2);

arr2.pop();
console.log(arr2);


//Object Literal

const person = {
    firstName : "Alinpreet",
    lastName: "Kaur",
    age:"15",
    address : {
        city:"BLR"
    }
}

const {firstName, address:{city}} = person;

console.log(firstName, city)


//Array of Objects

const todos = [{id:1, task: "homework"}, {id:2, task:"jogging"}]

console.log(todos);
console.log(JSON.stringify(todos)); //String of JSON


// for loop for arrays
for(let todo of todos) {
console.log(todo.task)
}

//forEach
todos.forEach(function(todo){
    console.log(todo.id)
})

//map return an array
console.log(todos.map(function(todo){
    return todo.task
}))


//filter + map
console.log(todos.filter(function(todo){
    return todo.id == 2
}).map(function(todo){
    return todo.task
}))

if(1==10 && 9==9){
console.log('no')
}



//Constructor Function 

function Person(name, lname, dob) {
this.firstName = name;
this.lastName = lname;
this.dob = dob;
}

// Prototyping
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const p = new Person('allen','kaur',2-2-10);
console.log(p)
console.log(p.getFullName());



//Class

class Human {
    constructor(name, lname, dob){
        this.fname = name;
        this.lname = lname;
        this.dob = dob;

    
    }

    getFullName(){
        return `${this.fname} ${this.lname}`;
 
    }
}

const h = new Human('allen','kaur',2-2-10);

console.log(h)
console.log(h.getFullName());



//Selector Methods
console.log(document.getElementById('iform')); //querySelector could not fetch id
console.log(document.querySelector('.container'))
console.log(document.querySelector('.item'));
console.log(document.querySelector('body'));
console.log(document.querySelector('#iform'));


//Multiple Methods
console.log(document.querySelectorAll('.item')); // it will array <NodeList>
console.log(document.getElementsByTagName('li')); // array of HTMLCollection

//Todo Task
const ul = document.querySelector('#my-ul');
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
ul.firstElementChild.textContent = 'Hiiiiiii'
ul.children[1].innerText ="Byee";
// ul.remove();


const btn = document.querySelector('.btn');
btn.style.background = 'red';
const frm = document.getElementById('my-form');
const todoList = document.getElementById('my-list');

console.log(frm);
frm.addEventListener('submit',function(e){
    e.preventDefault();

    console.log('hi')
    const name = document.getElementsByName('name')[0].value;
    const task = document.getElementsByName('task')[0].value;
    console.log(name);
    console.log(task);
const li = document.createElement('li')
li.appendChild(document.createTextNode(`${name} - ${task}`))
    todoList.appendChild(li);
    frm.classList.add('green');
}
);
