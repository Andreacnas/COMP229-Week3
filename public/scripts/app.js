// JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct 7th, 2022

//IIFE
(function(){
    function Start(){
        console.log('App Started');        
    }

    window.addEventListener('load', Start);
})();

//***** HOME PAGE *****
//Redirect to about page
function clickAbout(){
    window.location.href="./about"
}

//***** ABOUT PAGE *****
//Redirect to contact page
function clickContact(){
    window.location.href="./contact"
}

//***** CONTACT PAGE *****
//Carroussel
var i = 0; 
var images = [];
var time = 1000;

//Image List
images[0] = './content/images/Avatar1.png';
images[1] = './content/images/Avatar2.png';
images[2] = './content/images/Avatar3.png';


//Slideshow
function slideImg(){
    document.slide.src = images[i];

    if (i< images.length - 1) {
        i++;
    } else {
        i =0;
    }

    setTimeout ("slideImg()", time);

}

window.onload = slideImg;

//Button to save info
function clickSend(){
    //Prevent to refresh the webpage
    event.preventDefault();   

    //Create an myData object
    const myData = {};

    //Store variables inside myData object
    myData.firstName = document.getElementById("firstName").value;
    myData.lastName = document.getElementById("lastName").value;
    myData.emailAddress = document.getElementById("emailAddress").value;
    myData.userMessage = document.getElementById("userMessage").value;

    //console.log(myData);

    //Redirect to home page
    window.location.href="./home"
}