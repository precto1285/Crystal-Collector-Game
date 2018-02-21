//Use jQuery - - - - 


//global variables
winCount = 0;
loseCount = 0;
compRanNum = 0;
userRanNum = 0;
userButtonAdd = 0;


//computer generated randon numbers
$("#computerPick").append(function () {
    compRanNum = Math.floor((Math.random() * 120) + 19);
    console.log(compRanNum);
});


//apply function for buttons for user choice

//button 1 soul gem onclick:
$("#soul").click(function () {
    var soulNum = $(Math.floor((Math.random() * 12) + 1));
    console.log(soulNum);
});

//button 2 time gem onclick:
$("#time").click(function () {
    var timeNum = $(Math.floor((Math.random() * 12) + 1));
    console.log(timeNum);
});

//button 3 reality gem onclick:
$("#reality").click(function () {
    var realityNum = $(Math.floor((Math.random() * 12) + 1));
    console.log(realityNum);
});


//button 4 power gem onclick:
$("#power").click(function () {
    var powerNum = $(Math.floor((Math.random() * 12) + 1));
    console.log(powerNum);
});


//button 5 mind gem onclick:
$("#mind").click(function () {
    var mindNum = $(Math.floor((Math.random() * 12) + 1));
    console.log(mindNum);
});


//button 6 space gem onclick:
$("#space").click(function () {
    var spaceNum = $(Math.floor((Math.random() * 12) + 1));
    console.log(spaceNum);
});

//


// Update userNumbers with  $(#userNumbers).append();


//if users clicks > computer random number, game over. add +1 to loseCount


//if users clicks === computer random number, winner! add +1 to winCount


//


//


//
