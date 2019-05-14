
// Kontrolluesi i buxhetit
var kontrollor_buxheti = (function() {
 //CONSTRUCTER PER SHPENZIME DHE TE ARDHURA


 var Shpenzime = function(shenja, pershkrimi, vlera)
 {
     this.shenja = shenja;
     this.pershkrimi = pershkrimi;
     this.vlera = vlera;
};

var Te_Ardhura = function(shenja, pershkrimi, vlera)
{
    this.shenja = shenja;
    this.pershkrimi = pershkrimi;
    this.vlera = vlera;
};

var data = {

    element: {
        exp: [],
        inc: []
    },
    totals: {
        exp: 0,
        inc: 0
    },
};

return {
    addItem: function(tip, persh, val) {
        var e_dhene, id;
        // Krijimi i id te te_dhenes
        if(data.element.length > 0) {
         id = data.element[tip][data.element[tip].length - 1].shenja + 1;
        }
        else {
            id = 0;
        }
         // Krijojme nje te dhene te re bazuar ne tipin e te dhenes 'inc' apo 'exp'
        if(tip === 'exp') {
          e_dhene = new Shpenzime(id, persh, val);
        }
        else if(tip === 'inc')
        {
          e_dhene = new Te_Ardhura(id, persh, val);
        }

        // E vendosim te dhenen ne element
        data.element[tip].push(e_dhene);

        // Kthejme elementin e ri
        return e_dhene;
    },

    testim: function() {
        console.log(data);
    }
};

})();

// Kontrolluesi i unit Interface
var UIkontrollor = (function() {

    var DOMstrings =  {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

   return {
        te_dhena: function() {
     
            return{
         tipi: document.querySelector(DOMstrings.inputType).value,  //  E DHENA DO TE JETE OSE TIP INC OSE EXP
         pershkrimi: document.querySelector(DOMstrings.inputDescription).value,
         vlera: parseFloat(document.querySelector(DOMstrings.inputValue).value)
          };
         },

        shtoElem: function(obj, tip) {
          var html, newHtml, element1;
            //Krijojme nje objekt HTML me placeholder text
            if(tip === 'inc' ) {
                element1 = DOMstrings.incomeContainer;
                html =  '<div class="item clearfix" id="income-%shenja%"><div class="item__description">%pershkrimi%</div> <div class="right  clearfix"><div class="item__value">%vlera%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            } else if(tip === 'exp') {
                element1 = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%shenja%"><div class="item__description">%pershkrimi%</div><div class="right clearfix"><div class="item__value">%vlera%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

            }
          // Zevendesojme placeholder me te dhena
          newHtml = html.replace('%shenja%', obj.shenja);
          newHtml = newHtml.replace('%pershkrimi%', obj.pershkrimi);
          newHtml = newHtml.replace('%vlera%', obj.vlera);

          //Insert the Html into the DOM
          document.querySelector(element1).insertAdjacentHTML('beforeend', newHtml);
},
         getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// GLOBAL APP CONTROLLER
var kontrollor = (function(ktrl_buxhet, UIktrl) {

var setUpEventListener = function() {
  var Dom = UIktrl.getDOMstrings();

    document.querySelector(Dom.inputBtn).addEventListener('click', kontrollor_shumes);

   document.addEventListener('keypress', function(event) {

         if (event.keyCode === 13 || event.which === 13) {
              
             kontrollor_shumes();
        }
});
};

var kontrollor_shumes = function() {
var input, newel;

    //1. Get the field input data.
    input = UIktrl.te_dhena(); 

    //2. Add the item to the budget controller.
    newel = ktrl_buxhet.addItem(input.tip, input.pershkrimi, input.vlera);

     //3. Add the item to the UI
       UIktrl.shtoElem(newel, input.tip);
    
       //4. Calculate the budget
    //5. Display the budget in the UI
    
};

return {
    init: function(){
        setUpEventListener();
    }
};

})(kontrollor_buxheti, UIkontrollor);

kontrollor.init();


