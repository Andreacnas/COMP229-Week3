// Contact JS file
// Name: Andrea Cavalcanti Nascimento
// Student Number: 301250129
// Date: Oct 7th, 2022

//****** Carroussel ****** 
var i = 0; 
var images = [];
var time = 2000;

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

//Redirect to Home page
function clickSubmit(){
    window.location.href="./home"
}