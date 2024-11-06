console.log("functions.js");


//creating the function
function multiplyThree(num) {
    return num * 3;
}

//trigger/run/execute
console.log(multiplyThree(4));//12
console.log(multiplyThree(2));//6
console.log(multiplyThree(5));//15


function sum(num1, num2) {
    return num1 = num2;
}

let result = function () {
    console.log(result);
}

let sum2 = function () {
    console.log(3 + 3);
}
sum();

let total = 0;
let productName = prompt("Enter the product name:");
let productPrice = prompt("Enter the price:");


function addCart(price) {
    total = total + price;
    return total;
}

total = addCart(200);
console.log(total);
total = addCart(400);
console.log(total);
total = addCart(600);
console.log(total);

total = addCart(productPrice);

function calculateTaxes(total) {
    return 1.11 * total;
}


document.write("<p>" + productName + "" + calculateTaxes(total).toFixed(2) + "</p>");




function doubleNumber(num) {
    console.log(num * 2);
    return num * 2;
}
doubleNumber(4);
doubleNumber(15);

function combineNames(firstname, lastname) {
    console.log(firstname + "" + lastname);
    return firstname = "" + lastname;
}

combineNames("alice", "johnson");

function converttoSeconds(mins) {
    console.log(mins * 60);//second calculation
    return mins * 60;
}

converttoSeconds(1);
converttoSeconds(100);

function addProduct(){
    let prodName= prompt("Enter the product name:");
    document.getElementById("list").innerHTML+= `<p> ${prodName} </p>;`
}