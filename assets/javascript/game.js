$(document).ready(function() {

var randomNumber = "";
var win = 0;
var loss = 0;
var totalNumber = "";
var jewels = [];


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


$("#jewels").on("click", function() {
    // totalNumber + redjewel = randomNumber;
    var num = $(this).val();
    console.log("Jewel is clicked!", totalNumber);




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

});


