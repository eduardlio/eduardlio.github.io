var $document = $(document),
		windowHeight = $(window).height(),
		windowWidth = $(window).width();
$(document).ready(function() {
		if($document.scrollTop() === 0){
			$("header").hide();
		}
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
	});
	var data = ["web developer", "rock climber", "developer", "part-time coffee addict", "web designer"]
	var interestCounter = 0;
	setInterval(function(){
		if(interestCounter==data.length){interestCounter=0;}
		var next = data[interestCounter];
		var elem = document.getElementById("changer");
		elem.innerHTML = next;
		interestCounter++;
	}, 1000);
});
$(document).scroll(function() {

	  if ($document.scrollTop() >= (windowHeight * 0.8)) {
			// user scrolled 50 pixels or more;
			// do stuff
			// $(".navi-fade").fadeIn(800);
			$("header").fadeIn(800);
	  } 
		else {
		//   $(".navi-fade").fadeOut(300);
		  $("header").fadeOut(100);
	  }
});
