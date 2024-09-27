/* 
* Truthy:
* 01. true
* 02. any number (+ve, -ve) will be truthy other than 0
* 03. any string other than empty string
* 04. "0", "false"
* 05. {}
* 06. []


* Falsy:
* 01. false
* 02. 0
* 03. "" (empty string)
* 04. undefined
* 05. null
*/
let x = [5, 6];
console.log(x);
if(x) {
    console.log("Value of x is truthy");
}
else {
    console.log("Value of x is falsy");
}

// Optional 
// Check falsy
const y = null;
if (!y) {
    console.log("Value is falsy")
}
const z = {class: 9};
// Check true
if(!!x) {
    console.log("Value is truthy");
}