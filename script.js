const p1 = document.querySelector(".p1")
const p2 = document.querySelector(".p2")
const p3 = document.querySelector(".p3")
window.addEventListener("scroll", borderLight)

function borderLight() {
    if (window.scrollY >= 700) {
        console.log("james")
        p1.classList.add("active")
        p1.classList.remove("display")
    }
    // else {
    //     p1.classList.remove("active")
    //     p1.classList.add("display")
    // }
    console.log(window.scrollY)
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}