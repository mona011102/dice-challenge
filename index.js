var randomnumber1= Math.floor(Math.random()*6) +1;
var diceimage= "dice"+randomnumber1+".png";
var randomeimgsrc="./images/"+diceimage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , randomeimgsrc);

var randomnumber2= Math.floor(Math.random()*6)+1;
var diceimg2= "dice"+randomnumber2+".png";
var randomimgsrc2="./images/"+diceimg2;
document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML= "player 1 wins!";
}else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="player 2 wins!";
}else{
    document.querySelector("h1").innerHTML="draw between the players ,rematch";
}