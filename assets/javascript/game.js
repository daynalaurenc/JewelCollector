$(document).ready(function() {

var computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#randomNumber").html("Random Number: " + computerChoice);
console.log("Beat this number!", computerChoice);
    
var randomNumber = "";
var win = 0;
var loss = 0;
var totalNumber = 0;
var redJewel = "";
var blueJewel = "";
var yellowJewel = "";
var greenJewel = "";  
    

    
function resetGame() {
    computerChoice = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    totalNumber = 0;
    var jewels = [];
    for(var i = 0; i < 4; i++) {
        var jewelRandom = Math.floor(Math.random() * 11) + 1;
        jewels.push(jewelRandom);
             
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
    