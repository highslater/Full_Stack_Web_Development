/*jslint plusplus: true */ // or use i+=1
/*jslint browser: true */
/*jslint browser: true, devel: true */

var numberOfFaces = 5,
    theLeftSide = document.getElementById("leftSide"),
    theRightSide = document.getElementById("rightSide"),
    leftSideImages,
    theBody = document.getElementsByTagName("body")[0],
    the_node = document.getElementsById('body');

function generate_faces() {
    "use strict";
    var i = 0,
        this_img,
        top = Math.floor((Math.random() * 400) + 1),
        left = Math.floor((Math.random() * 400) + 1),
        the_node = document.getElementById('the_body');

    for (i; i < numberOfFaces; i++) {
        this_img = document.createElement("img");
        this_img.src = "http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png";
        this_img.style.top = top + "px";
        this_img.style.left = left + "px";
        theLeftSide.appendChild(this_img);
        top = Math.floor((Math.random() * 400) + 1); // seed
        left = Math.floor((Math.random() * 400) + 1); // seed
    }
    leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.onclick = function nextLevel(event) {
        event.stopPropagation();
        numberOfFaces += 5;

        while (theLeftSide.firstChild) {
            theLeftSide.removeChild(theLeftSide.firstChild);
        }
        while (theRightSide.firstChild) {
            theRightSide.removeChild(theRightSide.firstChild);
        }
        generate_faces();
    };

    theBody.onclick = function gameOver() {
        alert("Game Over!");
        theBody.onclick = null;
        theLeftSide.lastChild.onclick = null;
    };
}