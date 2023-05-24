$(function (){
    $("button").click(function (){
       $("div").animate({
           left: '600px',
           opacity:0.2,
           width:'+=200px',
           height:'+=200px'
          },  );
    });
});