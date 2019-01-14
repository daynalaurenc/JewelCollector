$(document).ready(function() {

var randomNumber = "";
var win = 0;
var loss = 0;
var totalNumber = "";
var jewels = [];
var redJewel = "";
var blueJewel = "";
var yellowJewel = "";
var greenJewel = "";

function resetGame() {
    var computerChoice = 19 + Math.floor(Math.random() * 120);
    for(var i = 0; i < 4; i++) {
        var jewelRandom = 1 + Math.floor(Math.random() * 12);
        var jewels = $("#jewels");
        $("#jewels").append(jewels);
        console.log(jewelRandom);
    };

    redJewel = [0];
    blueJewel = [1];
    yellowJewel = [2];
    greenJewel = [3];

    $("#random-number").text(computerChoice);
    // $("#random-number").html("Random Number: " + computerChoice);
    $("#total-number").text(totalNumber) 

};

resetGame();


$("#red").on("click", function() {
    var totalNumber = (totalNumber + redJewel);
    statement();
    console.log("Red Jewel is clicked!", totalNumber);
});

$("#blue").on("click", function() {
    var totalNumber = (totalNumber + blueJewel);
    statement();
    console.log("Blue Jewel is clicked!", totalNumber);
});

$("#yellow").on("click", function() {
    var totalNumber = (totalNumber + yellowJewel);
    statement();
    console.log("Yellow Jewel is clicked!", totalNumber);
});

$("#green").on("click", function() {
    var totalNumber = (totalNumber + greenJewel);
    statement();
    console.log("Green Jewel is clicked!", totalNumber);
    // var num = $(this).val();
});

function statement() {
    if (totalNumber === randomNumber) {
        win++;
        $("#wins").text("Wins: " + win);
        resetGame();
    }

    else if (totalNumber > randomNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
        resetGame();
    }

};

});







   







// switch(jewels) {
//     case "var redJewel":
//     result = redJewel + redJewel;
//     result = redJewel + blueJewel;
//     result = redJewel + yellowJewel;
//     result = redJewel + greenJewel;
//     break;

//     case "var blueJewel":
//     result = blueJewel + blueJewel;
//     result = blueJewel + yellowJewel;
//     result = blueJewel + greenJewel;
//     break;

//     case "var yellowJewel":
//     result = yellowJewel + yellowJewel;
//     result = yellowJewel + greenJewel;
//     break;

//     case "var greenJewel":
//     result = greenJewel + greenJewel
//     break;




