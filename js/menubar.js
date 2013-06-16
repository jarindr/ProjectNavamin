$('#hiddenabout').hide();
$("#about").hover(function(){
    $('#hiddenabout').show();
    $('#about').css("text-shadow","none");
    $('#about').css("background-color","white");
    $('#about').css("color","green"); 
},function(){
    $('#hiddenabout').hide();
    $('#about').css("text-shadow","2px 2px 2px #000");
    $('#about').css("background-color","transparent");
    $('#about').css("color","#C4C4C4");
});
$("#hiddenabout").hover(function(){
    $('#about').css("background-color","white");
    $('#about').css("color","green"); 
    $('#hiddenabout').show();
    $('#about').css("text-shadow","none");
},function(){
    $('#about').css("background-color","transparent");
    $('#about').css("color","#C4C4C4"); 
    $('#hiddenabout').hide();
    $('#about').css("text-shadow","2px 2px 2px #000");
});
/*-----------------------------THIS IS FOR ABOUT------------------------------*/