//var pixGrid = function() {
//    function centerImage(theImage) {
//        var myDifX = (window.innerWidth - theImage.width) / 2, myDifY = (window.innerHeight - theImage.height) / 2;
//        return theImage.style.top = myDifY + "px", theImage.style.left = myDifX + "px",
//        theImage;
//    }
//    var myNode = document.querySelector(".pixgrid");
//    myNode.addEventListener("click", function(e) {
//        if ("IMG" === e.target.tagName) {
//            var myOverlay = document.createElement("div");
//            myOverlay.id = "overlay", document.body.appendChild(myOverlay), myOverlay.style.position = "absolute",
//            myOverlay.style.top = 0, myOverlay.style.backgroundColor = "rgba(0,0,0,0.7)", myOverlay.style.cursor = "pointer",
//            myOverlay.style.width = window.innerWidth + "px", myOverlay.style.height = window.innerHeight + "px",
//            myOverlay.style.top = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px";
//            var imageSrc = e.target.src, largeImage = document.createElement("img");
//            largeImage.id = "largeImage", largeImage.src = imageSrc.substr(0, imageSrc.length - 7) + ".jpg",
//            largeImage.style.display = "block", largeImage.style.position = "absolute", largeImage.addEventListener("load", function() {
//                this.height > window.innerHeight && (this.ratio = window.innerHeight / this.height,
//                this.height = this.height * this.ratio, this.width = this.width * this.ratio), this.width > window.innerWidth &&
// (this.ratio = window.innerWidth / this.width, this.height = this.height * this.ratio, this.width = this.width * this.ratio),
// centerImage(this), myOverlay.appendChild(largeImage); }), largeImage.addEventListener("click", function() { myOverlay &&
// (window.removeEventListener("resize", window, !1), window.removeEventListener("scroll", window, !1),
// myOverlay.parentNode.removeChild(myOverlay)); }, !1), window.addEventListener("scroll", function() { myOverlay && (myOverlay.style.top =
// window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px"); }, !1), window.addEventListener("resize", function() {
// myOverlay && (myOverlay.style.width = window.innerWidth + "px", myOverlay.style.height = window.innerHeight + "px", myOverlay.style.top
// = window.pageYOffset + "px", myOverlay.style.left = window.pageXOffset + "px", centerImage(largeImage)); }, !1); } }, !1); }();


//function getElementsByClass(searchClass,node,tag) {
//    var classElements = new Array();
//    if ( node == null )
//        node = document;
//    if ( tag == null )
//        tag = '*';
//    var els = node.getElementsByTagName(tag);
//    var elsLen = els.length;
//    var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
//    for (i = 0, j = 0; i < elsLen; i++) {
//        if ( pattern.test(els[i].className) ) {
//            classElements[j] = els[i];
//            j++;
//        }
//    }
//    return classElements;
//}
//
//toggleSidebar = function(){
//    var item = getElementByClass('toggle-sidebar')[0];
//    if (item.style.display == "block")
//    {
//        item.style.display = 'none';
//    }
//    else
//    {
//        item.style.display = 'block';
//    }
//}
//toggleSidebar = function(){
//    var item = getElementByID('sideBarNavList')[0];
//    if (item.style.display == "block")
//    {
//        item.style.display = 'none';
//    }
//    else
//    {
//        item.style.display = 'block';
//    }
//}

toggleVisibility = function(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
};
;;

//function toggleSidebar(id) {
//    var e = document.getElementById(id);
//    var f = document.getElementById(id+"+");
//
//    if(e.style.display == 'block')
//        {
//            e.style.display = 'none';
//            f.style.display = 'block';
//        }
//    else
//        {
//            e.style.display = 'block';
//            f.style.display = 'none';
//        }
//}




//function ShowHide(inp) {
//    var vis = inp.checked;
//    var sections = document.querySelectorAll('section.' + inp.className);
//    for (var i = 0; i < sections.length; i++) {
//        if (!vis) {
//            var this_vis;
//            var classes = sections[i].className.split(' ');
//            for (var c = 0; c < classes.length; c++) {
//                this_vis = document.querySelector('i.' + classes[c]).checked;
//                if (this_vis) break;
//            }
//        }
//        sections[i].style.display = this_vis || vis ? '' : 'none';
//    }
//}

//Do Not Show Again
//function localStorageAvailable() {
//    if (typeof(Storage) !== "undefined") {
//        return true;
//    }
//    else {
//        return false;
//    }
//}

//$('#checkbox').click(function(){
//    if ($('#checkbox').attr('checked')) {
//        if (localStorageAvailable())
//            localStorage.DoNotShowMessageAgain = "true";
//    }
//})
//if (localStorageAvailable()) {
//    if (localStorage.DoNotShowMessageAgain && localStorage.DoNotShowMessageAgain === "true") {
//        // user doesn't want to see the message again, so handle accordingly
//    }
//};

//// Add attributes to all elements inside of an div container. [attr, anchors, .prop]
//// jQuery
//$(document).ready(function(){
//    $(‘#bannerDiv :a[href]’).each(function(){
//        $(this).attr(‘target’, ‘_blank’)
//    })
//});
//
//// Vanilla JS
//window.onload = function(){
//    var anchors = document.getElementById('bannerDiv').getElementsByTagName('a');
//    for (var i=0; i<anchors.length; i++){
//        anchors[i].setAttribute('target', '_blank');
//    }
//}