var i = 52;

for (var i = 0; i < 6; i++)
{
    console.log(i);
}
console.log(i);


let n = 52;

for (let n = 0; n < 6; n++)
{
    console.log(n);
}
console.log(n);



function name1(pass) {
    var name = 'Dorela';
    var age = 22;
    if (pass){
        var age = 23;

        console.log(age);
    }
    console.log(name);
    console.log(age);
};

name1(true);


function name2(pass) {
    const name = 'Dorela';
    let age = 22;

    if (pass){
        let age = 23;
        const name = 'Erald';
        console.log(age);
        console.log(name);
    }
    console.log(name);
    console.log(age);
};

name2(true);


{
    const a = 56;
    let b =  33;
    var c = 69;
}
// console.log(a);
// console.log(b);
// console.log(c);

    let name = 'Dorela';
    let lastname = 'Sinjari';
    let age = 23;


function presentation (years) {

    return 2019 - years;
}

console.log(`My name is ${name} ${lastname} and I am ${age} years old, born in ${presentation(age)}.`);

const person = `${name} ${lastname}`;

console.log(person.startsWith('D'));
console.log(person.endsWith('i'));
console.log(person.includes('nj'));
console.log(`${name}, `.repeat(5));

const vite = [1998, 1996, 1963, 1985];
//ARRAYS
//ES%
var moshe = vite.map(function(el) {
  return 2019 - el;
});
console.log(moshe);

//ES6

let mosha = vite.map(el => 2019 - el);
console.log(mosha);

mosha = vite.map((el, index) => `${index + 1}:  Mosha ime eshte ${2019 - el}, lindur ne vitin ${vite[index]}`);
console.log(mosha);

mosha = vite.map((el, index) => {
   let now = new Date();
   now = now.getFullYear();
  const mosha = now - el;
  return ` ${index + 1} Mosha eshte: ${mosha}.`;
});
console.log(mosha);

//THIS. KEYWORDS
//SE5
var box1 = {
  name: 'Dorela',
  age: 22,
  function1: function() {
       var self = this;
      document.querySelector('.green').addEventListener('click', function() {
          var str = 'My name is ' + self.name + ' and I am ' + self.age + 'years.';
         alert(str);
      });
  }
};

// box1.function1();

//SE6
const box2 = {
    name: 'Dorela',
    age: 23,
    funksion2: function(){

        document.querySelector('.green').addEventListener('click', () => {
            const str = `My name is ${this.name} and I am ${age} years old`;
            alert(str);
        });
    }
};
box2.funksion2();

//CONSTRUCTOR
function Person (name) {
    this.name = name;
}

//SE5
Person.prototype.rasti1 = function(shoqe) {
var liste = shoqe.map(function (el) {
    return this.name + ' is friend with ' + el;
    // KRIJOJM NJE KOPJE TE OBJEKTIT NE FUNKSIONIN E SIPERM.
}.bind(this)
);
console.log(liste);
};
//DEKLARIMI I NJE ARRAY
var shoqe = ['Sara', 'Irini', 'Anamaria', 'Sidorela'];
new Person('Dorela').rasti1(shoqe);

//SE6
Person.prototype.rasti2 = function(shoqe) {
    const liste = shoqe.map(el =>  `My name is ${this.name} and i am friend with ${el}`);
    console.log(liste);
    };
    new Person('Dori').rasti2(shoqe);


    const [emer, jete] = ['Dorela', 23];
    console.log(emer);
    console.log(jete);
    
    const obj = {
        firstName: 'Dorela',
        lastName: 'Sinjari'
    };
    
    const {firstName, lastName} = obj;
    console.log(firstName);
    console.log(lastName);
    
    const {firstName: a, lastName: b} = obj;
    console.log(a);
    console.log(b);
    
function llogarit(rroga) {

    var taksa = new Date().getFullYear() - 2016;
    return [taksa, rroga - taksa];

}

const [taksa1, pagese] = llogarit(165);
console.log(taksa1);
console.log(pagese);

/*

// KTHEN NJE NODE LIST
var boxes = document.querySelectorAll('.box');

//ES5
// KTHEN NODELIST NE PROTOTIPIN E ARRAY 
var box5 = Array.prototype.slice.call(boxes);
// ARRAYN E KRIJUAR CDO ELEMENT NJE NGA NJE I JEP TIPARIN E NGJYRES TE KUQE
box5.forEach(function(current) {
    current.style.backgroundColor = 'red';
});

for(var i = 0; i <box5.length; i++) {
    if (box5[i].className === 'box red') {
        continue;
    } else {
        box5[i].textContent = 'I changed to red.';
    }
}

//ES6

Array.from(boxes).forEach(current => current.style.backgroundColor = 'blue');
const box6 = Array.from(boxes);

for (const current of box6) { 
    if(current.className.includes('box blue')) {
        continue;
    } else {
      current.textContent = 'I changed to blue.';
    }
}

*/

var ages = [12, 17, 8, 21];

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

function add(a, b, c, d) {
    return a + b + c + d; 
}

var sum1 = add.apply(null, ages);
console.log(sum1);

const sum2 = add(...ages);
console.log(sum2);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Dorela', 'Sinjari', ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
