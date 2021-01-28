/*
Test jQuery script
 */

let paragraphs = $("p");
console.log("number of paragraphs: " + paragraphs.length);

for (let i = 0; i < paragraphs.length; i++)
{
    let paragraphText = paragraphs[i].textContent;
    console.log(paragraphText);
}

// Add item to table
function myUpdateFunction(event){
    let fieldValue = $("#myTextField").val();
    $("#tableName tbody").append("<tr><td>"+fieldValue+"</td></tr>");

}

let formButton1 = $("#button1");
formButton1.on("click", myUpdateFunction);

// Hide item
function hideFunction(event){
    $("#hideme").hide(500);
}

let formButton2 = $("#button2");
formButton2.on("click", hideFunction);

// Validate
function validateFunction(event){
    let formField = $("#validateMe").val();
    let regularExpression = /^[A-Za-z0-9]{1,10}$/;

    if(regularExpression.test(formField))
    {
        console.log("Good");
    }
    else {
        console.log("Bad");
    }
}

let formButton3 = $("#button3");
formButton3.on("click", validateFunction);

// Package data from form entry
function jsonFunction(event){
    let formJsonObject = {};
    let formVal = $("#myName").val();
    formJsonObject.myName = formVal;
    let jsonString = JSON.stringify(formJsonObject);
    console.log(jsonString);
    $('#jsonResult').text(jsonString);
}

let formButton4 = $("#button4");
formButton4.on("click", jsonFunction);