//Use jQuery - - - - 

//global variables
    var compRanNum;
    var winCount = 0;
    var loseCount = 0;
    var previous = 0;



    var initializeInfinity = function() {

    $(".userPick").empty();

    //computer generated randon numbers
    $("#computerPick").click("click", function () {
        compRanNum = Math.floor((Math.random() * 120) + 19);
        $("#computerNum").html(compRanNum);
    });

    for (var i = 0; i < 6; i++) {

        var userRandom = Math.floor(Math.random() * 12) + 1;

        var stones = $("#soul", "#time", "#reality", "#power", "#mind", "#space");
        stones.attr({
            "userPick": userRandom
        });

        $(".userPick").append(stones);

    }
    console.log(".userPick");
}

initializeInfinity();


    $(document).on('click', ".userPick", function () {

        var num = parseInt($(this).attr('userPick'));


});

/*
    //apply function for buttons for user choice

    //button 1 soul gem onclick:

    $("#soul").click("click", function () {
        var soulNum = Math.floor((Math.random() * 12) + 1);
        var sumOfStones = "";
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
        var sumOfStones = "";
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
        var sumOfStones = "";
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
        var sumOfStones = "";
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
        var sumOfStones = "";
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
        var sumOfStones = "";
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


