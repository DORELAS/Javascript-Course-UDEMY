// New Object constructor

var Person = function (name, lastname, age){
  this.name = name;
  this.lastname = lastname;
  this.age = age;
}

// INHERITANCE
Person.prototype.retirement = function() {
  console.log(65 - this.age);
};

var dorela = new Person ('Dorela', 'Sinjari', 22);
var erald = new Person ('Erald', 'Sinjari', 32);
dorela.retirement();
erald.retirement();

console.log(dorela);
console.log(erald);

console.log(dorela.age);
console.log(erald.name);

//Createing Objects
var Profesion = {
  pension: function() {
    console.log(2019 - this.mosha);
  }
};

var pune = Object.create(Profesion);
pune.emer = 'x';
pune.mosha = 55;
pune.dega = 'murator';

var studjuar = Object.create(Profesion, {
  emer: {value: 'Y'},
  mosha: {value: 37},
  dega: {value: 'Informatike'}
});

console.log(pune);
console.log(studjuar);

//////////////////////

var vjec = [22, 45, 96, 63, 54];

function mosha (arrai, func)
{
  var viti = [];
  for(var i = 0; i < arrai.length; i++)
{
  viti.push(func(arrai[i]));
}
        return viti;
}

function llogarit (elem)
{
  return 2019 - elem;
}

function maturant (elem)
{
  return elem >= 18;
}

function zemra (elem)
{
 if(elem >=18 && elem <= 82)
 {
   return Math.round(206.9 - (0.67 * elem));
 }
 else {
    return -1;
 }
}


var lindur = mosha (vjec, llogarit);
var magior = mosha (lindur, maturant)
var rrahje = mosha (vjec, zemra);

console.log(lindur);
console.log(magior);
console.log(rrahje);


function who (vjetet)
{
   if (vjetet === 22)
   return function (emeri) 
   { console.log('Pershendetje ' + emeri);
  }
  else if (vjetet === 32)
   {
     return function (emeri){
    console.log('Pershendetje ' + emeri);
     }
  }
  else 
  { return function (emeri)
    {
    console.log('Pershendetje ' + emeri);
  }

}
}

var dikush = who (33);
var dorela = who (22);
var erald = who(32);

who (32) ('Erald');
who (22) ('Dorela');
who (55) ('Dikush');

dikush('Ai/Ajo');
dorela('Dorela');
erald('Erald');

//IMMEDIATELY INVOKED FUNCTION EXPRESSION

function Vertete (moshe) 
{
   var vite = 2019 - moshe;
   console.log(vite >= 18);
}

//IF patern

(function Vertete (moshe) 
{
   var vite = 2019 - moshe;
   console.log(vite >= 18);
}) (22);



function pensioni (moshePensioni)
{
 var a = " vite te tjera pune deri ne pension.";
   return function (vitiLindjes)
   {
     var mosha = 2019 - vitiLindjes;
     console.log((moshePensioni - mosha) + a);
   }
}

var pensionist = pensioni (65);
pensionist(1996);

pensioni (65) (1996);


var njeri = {
  njeriEmer: 'Dorela',
  njeriViti: 1996,
  adult: function (njeriMosha) {
   
    if(njeriMosha >=18) 
    {
      console.log(this.njeriEmer + ' e lindur ne vitin ' + this.njeriViti + ' eshte adult.');
    }
    else if (njeriMosha >= 13 && njeriMosha < 18)
    {
      console.log(this.njeriEmer + ' e lindur ne vitin ' + this.njeriViti + ' eshte adoleshente .');
    }
    else
    {
      console.log(this.njeriEmer + ' e lindur ne vitin ' + this.njeriViti + ' eshte femije .');
    }
   }
}


var njeri1 = {
  njeriEmer: 'Dori',
  njeriViti: 2015,
}

var njeri2 = {
  njeriEmer: 'Ela',
  njeriViti: 2005,
}

njeri.adult(22);

// Call Method
njeri.adult.call(njeri1, 4);

//Apply Method, therritet si nje bashkesi
njeri.adult.apply(njeri2, [14]);

// Bind Method
var njeri3 = njeri.adult.bind(njeri1);
njeri3(13);

njeri3(25);


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number)
 (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. 
The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. 
So make sure that all your code is private and doesn't interfere with the other programmers code 
(Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends
 (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' 
instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score 
(Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you 
feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {

  //1 Constructor
var questions = function (question, answer, correct_answer)
{
  this.question = question;
  this.answer = answer;
  this.correct_answer = correct_answer; 
}

questions.prototype.displayquestions = function() {
        
  console.log(this.question);
  for(var j = 0; j < this.answer.length; j++)
  {
    console.log(j + ': ' + this.answer[j]);
  }
}

questions.prototype.checkquestions = function(prgj, callback) {
  var score;
if(prgj === this.correct_answer)
{
  console.log('Pergjigje e sakte!');
 score = callback(true);
}
else 
{
  console.log('Gabim, provoni perseri!');
  score = callback(false);
}

  this.displayscore (score);

     }

     
questions.prototype.displayscore = function (score)
{
  console.log('Piket e arritura jane : ' + score);
  console.log('---------------------------------');
}

//2  The 3 questions
var question1 = new questions ('Si ju quajne ?', ['dorela', 'mirela'], 0);
var question2 = new questions ('Sa eshte mosha juaj ?', [15, 59, 45, 22], 3);
var question3 = new questions ('Ne cfare po Kodoni ?', ['Html', 'CSS', 'SASS', 'JavaScript'], 3);

//3  Array with the questions
var quiz = [question1, question2, question3];


function pike() {
  
  score = 0;
         
   return function (sakte) {
  
    if(sakte) {
      score++;
    }
 return score;
   }
}
var keepScore = pike();


function pyetje () 
{
//4 Random question
var i = Math.floor(Math.random() * 3);

quiz[i].displayquestions();

var show = prompt('Ju lutem ktheni nje pergjigje ?');

if(show !== 'exit')
{
quiz[i].checkquestions(parseInt(show), keepScore);

pyetje();

}
}

pyetje();

})();









