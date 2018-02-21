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
        var sumOfStones = "";
        var soulNum = Math.floor((Math.random() * 12) + 1);
        soulNum += userRanNumSoul;
        var numPress = 0;
        if (soulNum > numPress) {
            soulNum += sumOfStones;
        }
        else {
            userRanNumSoul += sumOfStones;
        }
        $("#userNumbers").html(sumOfStones);
    });

    //button 2 time gem onclick:
    $("#time").click("click", function () {
        var sumOfStones = "";
        var timeNum = Math.floor((Math.random() * 12) + 1);
        timeNum += userRanNumTime;
        var numPress = 0;
        if (timeNum > numPress) {
            timeNum += sumOfStones;
        }
        else {
            userRanNumTime += sumOfStones;
        }
        $("#userNumbers").html(sumOfStones);
    });

    //button 3 reality gem onclick:
    $("#reality").click("click", function () {
        var sumOfStones = "";
        var realityNum = Math.floor((Math.random() * 12) + 1);
        realityNum += userRanNumReality;
        var numPress = 0;
        if (realityNum > numPress) {
            realityNum += sumOfStones;
        }
        else {
            userRanNumReality += sumOfStones;
        }
        $("#userNumbers").html(sumOfStones);
    });


    //button 4 power gem onclick:
    $("#power").click("click", function () {
        var sumOfStones = "";
        var powerNum = Math.floor((Math.random() * 12) + 1);
        powerNum += userRanNumPower;
        var numPress = 0;
        if (powerNum > numPress) {
            powerNum += sumOfStones;
        }
        else {
            userRanNumPower += sumOfStones;
        }
        $("#userNumbers").html(sumOfStones);
    });


    //button 5 mind gem onclick:
    $("#mind").click("click", function () {
        var sumOfStones = "";
        var mindNum = Math.floor((Math.random() * 12) + 1);
        mindNum += userRanNumMind;
        var numPress = 0;
        if (mindNum > numPress) {
            mindNum += sumOfStones;
        }
        else {
            userRanNumMind += sumOfStones;
        }
        $("#userNumbers").html(sumOfStones);
    });


    //button 6 space gem onclick
    $("#space").click("click", function () {
        var sumOfStones = "";
        var spaceNum = Math.floor((Math.random() * 12) + 1);
        spaceNum += userRanNumSpace;
        var numPress = 0;
        if (spaceNum > numPress) {
            spaceNum += sumOfStones;
        }
        else {
            userRanNumSpace += sumOfStones;
        }
        $("#userNumbers").html(sumOfStones);
    });


});
//


// Update userNumbers with  $(#userNumbers).append();


//if users clicks > computer random number, game over. add +1 to loseCount


//if users clicks <= computer random number, winner! add +1 to winCount


//


//


//
