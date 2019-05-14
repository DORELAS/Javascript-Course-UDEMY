// console.log(name);
// console.log(age);
console.log(date);

let name = 'Dorela ';
const age = 5;
var date = '21/03';

console.log(name);
console.log(age);
console.log(date);

if(5 > 3) {
    let person = 'Dorela';
    console.log(person + ' is ' + age + ' years.');
} 

{
    var a = 1;
    const b = 2;
    let c = 3;
    console.log(a + b + c);
}

console.log(`${name}, `.repeat(5));
console.log(`${name}`.startsWith('D'));
console.log(`${name}`.endsWith('a'));
console.log(`${name}`.includes('f'));

var liste = [1, 2, 3, 4, 5, 6];

var afisho = liste.map((el, index) => `${el} has the index of ${index} .`);
console.log(afisho);


function persona() {
    console.log(arguments);
}

persona(15, 89, 2, 25, 6);


function maxhor() {

    var array = Array.prototype.slice.call(arguments);
    array.forEach(element => { console.log(2019 - element);
        
    });
}

maxhor(15, 89, 2, 25, 6);


function maxhor(limit) {
console.log(arguments);
var array = Array.prototype.slice.call(arguments, 1);
console.log(array);
array.forEach(element => { console.log(2019 - element > limit);
        
    });
}
maxhor(18, 15, 89, 2, 25, 6);


function maxhor1(...a) {
    a.forEach(element => { console.log(2019 - element);  
    });
}

maxhor1(15, 89, 2, 25, 6);


function maxhor1(limit, ...a) {
    console.log(a);
    a.forEach(element => { console.log(2019 - element > limit);   
        });
    }
    maxhor1(18, 15, 89, 2, 25, 6);

////////////////////////////////////////

    var liste = new Map();
    liste.set(1, 'Dorela');
    liste.set(2, 'Sinjari');
    liste.set(3, 22);
    liste.set(4, 'IT');
    liste.set('specializim', 'Programim');
    liste.set(true, 'pa-pune');

for(let [key, value] of liste.entries()) {
    if(typeof(key) === 'number') {
        console.log(`The key is ${key} and it is of value ${value}`);
    }
}

    console.log(liste);

    console.log(liste.size); 

    liste.forEach((key, value) => console.log(`The key is ${value} and it is of value ${key}`));

    console.log(liste.get(1));

    if(liste.has(2)) {
        console.log(liste.get(2));
    }

    liste.delete(4);
    console.log(liste);

    liste.clear();
    console.log(liste);

   
  

    /* Ushtrmi i Seksionit 7 */
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class element {
    constructor (emer, viti) {
        this.emer = emer;
        this.viti = viti;
    }
}

class park extends element {
constructor(emer, viti, hapesira, teMbjellura) {
    super(emer, viti);
    this.hapesira = hapesira;
    this.teMbjellura = teMbjellura;
}
    densiteti() {
        const densitet = this.teMbjellura / this.hapesira;
        console.log(`${this.emer} ka nje densitet prej ${densitet} ne nje hapesire prej ${this.hapesira} km.`);
    }
}

class rruge extends element {
constructor (emer, viti, gjatesi, madhesi) {
    super(emer, viti);
    this.gjatesi = gjatesi;
    this.madhesi = madhesi;
}
klasifiko() {
    const varietete = new Map();
    varietete.set(1, 'shume e vogel');
    varietete.set(2, 'e vogel');
    varietete.set(3, 'mesatare');
    varietete.set(4, 'e madhe');
    varietete.set(5, 'shume e madhe');
    console.log(`${this.emer} rruge, e ndertuar ne vitin ${this.viti}, ka nje madhesi klasifikuar ${varietete.get(this.madhesi)} .`);
}
}

const parqe = [new park ('Park1', 1999, 12546, 995), new park('Park2', 1986, 3524, 1254), new park('Park3', 1965, 2001, 623)];
const rruget = [new rruge('rruga1', 1998, 1458, 4), new rruge('rruga2', 1856, 4256, 2), new rruge('rruga3', 4587, 1), new rruge('rruga4', 2007, 14239, 5)];

function shuma(arr) {
    const shume = arr.reduce((pre, curr, index) => pre + curr, 0);
    return [shume, shume / arr.length];
}

function parku(p) {
p.forEach(el => el.densiteti());

const mosha = p.map(el => new Date().getFullYear() - el.viti);
const [moshatotale, mesatareMoshes] = shuma(mosha);
console.log(`${p.length} parqet kane nje moshe mesatare prej ${mesatareMoshes} vitesh.`); 

const i = p.map(el => el.teMbjellura).findIndex(el => el >= 1000);
console.log(`${p[i].emer} ka nje madhesi me shume se 1000 te mbjella.`);
}

function rruga(s) {

const [madhesitotale, mesatareMadhesie] = shuma(s.map(el => el.gjatesi));
console.log(`Te ${s.length} rruget kane nje  gjatesi prej ${madhesitotale} metra me nje mesatare prej ${mesatareMadhesie} metrash.`);

s.forEach(el => el.klasifiko());
}

parku(parqe);
rruga(rruget);