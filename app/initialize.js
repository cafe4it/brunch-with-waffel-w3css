const Turbolinks = require("turbolinks")
const $ = require("jquery")
Turbolinks.start()
function fix_sidemenu() {
	var w, top;
	w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	top = scrolltop()
	if (w < 993 && w > 600) {
		if (top == 0) {
			document.getElementById("mySidenav").style.top = "144px";
		}
		if (top > 0 && top < 100) {
			document.getElementById("mySidenav").style.top = (144 - top) + "px";
		}
		if (top > 100) {
			document.getElementById("mySidenav").style.top = document.getElementById("topnav").offsetHeight + "px";
			document.getElementById("belowtopnav").style.paddingTop = "44px";
			document.getElementById("topnav").style.position = "fixed";
			document.getElementById("topnav").style.top = "0";
		} else {
			document.getElementById("belowtopnav").style.paddingTop = "0";
			document.getElementById("topnav").style.position = "relative";
		}
		document.getElementById("leftmenuinner").style.paddingTop = "0"; //SCROLLNYTT
	} else {
		if (top == 0) {
			document.getElementById("mySidenav").style.top = "112px";
		}
		if (top > 0 && top < 66) {
			document.getElementById("mySidenav").style.top = (112 - top) + "px";
		}
		if (top > 66) {
			document.getElementById("mySidenav").style.top = "44px";
			if (w > 992) {
				document.getElementById("leftmenuinner").style.paddingTop = "44px";
			} //SCROLLNYTT
			document.getElementById("belowtopnav").style.paddingTop = "44px";
			document.getElementById("topnav").style.position = "fixed";
			document.getElementById("topnav").style.top = "0";
		} else {
			if (w > 992) {
				document.getElementById("leftmenuinner").style.paddingTop = (112 - top) + "px";
			} //SCROLLNYTT
			document.getElementById("belowtopnav").style.paddingTop = "0";
			document.getElementById("topnav").style.position = "relative";
		}
	}
}

function sidemenuitemintoview() {
	var a, b, i = 0;
	a = document.getElementById("leftmenuinnerinner");
	if (!a || !a.getElementsByClassName) {
		return false;
	}
	b = a.getElementsByClassName("active");
	if (b.length < 1) {
		return false;
	}
	while (!isIntoView(a, b[0])) {
		i++
		if (i > 1000) {
			break;
		}
		a.scrollTop += 10;
	}
}
function isIntoView(x, y) {
	var a = x.scrollTop;
	var b = a + window.innerHeight;
	var ytop = y.offsetTop;
	var ybottom = ytop + 140;
	return ((ybottom <= b) && (ytop >= a));
}
function scrolltop() {
	var top = 0;
	if (typeof(window.pageYOffset) == "number") {
		top = window.pageYOffset;
	} else if (document.body && document.body.scrollTop) {
		top = document.body.scrollTop;
	} else if (document.documentElement && document.documentElement.scrollTop) {
		top = document.documentElement.scrollTop;
	}
	return top;
}

if (window.addEventListener) {
	window.addEventListener("scroll", function () {
		fix_sidemenu();
	});
	window.addEventListener("resize", function () {
		fix_sidemenu();
	});
	window.addEventListener("touchmove", function () {
		fix_sidemenu();
	});
	window.addEventListener("load", function () {
		fix_sidemenu();
	});
} else if (window.attachEvent) {
	window.attachEvent("onscroll", function () {
		fix_sidemenu();
	});
	window.attachEvent("onresize", function () {
		fix_sidemenu();
	});
	window.attachEvent("ontouchmove", function () {
		fix_sidemenu();
	});
	window.attachEvent("onload", function () {
		fix_sidemenu();
	});
}

$('#mySidenav_btnClose').click(function(){
	document.getElementById("mySidenav").style.display = "none";
})

$('#mySidenav_btnOpen').click(function(){
	document.getElementById("mySidenav").style.display = "block";
})