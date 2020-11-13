
var images = ['img/pho1.jpg', 'img/pho3.jpg', 'img/pho2.jpg', 'img/pho4.jpg', 'img/pho5.jpg', 'img/photo6.jpg'];
var arrayIndex = 0;

var myImage = document.getElementById("mainImage");


function init() {

var buttonPrevious = document.getElementById("buttonPrevious");
var buttonNext = document.getElementById("buttonNext");
if (buttonPrevious.addEventListener) {
buttonPrevious.addEventListener("click", previousFunction);
if(buttonNext.addEventListener) {
buttonNext.addEventListener("click", nextFunction);
   }
  }
 }

function previousFunction (){
	processClicks("previous")
}

function nextFunction (){
	processClicks("next")
}

function processClicks(action) {
   if (action == "next"){
    arrayIndex++;
   }else if (action == "previous"){
    arrayIndex--;
   }
   if (arrayIndex < 0 || arrayIndex > images.length-1){
    arrayIndex = 0;
   }
     myImage.src = images[arrayIndex];

}


function mouseover(){
	document.getElementById('p').innerHTML = "slide show";

}

document.getElementById('body').addEventListener('mouseover', mouseover);

function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
  let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
  document.getElementById('p').style.color = randomColor;
  document.getElementById('p').style.fontSize = '100px';
 
}
document.getElementById('p').addEventListener('click', colorChange);


