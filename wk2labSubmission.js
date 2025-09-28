/*
* Exercise 1:
* Rewrite the following code block using ES6 syntax, ie. const, let, arrow function, template literals
* and for..of
*/
console.log("\n--- Exercise 1 ---");

const greeter = (names, count) => {
    const greetText = "Hello";
    for (const name of names) {
        console.log(`${greetText} ${name}`);
    }
};

greeter(["Randy Savage", "Rick Flair", "Hulk Hogan"], 3);

/*
* Exercise 2:
* Using destructuring assignment syntax and the spread operator, write a function will capitalize the
* first letter of a string.
*/
console.log("\n--- Exercise 2 ---");

const capitalizeFirst = (input = "") => {
    const [firstChar, ...restChars] = [...input];
    if (firstChar === undefined) return "";

    // restChars is an array → join it back into a string before calling toLowerCase()
    return firstChar.toUpperCase() + restChars.join("").toLowerCase();
};

console.log(capitalizeFirst("fooBar"));
console.log(capitalizeFirst("nodeJs"));

/*
* Exercise 3:
* Using array.proto.map create function to use the capitalize method in Exercise 2 to upper case
*the first character of each Color in the following array..
*/

console.log("\n--- Exercise 3 ---");

const colors = ["red", "green", "blue"];


const capitalizedColors = colors.map(color => capitalizeFirst(color));

console.log(capitalizedColors);


/*
* Exercise 4:
* Using array.proto.filter create a function that will filter out all the values of the array that are less
* than twenty.
*/

console.log("\n--- Exercise 4 ---");

const values = [1, 60, 34, 30, 20, 5];

const filterLessThan20 = values.filter(num => num < 20);

console.log(filterLessThan20);


/*
* Exercise 5:
* Using array.proto.reduce create calculate the sum and product of a given array.
*/

console.log("\n--- Exercise 5 ---");

const arr = [1, 2, 3, 4];

const calculateSum = arr.reduce((a, b) => a + b, 0);

const calculateProduct = arr.reduce((a, b) => a * b, 1);

console.log(calculateSum);
console.log(calculateProduct);


/*
* Exercise 6:
* Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
* from Car Class. The parameters for the Car class is the model and year. The parameters for the
* subclass is the model, year and balance.
*
* Use the super key word in the Sedan subclass to set the model and name in base Car
* constructor.
*/

class Car {
    constructor(model, year){
        this.model = model;
        this.year = year;
    }
    details(){
        return (`Model: ${this.model} Engine ${this.year}`);
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

console.log("\n--- Exercise 6 ---");
const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());
console.log();