alert('Welcome!');

var name = prompt('whats your name please?');
console.log(name);

// variable declaration
var age = 20;
var young = age > 30;

console.log(typeof age);
console.log(typeof young);

// BMI calculator

var johnMass = 66; // kg
var johnHeight = 1.85; // meters

var markMass = 85; // kg
var markHeight = 1.76; // meters

var mark_bmi = markMass / (markHeight * markHeight);
var john_bmi = johnMass / (johnHeight * johnHeight);

var bigger = mark_bmi > john_bmi;

console.log(john_bmi + ' is John\'s BMI and ' + mark_bmi + ' is Mark\'s BMI.');
console.log('Is John\'s BMI bigger than Marks\'s ? ' + bigger);

//Exercise 

var johnTeam1 = 89;
var johnTeam2 = 120;
var johnTeam3 = 103;

var markTeam1 = 116; 
var markTeam2 = 94;
var markTeam3 = 123;

var johnAverage = (johnTeam1 + johnTeam2 + johnTeam3) / 3;
var markAverage = (markTeam1 + markTeam2 + markTeam3) /3;


if (johnAverage > markAverage)
{
    console.log('John\'s team average is the highest average with ' + johnAverage + ' points.');
}
else if (johnAverage < markAverage)
{
    console.log('Mark\'s team average is the highest average with ' + markAverage + ' points.');
}
else {
    console.log('Both the teams have the same ' + markAverage + ' points.');
}

var meryTeam1 = 97; 
var meryTeam2 = 134;
var meryTeam3 = 105;

var meryAverage = (meryTeam1 + meryTeam2 + meryTeam3) / 3;


if (johnAverage > markAverage)
{
    if (johnAverage > meryAverage)
{
    console.log('John\'s team average is the highest average with ' + johnAverage + ' points.');
}
 else if (johnAverage < meryAverage) 
{
    console.log('Mery\'s team average is the highest average with ' + meryAverage + ' points.');
}
}
 else if (johnAverage < markAverage)
{
    if ( markAverage > meryAverage) 
{
    console.log('Mark\'s team average is the highest average with ' + markAverage + ' points.');
}
 else if(markAverage < meryAverage)
{
    console.log('Mery\'s team average is the highest average with ' + meryAverage + ' points.');
}
   }
else {
    console.log('Both the teams have the same ' + markAverage + ' points.');
}

console.log('John\'s average is ' + johnAverage + ' points.');
console.log('Mark\'s average is ' + markAverage + ' points.');
console.log('Mery\'s average is ' + meryAverage + ' points.');


//Arrays

var numb = [1, 2, 3, 4, 5];

if (numb.indexOf(5) === 4)
{
    numb.pop();
}

console.log(numb);

// EXERCISE

var bill = [124, 48, 268];
var tip ;
var due ;


function tips (money)
{
     var pay;

    if(money < 50)
    {
         pay = money * 0.2;
    }
    else if (money > 50 && money < 200) 
    {
         pay = money * 0.15;
    }
    else if (money > 200) 
    {
        pay = money * 0.1;
    }

    return pay;
}


tip = [tips(bill[0]), tips(bill[1]), tips(bill[2])];
console.log(tip);

due =  [tips(bill[0]) + bill[0], tips(bill[1]) + bill[1], tips(bill[2]) + bill[2]];
console.log(due);


//EXERCISE
var Person1 = {
    name: 'John',
    mass: 68,
    height: 176,
    bmiJohn: function ()
    {
      this.bmi1 = (this.height * this.height) / this.mass;
      return this.bmi1;
    }
}

var Person2 = {
    name: 'Mark',
    mass: 68,
    height: 176,
    bmiMark: function ()
    {
      this.bmi = (this.height * this.height) / this.mass;
      return this.bmi;
    }

}

if( Person1.bmiJohn() > Person2.bmiMark())
{
    console.log(Person1.name + ' has the highest BMI ' + Person1.bmiJohn());
}
else if( Person1.bmiJohn() < Person2.bmiMark())
{
    console.log(Person2.name + ' has the highest BMI ' + Person2.bmiMark());
}
else 
{
    console.log(Person2.name + ' and ' + Person1.name + ' has the same BMI ' + Person1.bmi1);
}


// EXERCISE FOR LOOPS
/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). 
HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, 
and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, 
and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, 
divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

*/


var values1 = {
    firstname: 'JOHN',
    bills: [124, 48, 268, 180, 42],
    calculator: function() 
    {
     this.tips = [];
     this.value = [];

        for (var i = 0; i < this.bills.length; i++)
        { 
           if (this.bills[i] < 50) { percentage = 0.2; }
           else if (this.bills[i] > 50 && this.bills[i] < 200) { percentage = 0.15; }
           else { percentage = 0.1; }

           this.tips[i] = this.bills[i] * percentage; 
          this.value[i] = this.tips[i] + this.bills[i];
          
        }
        console.log(this.tips);     
        console.log(this.value);
}
};

values1.calculator();
console.log(values1);

var values2 = {
    firstname: 'MARK',
    bills: [77, 375, 110, 45],
    calculator: function()
    {
        this.tips = [];
        this.value = [];

        for(var i = 0; i < this.bills.length; i++)
        {
            if (this.bills[i] < 100) { percentage = 0.2; }
            else if (this.bills[i] > 100 && this.bills[i] < 300) { percentage = 0.1; }
            else { percentage = 0.25; }

            this.tips[i] = this.bills[i] * percentage; 
            this.value[i] = this.tips[i] + this.bills[i];
        }
        console.log(this.tips);     
        console.log(this.value);
    }
};

values2.calculator();
console.log(values2);


function Average (tip) {
        
    var sum = 0;
    var average;

    for (var j = 0; j < tip.length; j++)
{
    sum += tip[j];   
}
   average = sum / tip.length;
   return average;
}

console.log(Average(values1.tips) + ' is John\'s family tips value.');
console.log(Average(values2.tips) + 'is Mark\'s family tips value.');


if (Average(values1.tips) > Average(values2.tips))
{
    console.log(values1.firstname + '\'s family pays higher tips, with an average of $' + Average(values1.tips));
}
else  if (Average(values1.tips) < Average(values2.tips))
{ 
    console.log(values2.firstname + '\'s family pays higher tips, with an average of $' + Average(values2.tips));

}
else
{
    console.log (values1.firstname + ' and ' + values2.firstname +' have paid the same for tips.');     
}

