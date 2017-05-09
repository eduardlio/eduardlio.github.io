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
	var elem = document.getElementById("name-change");
	var rName = Math.floor(Math.random()*names.length);
	var next = names[rName];
	elem.innerHTML= next;
}
$(function (){
	$.scrollify({
		section: ".item-wrap",
		sectionName: ".item-wrap",
		scrollbars: false
	})
});