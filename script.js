var nav = document.createElement("nav");
nav.setAttribute("class", "navbar navbar-expand-lg bg-light padding:20px");
var div = document.createElement("div");
div.setAttribute("class", "collapse navbar-collapse");
var div1 = document.createElement("div")
div1.setAttribute("class", "navi");
var list = document.createElement("ul");
list.setAttribute("class", "navbar-nav");
var li1 = document.createElement("li");
li1.setAttribute("class", "nav-item");
var a1 = document.createElement("a");
a1.setAttribute("href", "home.html");
a1.innerHTML = "HOME";

var li2 = document.createElement("li");
li2.setAttribute("class", "nav-item");
var a2 = document.createElement("a");
a2.setAttribute("href", "world.html");
a2.innerHTML = "WORLD";
var li3 = document.createElement("li");
li3.setAttribute("class", "nav-item");
var a3 = document.createElement("a");
a3.setAttribute("href", "politics.html");
a3.innerHTML = "POLITICS";
var li4 = document.createElement("li");
li4.setAttribute("class", "nav-item");
var a4 = document.createElement("a");
a4.setAttribute("href", "sports.html");
a4.innerHTML = "SPORTS";
var li5 = document.createElement("li");
li5.setAttribute("class", "nav-item");
var a5 = document.createElement("a");
a5.setAttribute("href", "technology.html");
a5.innerHTML = "TECHNOLOGY";

li1.append(a1);
li2.append(a2);
li3.append(a3);
li4.append(a4);
li5.append(a5);
list.append(li1, li2, li3, li4, li5);
div1.append(list);
div.append(div1);
nav.append(div);
document.body.append(nav);