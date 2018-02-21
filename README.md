# week-4-game

                ### Option One: CrystalsCollector Game (Recommended)
                <br>
                <br> ![Crystal Collector](Images/1-CrystalCollector.jpg)
                <br>
                <br> 1. [Watch the demo](homework_demos/crystalsCollector_demo.mp4).
                <br>
                <br> 2. The player will have to guess the answer, just like in Hangman. This time, though, the player will guess
                with numbers instead of letters.
                <br>
                <br> 3. Here's how the app works:
                <br>
                <br> * There will be four crystals displayed as buttons on the page.
                <br>
                <br> * The player will be shown a random number at the start of the game.
                <br>
                <br> * When the player clicks on a crystal, it will add a specific amount of points to the player's total score.
                <br>
                <br> * Your game will hide this amount until the player clicks a crystal.
                <br> * When they do click one, update the player's score counter.
                <br>
                <br> * The player wins if their total score matches the random number from the beginning of the game.
                <br>
                <br> * The player loses if their score goes above the random number.
                <br>
                <br> * The game restarts whenever the player wins or loses.
                <br>
                <br> * When the game begins again, the player should see a new random number. Also, all the crystals will have
                four new hidden values. Of course, the user's score (and score counter) will reset to zero.
                <br>
                <br> * The app should show the number of games the player wins and loses. To that end, do not refresh the page
                as a means to restart the game.
                <br>
                <br> ##### Option 1 Game design notes
                <br>
                <br> * The random number shown at the start of the game should be between 19 - 120.
                <br>
                <br> * Each crystal should have a random hidden value between 1 - 12.
                <br>