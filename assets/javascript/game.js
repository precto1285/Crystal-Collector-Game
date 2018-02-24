//Use jQuery - - - - 

//global variables
var compRanNum = 0;
var winCount = 0;
var loseCount = 0;
var userCountMain = 0;
var userPick = 0;


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

    //computer generated randon numbers
    $("#computerPick").on("click", function () {
        compRanNum = Math.floor((Math.random() * 101) + 19);
        $("#computerNum").html(compRanNum);
    });


    //user generated random numbers
    $("#soul").on("click", function () {
        userPick = Math.floor((Math.random() * 11) + 1);
        userCountMain = userCountMain + userPick;
        $("#userNumbers").html(userCountMain);
    });

    $("#time").on("click", function () {
        userPick = Math.floor((Math.random() * 11) + 1);
        userCountMain = userCountMain + userPick;
        $("#userNumbers").html(userCountMain);
    });

    $("#reality").on("click", function () {
        userPick = Math.floor((Math.random() * 11) + 1);
        userCountMain = userCountMain + userPick;
        $("#userNumbers").html(userCountMain);
    });

    $("#power").on("click", function () {
        userPick = Math.floor((Math.random() * 11) + 1);
        userCountMain = userCountMain + userPick;
        $("#userNumbers").html(userCountMain);
    });

    $("#mind").on("click", function () {
        userPick = Math.floor((Math.random() * 11) + 1);
        userCountMain = userCountMain + userPick;
        $("#userNumbers").html(userCountMain);
    });

    $("#space").on("click", function () {
        userPick = Math.floor((Math.random() * 11) + 1);
        userCountMain = userCountMain + userPick;
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


