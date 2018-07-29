//Use jQuery - - - - 

//global variables
var compRanNum = 0;
var winCount = 0;
var loseCount = 0;
var userCountMain = 0;
var userPick = 0;
var userPick1;
var userPick2;
var userPick3;
var userPick4;
var userPick5;
var userPick6;


$(document).on("click", function () {
    //if user's total count is equal to random comp number, you win!
    if (userCountMain === compRanNum) {
        alert("You Win");
        winCount = winCount + 1;
        userCountMain = 0;
        $("#winCount").html(winCount);
        $("#userNumbers", "#computerNum").empty();
        initializeInfinity();
    }
    //if user's total count is greater than random comp number, you lose!
    else if (userCountMain > compRanNum) {
        alert("You Lose");
        loseCount = loseCount + 1;
        userCountMain = 0;
        $("#loseCount").html(loseCount);
        $("#userNumbers", "#computerNum").empty();
        initializeInfinity();
    }


});

var initializeInfinity = function () {
    //clear values
    $("#userNumbers").empty();
    $("#computerNum").empty();


    
    function randomNumber() {
        return Math.floor((Math.random() * 11) + 1);  
    }


    userPick1 = randomNumber();
    userPick2 = randomNumber();
    userPick3 = randomNumber();
    userPick4 = randomNumber();
    userPick5 = randomNumber();
    userPick6 = randomNumber();



    //computer generated randon numbers
    $("#computerPick").on("click", function () {
        compRanNum = Math.floor((Math.random() * 101) + 19);
        $("#computerNum").html(compRanNum);
    });


    //user generated random numbers
    $("#soul").on("click", function () {    
        userCountMain = userCountMain + userPick1;
        $("#userNumbers").html(userCountMain);
    });

    $("#time").on("click", function () {    
        userCountMain = userCountMain + userPick2;
        $("#userNumbers").html(userCountMain);
    });

    $("#reality").on("click", function () {    
        userCountMain = userCountMain + userPick3;
        $("#userNumbers").html(userCountMain);
    });

    $("#power").on("click", function () {    
        userCountMain = userCountMain + userPick4;
        $("#userNumbers").html(userCountMain);
    });

    $("#mind").on("click", function () {    
        userCountMain = userCountMain + userPick5;
        $("#userNumbers").html(userCountMain);
    });

    $("#space").on("click", function () {
        userCountMain = userCountMain + userPick6;
        $("#userNumbers").html(userCountMain);
    });

    $("#reset").on("click", function () {
        $("#userNumbers").empty();
        $("#computerNum").empty();
        initializeInfinity();
    });
}

//start game...
initializeInfinity();


