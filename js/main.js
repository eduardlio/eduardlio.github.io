var interests = ["bouldering", "web design", "espresso", "my v60 pourover", "startups", "reading", "learning", "coffee", "doing", "meditating"];
var interestCounter = 0;
setInterval(function(){
	if(interestCounter==interests.length){interestCounter=0;}
	var next = interests[interestCounter];
	var love = document.getElementById("changer");
	love.innerHTML = next;
	interestCounter++;
}, 1000);


$(document).ready(function(){
	randomName();
})
function randomName(){
	var names = ["Eduardo", "Eddie", "Edward", "Ed", "Eddy"];
	var tunes = ["Stay tuned.", "That's all folks.", "Watch this space.", "Keep on keepin' on."];
	
	var name = document.getElementById("name-change");
	var tune = document.getElementById("tuner");
	
	var rName = Math.floor(Math.random()*names.length);
	var rTune = Math.floor(Math.random()*tunes.length);
	
	var nextName = names[rName];
	var nextTune = tunes[rTune];
	name.innerHTML= nextName;
	tune.innerHTML = nextTune;
}
$(function (){
	$.scrollify({
		section: ".item-wrap",
		sectionName: ".item-wrap",
		scrollbars: false
	})
});