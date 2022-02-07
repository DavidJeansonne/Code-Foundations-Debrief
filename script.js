// Use the essential programming concepts of variables, operators, and data types.

priceBeforeTaxes = 1.99;
percentOfTaxes = 0.09;
nameOfMoney = " dollars ";
totalCostWithTax = priceBeforeTaxes * percentOfTaxes + priceBeforeTaxes;

console.log(totalCostWithTax + nameOfMoney);

// Use the essential programming concepts of functions and control flow.

function calculateTaxes(number) {
  totalCostWithTax = number * percentOfTaxes + number;
  console.log(totalCostWithTax + nameOfMoney);
}

calculateTaxes(10);
calculateTaxes(20);
calculateTaxes(30);
calculateTaxes(40);

// Use the essential programming concepts of lists and loops.

currentSession = 0;
remainingSessions = 4;
sessions = ["One", "Two", "Three", "Four"];

while (remainingSessions > 0) {
  console.log("You are on session " + sessions[currentSession])
  currentSession = currentSession + 1;
  remainingSessions = remainingSessions - 1;
}

// Use the essential programming concepts of variables, operators, and data types.

// Use the essential programming concepts of functions and control flow.

// Use the essential programming concepts of lists and loops.
