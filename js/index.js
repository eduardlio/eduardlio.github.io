var   sDev  = document.getElementById("skill-dev"),
   sDes  = document.getElementById("skill-des"),
   sMisc = document.getElementById("skill-misc");

var skills = [ sDev, sDes, sMisc ];

var currentDiv = 0;

var skills = [
   {
      elem: sDev,
      id: "skill-dev",
      desc: "",
      languages: [
         "Java", "SQL", "HTML", "CSS", "Javascript",
         "jQuery", "Angular 4+", "React", "Python",
         "Node", "Express", "PHP", "OOP", "Algorithms and Data Structures",
         "RDBMS"
      ],
      tools: [
         "Git", "Vim", "Sublime"
      ]
   },
   {
      elem: sDes,
      id: "skill-des",
      desc: "",
      languages: [
         "User Testing", "User Research", "UX Design", "UI Design",
         "Mockups", "Wireframing", "Data Visualization", "Graphic Design"
      ],
      tools: [
         "Adobe Illustrator", "Invision", "MarvelApp"
      ]
   },
   {
      elem: sMisc,
      id: "skill-misc",
      desc: "",
      languages: [
         "Route setting", "Filter Coffee", "Rock climbing", 
         "Podcasts (Akimbo by Seth Godin)",
         "Books (Meditations by Marcus Aurelius)"
      ],
      tools: []
   }
];
$("document").ready(function(){
   changeActive(0);
});
for( let i in skills ){
   var cSkill = skills[i].elem;
   cSkill.addEventListener("click", function(e){
      changeActive(i);
   });
}

function changeActive(number){
   var active = skills[number].elem;
   if(active.className === "skill-name"){
      active.className += " active-skill";
   }
   for (let j in skills){
      if ( j != number ){
         skills[j].elem.className = "skill-name";
      } 
   }
   var langs = "";
   var tools = "";

   if( skills[number].languages.length > 0 ){

      langs+="<h2 id='lang-head'>Languages/Skills</h2><p>";
      for( let k in skills[number].languages ){
         langs+=skills[number].languages[k];
         if( k <  skills[number].languages.length-1 ){
            langs+=", ";
         }
      }
      langs+="</p>";
   }

   if( skills[number].tools.length > 0 ){
      tools+="<h2 id='tools-head'>Tools</h2><p>";
      for (let m in skills[number].tools ){
         tools+=skills[number].tools[m];
         if( m < skills[number].tools.length-1 ){
            tools+=", ";
         }
      }
      tools+="</p>";
   }

   $("#lang-list").html(langs);
   $("#tool-list").html(tools);
};

$(".navigation").on("click", "a", function(){
   var go = "";
   var NAV_HEIGHT = 160;
   switch(this.id){
      case ("nav0"):
         scrollToId(0);
         break;
      case ("nav1"):
         scrollToId(1);
         break;
      case ("nav2"):
         scrollToId(2);
         break;
      case ("nav3"):
         scrollToId(3);
         break;
   }
});

function scrollToId(id){
   var distance = (700 * id);
   $("html, body").animate({
      scrollTop: distance
   }, 800, "swing", function(){
      console.log("done");
   });

   //var distance = 160 + (700 * (1+ currentDiv - id));
   //$(".transform-wrap").css({
   //transform: "translateY("+distance+"px)"
   //}, 2000, "swing");
};
function scrollUp(){

};
function scrollDown(){

};
