

var navMenu = document.getElementById("navMenu")
var logo = document.getElementById("logo")

function showMenu(){
    
        navMenu.className = "navbar"
        logo.style.marginRight = "50%"
    

    // navMenu.classList.remove("navbar")
    // navMenu.classList.add("nonee")
}

function hideMenu(){
    
        navMenu.className = "nonee"
        logo.style.marginRight = "70%"


    // navMenu.classList.remove("nonee")
    // navMenu.classList.add("navbar")
}

// function showMenu(){
//     navMenu.style.right = "0px"
// }

// function hideMenu(){
//     navMenu.style.right= "-200px"
// }

// function showMenu(){
//     navMenu.style.display = "block"
// }

// function hideMenu(){
//     navMenu.style.display= "none"
// }