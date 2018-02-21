//Use jQuery - - - - 
$(document).ready(function () {

    //global variables
    var winCount = "";
    var loseCount = "";

    var compRanNum = "";

    var userRanNumSoul = "";
    var userRanNumTime = "";
    var userRanNumReality = "";
    var userRanNumPower = "";
    var userRanNumMind = "";
    var userRanNumSpace = "";





    function initializeInfinity() {

        var compRanNum = "";

        var userRanNumSoul = "";
        var userRanNumTime = "";
        var userRanNumReality = "";
        var userRanNumPower = "";
        var userRanNumMind = "";
        var userRanNumSpace = "";

        var sumOfStones = "";

        var numberMatch = false;

        $("#soul, #time, #reality, #power, #mind, #space").empty();
    }


    //computer generated randon numbers
    $("#computerPick").click("click", function () {
        compRanNum = Math.floor((Math.random() * 120) + 19);
        $("#computerNum").html(compRanNum);
    });







    //apply function for buttons for user choice

    //button 1 soul gem onclick:
    $("#soul").click("click", function () {
        var soulNum = Math.floor((Math.random() * 12) + 1);
        var sumOfStones = "";
        soulNum += userRanNumSoul;
        var numPress = 0;
        if (soulNum > numPress) {
            $("#userNumbers").html(soulNum += sumOfStones);
        }
        else {
            $("#userNumbers").html(userRanNumSoul += sumOfStones);
        }
        
    });

    //button 2 time gem onclick:
    $("#time").click("click", function () {
        var timeNum = Math.floor((Math.random() * 12) + 1);
        var sumOfStones = "";
        timeNum += userRanNumTime;
        var numPress = 0;
        if (timeNum > numPress) {
            $("#userNumbers").html(timeNum += sumOfStones);
        }
        else {
            $("#userNumbers").html(userRanNumtime += sumOfStones);
        }
        
    });

    //button 3 reality gem onclick:
    $("#reality").click("click", function () {
        var realityNum = Math.floor((Math.random() * 12) + 1);
        var sumOfStones = "";
        realityNum += userRanNumReality;
        var numPress = 0;
        if (realityNum > numPress) {
            $("#userNumbers").html(realityNum += sumOfStones);
        }
        else {
            $("#userNumbers").html(userRanNumReality += sumOfStones);
        }
        
    });


    //button 4 power gem onclick:
    $("#power").click("click", function () {
        var powerNum = Math.floor((Math.random() * 12) + 1);
        var sumOfStones = "";
        powerNum += userRanNumPower;
        var numPress = 0;
        if (powerNum > numPress) {
            $("#userNumbers").html(powerNum += sumOfStones);
        }
        else {
            $("#userNumbers").html(userRanNumPower += sumOfStones);
        }
        
    });


    //button 5 mind gem onclick:
    $("#mind").click("click", function () {
        var mindNum = Math.floor((Math.random() * 12) + 1);
        var sumOfStones = "";
        mindNum += userRanNumMind;
        var numPress = 0;
        if (mindNum > numPress) {
            $("#userNumbers").html(mindNum += sumOfStones);
        }
        else {
            $("#userNumbers").html(userRanNumMind += sumOfStones);
        }
        
    });


    //button 6 space gem onclick
    $("#space").click("click", function () {
        var spaceNum = Math.floor((Math.random() * 12) + 1);
        var sumOfStones = "";
        spaceNum += userRanNumSpace;
        var numPress = 0;
        if (spaceNum > numPress) {
            $("#userNumbers").html(spaceNum += sumOfStones);
        }
        else {
            $("#userNumbers").html(userRanNumSpace += sumOfStones);
        }
        
    });

//if users clicks > computer random number, game over. add +1 to loseCount


//if users clicks <= computer random number, winner! add +1 to winCount


//reset game;


//


//


});




