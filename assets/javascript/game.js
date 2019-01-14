$(document).ready(function() {

var computerChoice = 19 + Math.floor(Math.random() * 120);
$("#randomNumber").html("Random Number: " + computerChoice);
console.log("Beat this number!", computerChoice);

var randomNumber = "";
var win = 0;
var loss = 0;
var jewels = [];
var totalNumber = 0;
var redJewel = "";
var blueJewel = "";
var yellowJewel = "";
var greenJewel = "";  

// var computerChoice = 19 + Math.floor(Math.random() * 120);
// $("#random-number").text(computerChoice);

function resetGame() {
    computerChoice;
    totalNumber = 0;
    for(var i = 0; i < 4; i++) {
        var jewelRandom = 1 + Math.floor(Math.random() * 12);
        jewels.push(jewelRandom);
         

        // var jewel = $("<div>");
        //     jewel.attr({
        //         "class": "jewel",
        //         "data-random": jewelRandom,
        //     });
        // $(".jewels").append(jewel);
        console.log(jewelRandom);
            
    };
    
    
    redJewel = jewels[0];
    blueJewel = jewels[1];
    yellowJewel = jewels[2];
    greenJewel = jewels[3];
    
    $("#random-number").text(computerChoice);
    // $("#random-number").html("Random Number: " + computerChoice);
    $("#finalNumber").text(totalNumber) 
    
};
    
resetGame();
   
// $("#red").on("click", function() {
    
//     var num = parseInt($(this).attr("data-random"));
    
//     totalNumber += num;

//     console.log(totalNumber);


$("#red").on("click", function() {
    totalNumber = (totalNumber + redJewel);
    $("#finalNumber").text(totalNumber);
    statement();
    console.log("Red Jewel is clicked!", totalNumber);
});
        
$("#blue").on("click", function() {
    totalNumber = (totalNumber + blueJewel);
    $("#finalNumber").text(totalNumber);
    statement();
    console.log("Blue Jewel is clicked!", totalNumber);
});
        
$("#yellow").on("click", function() {
    totalNumber = (totalNumber + yellowJewel);
    $("#finalNumber").text(totalNumber);
    statement();
    console.log("Yellow Jewel is clicked!", totalNumber);
});
        
$("#green").on("click", function() {
    totalNumber = (totalNumber + greenJewel);
    $("#finalNumber").text(totalNumber);
    statement();
    console.log("Green Jewel is clicked!", totalNumber);

});

function statement() {
    if (totalNumber === computerChoice) {
        win++;
        $("#wins").text("Wins: " + win);
        console.log("You win!");
        resetGame();
    }
    
    else if (totalNumber > computerChoice) {
        loss++;
        $("#losses").text("Losses: " + loss);
        console.log("You lose!");
        resetGame();
    }
    
    
};

});

