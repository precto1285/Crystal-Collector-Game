//Use jQuery - - - - 
$(document).ready(function () {

    //global variables
    winCount ="";
    loseCount ="";
    
    compRanNum ="";
    
    userRanNumSoul="";
    userRanNumTime="";
    userRanNumReality="";
    userRanNumPower="";
    userRanNumMind="";
    userRanNumSpace="";

    sumOfStones="";
    


    function initializeInfinity(){

        compRanNum ="";

        userRanNumSoul ="";
        userRanNumTime ="";
        userRanNumReality ="";
        userRanNumPower ="";
        userRanNumMind ="";
        userRanNumSpace ="";
        
        numberMatch = false;

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
        soulNum = Math.floor((Math.random() * 12) + 1);
        soulNum += userRanNumSoul;
        var i = 0;
        if($("#soul").val(i)){
            $("#userNumbers").html(paresInt(soulNum) + paresInt(sumOfStones));
        }
        else{
            $("#userNumbers").html(userRanNumSoul + paresInt(sumOfStones));
        }
    });

    //button 2 time gem onclick:
    $("#time").click("click", function () {
        timeNum = Math.floor((Math.random() * 12) + 1);
        timeNum += userRanNumTime;
        var i = 0;
        if($("#time").val(i)){
            $("#userNumbers").html(paresInt(timeNum) + paresInt(sumOfStones));
        }
        else{
            $("#userNumbers").html(userRanNumTime + paresInt(sumOfStones));
        }
        
    });

    //button 3 reality gem onclick:
    $("#reality").click("click", function () {
        realityNum = Math.floor((Math.random() * 12) + 1);
        realityNum += userRanNumReality;
        var i = 0;
        if($("#reality").val(i)){
            $("#userNumbers").html(paresInt(RealityNum) + paresInt(sumOfStones));
        }
        else {
        $("#userNumbers").html(userRanNumReality + paresInt(sumOfStones));
        }
    });


    //button 4 power gem onclick:
    $("#power").click("click", function () {
        powerNum = Math.floor((Math.random() * 12) + 1);
        powerNum += userRanNumPower;
        var i = 0;
        if($("#power").val(i)){
            $("#userNumbers").html(paresInt(powerNum) + paresInt(sumOfStones));
        }
        else{
            $("#userNumbers").html(userRanNumPower + paresInt(sumOfStones));
        }
    });


    //button 5 mind gem onclick:
    $("#mind").click("click", function () {
        mindNum = Math.floor((Math.random() * 12) + 1);
        mindNum += userRanNumMind;
        var i = 0;
        if($("#mind").val(i)){
            $("#userNumbers").html(paresInt(mindNum) + paresInt(sumOfStones));
        }
        else{
            $("#userNumbers").html(userRanNumMind + paresInt(sumOfStones));
        }
    });


    //button 6 space gem onclick
    $("#space").click("click", function () {
        spaceNum = Math.floor((Math.random() * 12) + 1);
        spaceNum += userRanNumSpace;
        var i = 0;
        if($("#space").val(i)){
            $("#userNumbers").html(paresInt(spaceNum) + paresInt(sumOfStones));
        }
        else{
            $("#userNumbers").html(userRanNumSpace + paresInt(sumOfStones));
        }
    });


});
//


// Update userNumbers with  $(#userNumbers).append();


//if users clicks > computer random number, game over. add +1 to loseCount


//if users clicks <= computer random number, winner! add +1 to winCount


//


//


//
