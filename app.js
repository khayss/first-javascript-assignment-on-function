
let name = prompt("Please enter your name");

let weight = Number(prompt("Please enter weight in kg"));


function weightConverter(name,weight){
let weightInPounds = (weight * 2.2);

let yourName = (`Hello ${name}, your weight in pounds is ${weightInPounds} lbs`);

return yourName;
}

let weightCalculator = weightConverter(name, weight);

alert(weightCalculator);
