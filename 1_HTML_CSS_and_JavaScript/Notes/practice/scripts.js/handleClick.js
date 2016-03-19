/*jslint browser: true, devel: true */
/*jslint plusplus: true */ // or use i+=1

function handleClick(event) {
    "use strict";
    event.stopPropagation();

    var node = event.target,
        thisPath = node.nodeName;

    while (node.parentNode) {
        node = node.parentNode;
        thisPath = node.nodeName + " ==> " + thisPath;
    }
    alert(thisPath);
}

// Below needs work
function attachHandler(node) {
    "use strict";
    
    var i = 0;

    if (node === null) {
        return;
    }
    
    node.onclick = handleClick;

    for (i; i < node.childNodes.length; ++i) {
        attachHandler(node.childNodes[i]);
    }
}

//SEE http://jsfiddle.net/D886E/15/

//var add_the_handlers = function (nodes) {
//    "use strict";
//    var i;
//
//    for (i = 0; i < nodes.length; i += 1) {
//        (function (i) {
//            nodes[i].onclick = function (e) {
//                alert(i);
//            };
//        
//        })(i);
//    }
//};
//
//pnodes = document.getElementsByClassName("node");
//
//add_the_handlers(pnodes);
