var scrollPos = $(window).scrollTop();
var items = [
   {
      name: "Random Rosetta",
      id: "item-rrs",
      desc: "Development, Angular",
      link: "rrs.html"
   },
   {
      name: "Convict Life",
      id: "item-convict",
      desc: "Development and Design, jQuery",
      link: "convict.html"
   },
   {
      name: "Portfolios",
      id: "item-portfolios",
      desc: "Design and Development",
      link: "portfolios.html"
   }
]

$(document).ready(function(){
   changeText();
});
$(window).scroll(function(){
   scrollPos = $(window).scrollTop();
   changeText();
});
function changeText(){
   var pane = Math.floor((scrollPos+70)/800);
   if(pane >= 4){
      $("#current-div").fadeOut();
   } else {
      $("#current-div").fadeIn();
      $("#current-text").text(items[pane].name);
      $("#current-sub").text(items[pane].desc);
    //  $("#current-text").attr({
     //    href: items[pane].link
      //});
   }
}
