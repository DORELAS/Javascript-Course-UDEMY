
// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentages = -1;
    };

    Expense.prototype.calculatePercentages = function(totalIncome) {
        if(totalIncome > 0) {
        this.percentages = Math.round((this.value/totalIncome) * 100);
        } else {
            percentages = -1;
        }
    };
    
    Expense.prototype.getPercentage = function() {
    return this.percentages;
     };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
           var sum = 0;
           data.allItems[type].forEach(function(current) {
               sum += current.value; 
           });
    data.totals[type] = sum;
};

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentages: -1
    };
    
    
    return {
        addItem: function(type, des, val) {
            var newItem, ID;
            
            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        },
 
     deleteItem: function(type, id) {

        var ids, index;
        //CREATE AN ARRAY WITH ALL THE ID NUMBERS THAT WE HAVE.
        // USE OF THE METHOD MAP, WHICH RETURNS A NEW ARRAY 
        var ids = data.allItems[type].map(function(current) {
            return current.id;
        });

        index = ids.indexOf(id);

        if(index !== -1) {
           
         // SPLICE METHOD WHICH IS USED TO REMOVE ELEMENTS
            data.allItems[type].splice(index, 1);
        }
     },

     calculateBudget: function() {
 
        //CALCULATE THE TOTAL INCOME AND EXPENSES
        calculateTotal('exp');
        calculateTotal('inc');

        //CALCULATE THE BUDGET ICOME - EXPENSES
        data.budget = data.totals.inc - data.totals.exp;

        //CALCULATE THE PERCENTAGE OF INCOME THAT WE SPENT 
        if(data.totals.inc > 0) {
        data.percentages = Math.round((data.totals.exp / data.totals.inc) * 100);
        } else {
            data.percentages = -1;
        }
    },

    calculatePercentages: function() {
     
        // loops over the array
        data.allItems.exp.forEach(function(current) {
            current.calculatePercentages(data.totals.inc);
        });
    },

    getPercentages: function() {
        var allPercentages = data.allItems.exp.map(function(current) {
            return current.getPercentage();
        });
            return allPercentages;
    },
    
    getBudget: function() {
         return {
            budget: data.budget,
            totalInc: data.totals.inc,
            totalExp: data.totals.exp,
            percentages: data.percentages
         };
     },

        testing: function() {
            console.log(data);
        }
    };
    
})();

// UI CONTROLLER
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

var formatNumber = function(num, type) {
    var numSplit, int, dec, type;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    int = numSplit[0];

    if (int.length > 3) {
        int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;

}; 

var nodeListForEach = function(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
    }
};

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        
        
        addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber( obj.value, type));
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        // REMUVE THE ELEMENT FROM THE DOM
        // CAN NOT REMUVE AN ELEMENT BUT ONLY A CHIELD
        deleteListItem: function(selectorID) {
           var el = document.getElementById(selectorID);
           el.parentNode.removeChild(el); 
        },

        clearFields: function() {

            var fields, fieldsArr;
         //  IT RETURNS A LIST 
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
         // CONVERT THE LIST NTO AN ARRAY   
            fieldsArr = Array.prototype.slice.call(fields);
            
            // FUNKSIONI FOREACH DO TE MARRI SECILIN ELEMENT NJE E NGA NJE DHE DO TI KTHEJE VLEREN NE 0
            fieldsArr.forEach(function(current, index, array) {
                current.value = '';
            });

            fieldsArr[0].focus();
        },

       displayBudget: function(obj) {

        var type;
        obj.budget > 0 ? type = 'inc' : type = 'exp';
        
        document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
        document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
        document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

        if(obj.percentages > 0)
        {
            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentages + '%';
        } else {
            document.querySelector(DOMstrings.percentageLabel).textContent = '-------';
        }
       },


       displayPercentages: function(percentage) {
           var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
        
           nodeListforEach(fields, function(current, index) {
               if(percentage[index] > 0) {
                   current.textContent = percentage[index] + '%';
               } else {
                    current.textContent = '-----'; }
           });
        },
        
        displayMonth: function() {
            var now, months, month, year;
            
            now = new Date();
            //var christmas = new Date(2016, 11, 25);
            
            months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            month = now.getMonth();
            
            year = now.getFullYear();
            document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
        },

        changedType: function() {
            
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' +
                DOMstrings.inputDescription + ',' +
                DOMstrings.inputValue);
            
            nodeListForEach(fields, function(cur) {
               cur.classList.toggle('red-focus'); 
            });
            
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
            
        },
        
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });     
        
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

var updateBudget = function() {

            // 1. Calculate and update budget
            budgetCtrl.calculateBudget();

            // 2. Return the budget
            var budget = budgetCtrl.getBudget();

            // 3. Calculate and update percentages
            UICtrl.displayBudget(budget);

};

var updatePercentages = function() {
    //CALCULATE PERCENTAGES
     budgetCtrl.calculatePercentages();

    //READ PERCENTAGES FROM THE BUDGET CONTROLLER
     var percentages = budgetCtrl.getPercentages();

    //UPDATE THE UI WITH THE NEW PERCENTAGES
    UICtrl.displayPercentages(percentages);
};

    var ctrlAddItem = function() {
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();        
        
        if(input.description !== '' && !isNaN(input.value) && input.value > 0) {

         // 2. Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI
          UICtrl.addListItem(newItem, input.type);
          
        // 4. Clear the fields
          UICtrl.clearFields(); 
  
        // 5. Calculate and update budget
           updateBudget(); 
        
       // 6. Calculate and update percentages
              updatePercentages();
        }
    };
    
var ctrlDeleteItem = function(event) {
        
    var itemID, splitID, type, ID;
    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {

     splitID = itemID.split('-');
     type = splitID[0];
     ID = parseInt(splitID[1]);

     // 1. DELETE THE ITEM FROM THE DATA STRUCTURE
     budgetCtrl.deleteItem(type, ID);

     // 2. DELETE THE ITEM FROM THE UI
     UICtrl.deleteListItem(itemID);

     // 3. UPDATE AND SHOW THE NEW BUDGET
     updateBudget();

     // 4. Calculate and update percentages
    updatePercentages();
    }
};

    return {
        init: function() {
            UICtrl.displayMonth();
            UICtrl.displayBudget({ 
            budget: 0,
            totalInc: 0,
            totalExp: 0,
            percentages: -1
            });
            setupEventListeners();
        }
    };
    
})(budgetController, UIController);


controller.init();