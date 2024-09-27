/* 
 * 8 Ways to Get Undefined
 * 01. Variable That is Not Initialized Will Give Undefined
 * 02. Function With No Return Will Give Undefined
 * 03. Parameter That is Not Passed Will be Undefined
 * 04. If Return Has Nothing on The Right Side Will Return Undefined
 * 05. Property That Doesn't Exists on an Object Will Give You Undefined
 * 06. Accessing Array Elements Outside of The Index Range Will Give Undefined
 * 07. Deleting an Element Inside an Array Will Give Undefined
 * 08. Set a Value Directly to Undefined Will Give Undefined
*/
// 01. Variable That is Not Initialized Will Give Undefined
let first ;
console.log(first);


// 02. Function With No Return Will Give Undefined
function second(a, b) {
    const total = a + b;
}

const result = second();

console.log(result);


// 03. Parameter That is Not Passed Will be Undefined
function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}

third(2, 5);

console.log(result);


// 04. If Return Has Nothing on The Right Side Will Return Undefined 
function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return;
    }
    return a + b;
}

// const total = noNegative(2, 5);
const total = noNegative(2, -5);

console.log(total);


// 05. Property That Doesn't Exists on an Object Will Give You Undefined
const fifth = {id: 2, name: "fifth", age: 40};

console.log(fifth.age, fifth.salary);


// 06. Accessing Array Elements Outside of The Index Range Will Give Undefined
const sixth = [4, 89, 87, 56, 54];

console.log(sixth[1], sixth[5], sixth[20]);


// 07. Deleting an Element Inside an Array Will Give Undefined
delete sixth[1]; // You should not do it. Instead of it use splice.

console.log(sixth);


// 08. Set a Value Directly to Undefined Will Give Undefined
const eighth = undefined;

console.log(eighth);


// If There is No value to set, Then use Null instead of Undefined
const ninth = null;

const data = {results: [], updated: null};

console.log(typeof undefined);
console.log(typeof null);