//Use jQuery - - - - 

//global variables
var compRanNum = 0;
var winCount = 0;
var loseCount = 0;
var userCountMain = 0;
var userPick = 0;


$(document).on("click", function () {

    if (userCountMain === compRanNum) {
        alert("You Win");
        winCount = winCount + 1;
        $("#winCount").html(winCount);
        userCountMain = 0;
        initializeInfinity();
    }

    else if (userCountMain > compRanNum) {
        alert("You Lose");
        loseCount = loseCount + 1;
        $("#loseCount").html(loseCount);
        userCountMain = 0;
        initializeInfinity();
    }


});



var initializeInfinity = function () {

    $("#userNumbers", "userPick", "#computerNum").empty();    

    //computer generated randon numbers
    $("#computerPick").on("click", function () {
        compRanNum = Math.floor((Math.random() * 101) + 19);
        $("#computerNum").html(compRanNum);
    });


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

}

//start game...
initializeInfinity();






/*










$(document).on('click', ".crystal", function () {



    var numChoice = parseInt($(this).attr('#userNumbers'));

    userCountMain += numChoice;

  // $("#userNumbers").html(userCountMain);
*/
/*
});


    //apply function for buttons for user choice

    //button 1 soul gem onclick:

    $("#soul").click("click", function () {
        var soulNum = Math.floor((Math.random() * 12) + 1);
        soulNum += userRanNumSoul;
        var numPress = 0;
        if (soulNum > numPress) {
            $("#userNumbers").html(soulNum);
         }
        else {
            $("#userNumbers").html(userRanNumSoul);
        }
        soulNum += sumOfStones;
        userRanNumSoul += sumOfStones;
        console.log(sumOfStones);

    });

    //button 2 time gem onclick:
    $("#time").click("click", function () {
        var timeNum = Math.floor((Math.random() * 12) + 1);
        timeNum += userRanNumTime;
        var numPress = 0;
        if (timeNum > numPress) {
            $("#userNumbers").html(timeNum)
            
        }
        else {
            $("#userNumbers").html(userRanNumTime)
            
        }
        timeNum += sumOfStones;
        userRanNumTime += sumOfStones;
        console.log(sumOfStones);
    });

    //button 3 reality gem onclick:
    $("#reality").click("click", function () {
        var realityNum = Math.floor((Math.random() * 12) + 1);
        realityNum += userRanNumReality;
        var numPress = 0;
        if (realityNum > numPress) {
            $("#userNumbers").html(realityNum)
            
        }
        else {
            $("#userNumbers").html(userRanNumReality)
            
        }
        realityNum += sumOfStones;
        userRanNumReality += sumOfStones;
        console.log(sumOfStones);
    });


    //button 4 power gem onclick:
    $("#power").click("click", function () {
        var powerNum = Math.floor((Math.random() * 12) + 1);
        powerNum += userRanNumPower;
        var numPress = 0;
        if (powerNum > numPress) {
            $("#userNumbers").html(powerNum)
            
        }
        else {
            $("#userNumbers").html(userRanNumPower)
            
        }
        powerNum += sumOfStones;
        userRanNumPower += sumOfStones;
        console.log(sumOfStones);
    });


    //button 5 mind gem onclick:
    $("#mind").click("click", function () {
        var mindNum = Math.floor((Math.random() * 12) + 1);
        mindNum += userRanNumMind;
        var numPress = 0;
        if (mindNum > numPress) {
            $("#userNumbers").html(mindNum)
            
        }
        else {
            $("#userNumbers").html(userRanNumMind)
            
        }
        mindNum += sumOfStones;
        userRanNumMind += sumOfStones;
        console.log(sumOfStones);
    });


    //button 6 space gem onclick
    $("#space").click("click", function () {
        var spaceNum = Math.floor((Math.random() * 12) + 1);
        spaceNum += userRanNumSpace;
        var numPress = 0;
        if (spaceNum > numPress) {
            $("#userNumbers").html(spaceNum)
            
        }
        else {
            $("#userNumbers").html(userRanNumSpace)
            
        }
        spaceNum += sumOfStones;
        userRanNumSpace += sumOfStones;
        console.log(sumOfStones);
    });
        
    //if users clicks > computer random number, game over. add +1 to loseCount
        if(sumOfStones === compRanNum){
            
        }
        if(sumOfStones > compRanNum){

        }


    //if users clicks <= computer random number, winner! add +1 to winCount


    //reset game;


    //


    //
*/


