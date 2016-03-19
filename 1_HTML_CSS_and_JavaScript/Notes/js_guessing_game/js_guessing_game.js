/*jslint browser: true */
/*jslint browser: true, devel: true */

/*The Global Variables*/

var target,
    guess_input_text,
    guess_input,
    finished = false,
    guesses = 0;

/*The main game function - do_game()*/

function do_game() {
    "use strict";
    /*Generate a random number in the range [1, 100]*/
    var random_number = Math.random() * 100,
        random_number_integer = Math.floor(random_number);
    target = random_number_integer + 1;

    /*Check the Input function - check_guess()*/
    function check_guess() {
        /*To check whether the players guess is: not a number.*/
        if (isNaN(guess_input)) {
            alert("You have not entered a number.\n\n" +
                "Please enter a number in the range 1 to 100.");
            return false;
        }

        /*To check whether the players guess is: out of range.*/
        if ((guess_input < 1) || (guess_input > 100)) {
            alert("Please enter an integer number in the range 1 to 100.");
            return false;
        }

        /*To check whether the players guess is: too large.*/
        if (guess_input > target) {
            alert("Your number is too large");
            return false;
        }

        /*To check whether the players guess is: too small.*/
        if (guess_input < target) {
            alert("Your number is too small");
            return false;
        }
        
        /*Correct!*/
        /*Give feedback to user*/
        alert("You got it! The number was " + target +
            ".\n\nIt took you " + guesses +
            " guesses to get the number!");
        return true;
    }

    /*A While Loop*/
    while (!finished) {
        guess_input_text = prompt("I am thinking of a number " +
            "in the range of 1 to 100.\n\n" +
            "What is the number?");
        /*prompt returns text so parseInt to return an integer*/
        guess_input = parseInt(guess_input_text, 10); /* parseInt needs a radix or JShint will throw Missing radix parameter ERROR*/
        guesses += 1;
        finished = check_guess();
    }
}