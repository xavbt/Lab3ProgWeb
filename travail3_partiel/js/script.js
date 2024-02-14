$(document).ready(function(){

//1
$("h2").hover(function() {
    $(this).css("color","red")},
    function(){
    $("h2").css("color", "blue");
});
//2
$("div#green").hide();
//3
$("div#checkbox input").checkboxradio({
    icon: false
});

//4
$(".rectangle").click(function() {
    $("div#checkbox label").css("color" , $(this).attr("id"));
})

//5
$("div#checkbox input").click(function() {
    var couleur = $(this).val();
    $("#" + couleur).toggle();
    
})
//6
$(function(){
    $("div#slider").slider({min:9 ,max:141, text:"div#slider title", 
    slide: 
    function(){
        $(".rectangle").width($("div#slider").slider("value"));
        $("div#largeur label").text($(".rectangle").width() + "px")
    }});
})

//7
$("div#slider").tooltip();

//8
$("div#message button").button({
    icon :  "ui-icon-comment"
    
});
$("div#message button").click(function() {
    $("#dialog").dialog($("#dialog"));
});

//9
$("#add").button({
    icon :  "ui-icon-plus"
    
});
$("#add").click(function() {
    texte = "Tu autem, Fanni, quod mihi tantum tribui dicis quantum ego nec adgnosco postulo.";
    $("#paragraphe p").last().before(("<p>" + texte + "<p>"));
});

//10
$("#del").button({
    icon :  "ui-icon-minus"
    
});

$("#del").click(function() {
    $("#paragraphe p").last().remove();
});

//11
$("#animation").button({
    icon :  "ui-icon-play"
    
});

$("#animation").click(function() {
$("#animation").animate({left:'300px'}, "slow" );
$("#animation").animate({left:'0px'}, "slow" );
});

//12
$("#ajax").button({
    icon :  "ui-icon-help"
    
});
$("#ajax button").click(function () {
    $("#reponse").load("ajax/jquery.txt");
})

//13
$("#datepicker").datepicker();

//14
$("#spinner").spinner({min:0, max:10});

//15
//1
$("#containerButton").click(function() {
    var elements = $("#container").children();
    for (var i = elements.length; i >= 0; i--) {
        $("#container").append(elements[Math.random() * i | 0]);
    }
});
//2
var colors = ['red', 'blue', 'green', 'yellow', 'pink', 'black'];
var currentIndex = 0;

    $("#colorButton").click(function() {
        $("#textCouleur").animate({color: colors[currentIndex]}, 1000, function() {
            currentIndex = (currentIndex + 1) % colors.length;
        });
});
//3
var texts = ["hambuger", "cheesebuger", "big mac", "whopper"];
var currentIndex = 0;

$("#rotatingTextButton").click(function() {
    $("#fadeText").fadeOut("slow", function() {
        $(this).text(texts[currentIndex]).fadeIn("slow");
        currentIndex = (currentIndex + 1) % texts.length;
    });
});
});