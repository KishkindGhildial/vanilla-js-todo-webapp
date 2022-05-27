$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(500, function(){
      $(this).remove();
   });
   event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
   if(event.which === 13){
      var todolist = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + todolist + "</li>");
   }
});

var count = 0;

$(".fa-plus").on("click", function(){
      $("input").fadeToggle();
});

