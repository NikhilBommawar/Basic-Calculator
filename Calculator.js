
var calculator=document.getElementById("calculator");
console.log(calculator);

var add=document.getElementById("Sum");
var subtract=document.getElementById("Subtract");
var Multiply=document.getElementById("Multiply");
var addDivide=document.getElementById("Divide");

add.addEventListener("click",(e) => {
    e.preventDefault();
    const value1=parseInt(calculator.value1.value);
    const value2=parseInt(calculator.value2.value);
    var result=value1+value2;
    alert(result);
})

subtract.addEventListener("click",(e) => {
    e.preventDefault();
    const value1=calculator.value1.value;
    const value2=calculator.value2.value;
    var result=value1-value2;
    alert(result);
})

Multiply.addEventListener("click",(e) => {
    e.preventDefault();
    const value1=calculator.value1.value;
    const value2=calculator.value2.value;
    var result=value1*value2;
    alert(result);
})



Divide.addEventListener("click",(e) => {
    e.preventDefault();
    const value1=calculator.value1.value;
    const value2=calculator.value2.value;
    var result=value1/value2;
    alert(result);
})

// JS logic for Changing background color

// getting form
var colorchange=document.getElementById("action-change");
console.log(colorchange);
// getting button
var action=document.getElementById("change-color");
console.log(action);
// creating event for chnagng color
action.addEventListener("click",(e) => {

    e.preventDefault();
    var getcolor=colorchange.color.value;
    console.log(getcolor);
    var bodyelement=document.getElementById("bodytag");
    console.log(bodyelement);
    bodyelement.style.backgroundColor=getcolor;

})
