/*
    Assignment 2
 */

// Part 1
function printHello(event){
    console.log("Hello");
}
let formButton1 = $("#button1");
formButton1.on("click", printHello);

// Part 2
function addFields(event){

    let formField1 = $("#field1").val();
    let formField2 = $("#field2").val();

    let num1 = parseInt(formField1);
    let num2 = parseInt(formField2);
    let add = num1 + num2;
    $("#field3").val(add);

}
let formButton2 = $("#button2");
formButton2.on("click", addFields);

// Part 3 -- toggle paragraph to be hidden and not hidden

function hideFunction(event){
    if ($("#paragraphToHide").is(":visible"))
    {
        $("#paragraphToHide").hide(500);
    } else
    {
        $("#paragraphToHide").show(500);
    }
}

let formButton3 = $("#button3");
formButton3.on("click", hideFunction);

// Part 4
function validateFunction(event){
    let formField = $("#phoneField").val();
    let regularExpression = /^([1-9][0-9]{2})[\-]([0-9]{3})[\-.]([0-9]{4})$/; //mandatory hyphens

    if(regularExpression.test(formField))
    {
        console.log("OK");
    }
    else {
        console.log("Bad");
    }
}

let formButton4 = $("#button4");
formButton4.on("click", validateFunction);

// Part 5
function jsonFunction(event){
    let formJsonObject = {};
    formJsonObject.firstName = $("#firstName").val();
    formJsonObject.lastName = $("#lastName").val();
    formJsonObject.email = $("#email").val();
    console.log(formJsonObject);
}

let formButton5 = $("#button5");
formButton5.on("click", jsonFunction);