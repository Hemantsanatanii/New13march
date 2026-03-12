const price = 110;

const input = document.getElementById("usdtInput");

if(input){

input.addEventListener("input", function(){

let value = input.value;

if(value < 100){

document.getElementById("error").innerText =
"Minimum sell amount is 100 USDT";

document.getElementById("result").innerText = "";

}

else{

document.getElementById("error").innerText = "";

document.getElementById("result").innerText =
"You will receive ₹ " + value * price;

}

});

}

const form = document.getElementById("sellForm");

if(form){

form.addEventListener("submit", function(e){

let amount = document.getElementById("amount").value;

if(amount < 100){

alert("Minimum sell limit is 100 USDT");

e.preventDefault();

}

});

}
