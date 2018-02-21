//Use jQuery - - - - 


//global variables
winCount = 0;
loseCount = 0;
compRanNum = 0;
userRanNum = 0;
userButtonAdd = 0;


//computer generated randon numbers
$("#computerPick").append(function() {
compRanNum = Math.floor((Math.random() * 12) + 1);

});


//apply function for buttons for user choice

//button 1 soul gem onclick:
$("#soul").click(function () {
    var soulNum = Math.floor((Math.random() * 120) + 19);
    $(this).hide();
    $('#userNumbers').append(soulNum + userRanNum);

});

//button 2 time gem onclick:
$("#time").click(function () {
    var timeNum = Math.floor((Math.random() * 120) + 19);
    $(this).hide();
    $('#userNumbers').append(timeNum + userRanNum);
});

//button 3 reality gem onclick:
$("#reality").click(function () {
    var realityNum = Math.floor((Math.random() * 120) + 19);
    $(this).hide();
    $('#userNumbers').append(realityNum + userRanNum);
});


//button 4 power gem onclick:
$("#power").click(function () {
    var powerNum = Math.floor((Math.random() * 120) + 19);
    $(this).hide();
    $('#userNumbers').append(powerNum + userRanNum);
});


//button 5 mind gem onclick:
$("#mind").click(function () {
    var mindNum = Math.floor((Math.random() * 120) + 19);
    $(this).hide();
    $('#userNumbers').append(mindNum + userRanNum);
});


//button 6 space gem onclick:
$("#space").click(function () {
    Math.floor((Math.random() * 120) + 19);
    $(this).hide();
    $('#userNumbers').append(spaceNum + userRanNum);
});

//


// Update userNumbers with  $(#userNumbers).append();


//if users clicks > computer random number, game over. add +1 to loseCount


//if users clicks === computer random number, winner! add +1 to winCount


//


//


//
