var gamePattern =[];

var buttonColours=["red","blue", "green","yellow"];

var userClickedPattern=[];
var level = 0;
var index = 1;



function nextSequence(){
    var randomNumber = Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber); 
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(randomChosenColour);

    $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100);

    playSound(randomChosenColour);
    level=level+1;
      $("h1").text("LEVEL"+" " +level);

    
    
    

}
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){

  $("#"+ currentColour).addClass("pressed");

  setTimeout(function() {
     $("#"+ currentColour).removeClass("pressed");
  },100);
}
 var firstKeyPress = false;
$(document).keypress(function () {
  
 
  if(firstKeyPress===false){
    firstKeyPress=true;
     $("h1").text("LEVEL"+" " +level);
    nextSequence();
  }
  
     
  
  
});
$(".btn").click(function(){
  var userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})


/*for(var i =0;i<gamePattern.length;i++){
  for(var j=0;j<userClickedPattern.length;j++){
    if(gamePattern===userClickedPattern){
      level=level+1;
      etc for restarting
    }
  }
}*/
function checkAnswer(currentLevel){
  
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");
  
   if (userClickedPattern.length === gamePattern.length){
    setTimeout(function() {
     $(nextSequence()).delay;
  },1000);
  userClickedPattern.length=0;
   }
  }
  else{
    console.log("wrong");
    playSound("wrong");

     setTimeout(function() {
     $("body").addClass("game-over");
  },100);
  setTimeout(function() {
     $("body").removeClass("game-over");
  },400);
    setTimeout(function () {$("h1").text("TRY HARDER TRY AGAIN");
      }, 500);
    setTimeout(function () {
    $("h1").text("Level 0").addClass("green"); 
  }, 3000);
    startOver();


  }
}
function startOver(){
  gamePattern=[];
  userClickedPattern=[];
  level=0;
   $("h1").text("LEVEL"+" " +level);
   firstKeyPress = false;

}