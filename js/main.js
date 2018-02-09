$("#ham").on("click", function(){
   console.log("lmao");
   if($("#navi").hasClass("responsive")){
      $("#navi").removeClass("responsive");
   } else {
      $("#navi").addClass("responsive");
   }

   if($("#ham").hasClass("ham-active")){
      $("#ham").removeClass("ham-active");
   } else {
      $("#ham").addClass("ham-active");
   }
});
