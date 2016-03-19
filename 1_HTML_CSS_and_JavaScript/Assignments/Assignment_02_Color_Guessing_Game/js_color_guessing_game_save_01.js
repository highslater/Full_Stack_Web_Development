/*jslint browser: true */
/*jslint browser: true, devel: true */

/*The Global Variables*/

var target_index,
    guess_input_text,
    finished = false,
    guesses = 0,
    colors = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

/*The main game function - do_game()*/

function do_game() {
    "use strict";
    /*Generate a random number in the range [1, 100]*/
    var random_number = Math.random() * colors.length;
    target_index = Math.floor(random_number);
    
    /*Debugging
    alert("The color is " + colors[target_index] +
          "\n\ncolors[0]= " + colors[0] + "\n\ncolors.indexOf('black') = " + colors.indexOf('black'));*/
    

    /*Check the Input function - check_guess()*/
    function check_guess() {
        /*To check whether the players guess is: not in the colors array.*/
        if (colors.indexOf(guess_input_text) === -1) {
            alert("Sorry I don't recognize your color.\n\n" +
                "Please try again.");
            return false;
        }

        /*To check whether the players guess is: too large.*/
        if (guess_input_text > colors[target_index]) {
            alert("Sorry your guess is not correct\n\n" +
                 "Hint: your color is alphabetically higher than mine.");
            return false;
        }

        /*To check whether the players guess is: too small.*/
        if (guess_input_text < colors[target_index]) {
            alert("Sorry your guess is not correct\n\n" +
                 "Hint: your color is alphabetically lower than mine.");
            return false;
        }
        
        /*Correct!*/
        /*Give feedback to user*/
        /*correct for 1 guess*/
        document.body.style.backgroundColor = colors[target_index];
        alert("Congratulations you have guessed the color!" +
                  ".\n\nIt took you " + guesses + " guesses " + "to finish the game!\n\n" +
                  "You can see the color in the background.\n");
        
        return true;
        
    }
/*"blue, cyan, gold, gray, green, magenta, orange, red, white, yellow.\n\n"*/
    /*A While Loop*/
    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colors: \n\n" + colors + "What color am I thinking of?");
        guesses += 1;
        finished = check_guess();
    }
}