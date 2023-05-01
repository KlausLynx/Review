const view1 = document.getElementById("review");
view1.style.display = "flex";
view1.style.marginTop = "7rem";
view1.style.flexDirection = "column";
view1.style.gap = "10px";

const view2 = document.getElementById('thanks');
view2.style.display = "none";
view2.style.marginTop = "7rem";
view2.style.flexDirection = "column";
view2.style.gap = "10px";

const text = document.getElementById("value");
text.style.paddingLeft = "40px"

const numbs1 = document.getElementById("num1");
numbs1.addEventListener("click", (event) => {
    numbs1.classList.toggle("darkorange");
    numbs2.classList.remove("darkorange");
    numbs3.classList.remove("darkorange");
    numbs4.classList.remove("darkorange");
    numbs5.classList.remove("darkorange");
});
const numbs2 = document.getElementById("num2");
numbs2.addEventListener("click", (event) => {
    numbs2.classList.toggle("darkorange");
    numbs1.classList.remove("darkorange");
    numbs3.classList.remove("darkorange");
    numbs4.classList.remove("darkorange");
    numbs5.classList.remove("darkorange");
});
const numbs3 = document.getElementById("num3");
numbs3.addEventListener("click", (event) => {
    numbs3.classList.toggle("darkorange");
    numbs1.classList.remove("darkorange");
    numbs2.classList.remove("darkorange");
    numbs4.classList.remove("darkorange");
    numbs5.classList.remove("darkorange");
});
const numbs4 = document.getElementById("num4");
numbs4.addEventListener("click", (event) => {
    numbs4.classList.toggle("darkorange");
    numbs1.classList.remove("darkorange");
    numbs2.classList.remove("darkorange");
    numbs3.classList.remove("darkorange");
    numbs5.classList.remove("darkorange");
});
const numbs5 = document.getElementById("num5");
numbs5.addEventListener("click", (event) => {
    numbs1.classList.remove("darkorange");
    numbs2.classList.remove("darkorange");
    numbs3.classList.remove("darkorange");
    numbs4.classList.remove("darkorange");
    numbs5.classList.toggle("darkorange");
});

const verify = document.getElementById("submit");


verify.addEventListener("click", (event) => {
    view1.style.display = "none";
    view2.style.display = "flex";
 }); 

 function myFunction1() {
    var element = document.getElementById("num1");

    if(element.classList.toggle("click")) {
        document.getElementById("value").innerHTML = "You selected" + " 1 " + " " + " out of 5"
    } else {
        document.getElementById("value").innerHTML = "You didn't rate us"
    }
 }
 function myFunction2() {
    var element = document.getElementById("num2");

    if(element.classList.toggle("click")) {
        document.getElementById("value").innerHTML = "You selected" + " 2 " + " " + " out of 5"
    } else {
        document.getElementById("value").innerHTML = "You didn't rate us"
    }
 }
 function myFunction3() {
    var element = document.getElementById("num3");

    if(element.classList.toggle("click")) {
        document.getElementById("value").innerHTML = "You selected" + " 3 " + " " + " out of 5"
    } else {
        document.getElementById("value").innerHTML = "You didn't rate us"
    }
 }
 function myFunction4() {
    var element = document.getElementById("num4");

    if(element.classList.toggle("click")) {
        document.getElementById("value").innerHTML = "You selected" + " 4 " + " " + " out of 5"
    } else {
        document.getElementById("value").innerHTML = "You didn't rate us"
    }
 }
 function myFunction5() {
    var element = document.getElementById("num5");

    if(element.classList.toggle("click")) {
        document.getElementById("value").innerHTML = "You selected" + " 5 " + " " + " out of 5"
    } else {
        document.getElementById("value").innerHTML = "You didn't rate us"
    }
 }