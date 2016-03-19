/*jslint browser: true, devel: true */
/*jslint plusplus: true */ // or use i+=1

function handleClick(event) {
    "use strict";
    event.stopPropagation();

    var node = event.target,
        thisPath = node.nodeName;

    while (node.parentNode) {
        node = node.parentNode;
        thisPath = node.nodeName + " > " + thisPath;
    }

    alert(thisPath);
}

function attatchHandler(node) {
    "use strict";
    var i;

    if (node === null) {
        return;
    }
    node.onclick = handleClick();

    for (i = 0; i < node.childNodes.length; i++) {
        attatchHandler(node.childNodes[i]);
    }

}