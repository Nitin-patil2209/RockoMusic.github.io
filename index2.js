var first = document.getElementById("ww");
var second = document.getElementById("aa");
var third = document.getElementById("ss");
var fourth = document.getElementById("dd");

var isPlaying = false;
var isplaying2 = false;
var isplaying3 = false;
var isplaying4 = false;

function Song1(){

if(isPlaying){
  first.pause();

}
else{
  first.play();
}
first.onplaying = function(){
 isPlaying = true;
};

first.onpause = function(){
 isPlaying = false;
};
};


function Song2(){

if(isplaying2){
  second.pause();

}
else{
  second.play();
}
second.onplaying = function(){
 isplaying2 = true;
};

second.onpause = function(){
 isplaying2 = false;
};
};

function Song3(){

if(isplaying3){
  third.pause();

}
else{
  third.play();
}
third.onplaying = function(){
 isplaying3 = true;
};

third.onpause = function(){
 isplaying3 = false;
};
}


function Song4(){

if(isplaying4){
  fourth.pause();

}
else{
  fourth.play();
}
fourth.onplaying = function(){
 isplaying4 = true;
};

fourth.onpause = function(){
 isplaying4 = false;
};
}