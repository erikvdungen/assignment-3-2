var all = $("#Ted, #Robin, #Barney, #Marshall, #Lily, #Layer_2, #Layer_1");
var all1 = $("#Ted, #Robin, #Barney, #Marshall, #Lily");

$(".tedbox").hide();
$(".robinbox").hide();
$(".barneybox").hide();
$(".marshallbox").hide();
$(".lilybox").hide();

$("#Scooter").hide();
$("#Penny").hide();
$("#Uk").hide();
$("#Price").hide();
$("#Hand").hide();

$("#Ted").on("click", function() {
    console.log("Ted");
    $(".tedbox").show();
    all.css("filter", "blur(5px)");
});

$(".button-right").on("click", function() {
    $(".tedbox, .robinbox, .barneybox, .marshallbox, .lilybox").hide(2000);
    $("#Penny").show(2000);
    $(".button-right").css("background-color", "green");
    all.css("filter", "none");
});
$(".button-wrong").on("click", function() {
    $(".tedbox").hide(1000);
    $(".button-wrong").css("background-color", "red");
    all.css("filter", "none");
});


$("#Robin").on("click", function() {
    console.log = ("Robin");
    $(".robinbox").show();
});

$("#Barney").on("click", function() {    
    console.log = ("Barney");
    $(".barneybox").show();
});

$("#Marshall").on("click", function() {
    console.log = ("Marshall");
    $(".marshallbox").show();
});

$("#Lily").on("click", function() {
    console.log = ("Lily");
    $(".lilybox").show();
});

