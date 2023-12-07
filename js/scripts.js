var all = $("#Ted, #Robin, #Barney, #Marshall, #Lily, #Layer_2, #Layer_1");
var right = document.getElementById("right");
var wrong = document.getElementById("wrong");


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

$(".button-right-ted").on("click", function() {
    $(".tedbox").hide(2000);
    $("#Penny").show(2000);
    $(".button-right-ted").css("background-color", "green");
    all.css("filter", "none");
    });

$(".button-right-ted").on("click", function() {
    right.play();
});

$(".button-right-robin").on("click", function() {
    $(".robinbox").hide(2000);
    $("#Uk").show(2000);
    $(".button-right-robin").css("background-color", "green");
    all.css("filter", "none");
    });

$(".button-right-robin").on("click", function() {
    right.play();
});

$(".button-right-barney").on("click", function() {
    $(".barneybox").hide(2000);
    $("#Price").show(2000);
    $(".button-right-barney").css("background-color", "green");
    all.css("filter", "none");
    });

$(".button-right-barney").on("click", function() {
    right.play();
});

$(".button-right-marshall").on("click", function() {
    $(".marshallbox").hide(2000);
    $("#Hand").show(2000);
    $(".button-right-marshall").css("background-color", "green");
    all.css("filter", "none");
    });

$(".button-right-marshall").on("click", function() {
    right.play();
});

$(".button-right-lily").on("click", function() {
    $(".lilybox").hide(2000);
    $("#Scooter").show(2000);
    $(".button-right-lily").css("background-color", "green");
    all.css("filter", "none");
});

$(".button-right-lily").on("click", function() {
        right.play();
});

$("#button-wrong").on("click", function() {
    $(".tedbox,.robinbox,.barneybox,.marshallbox,.lilybox,").hide(2000);
    all.css("filter", "none");
    console.log("wrong");
});


$(".button-wrong").on("click", function() {
    wrong.play();
});


$("#Robin").on("click", function() {
    console.log("Robin");
    $(".robinbox").show();
    all.css("filter", "blur(5px)");
});

$("#Barney").on("click", function() {    
    console.log("Barney");
    $(".barneybox").show();
    all.css("filter", "blur(5px)");
});

$("#Marshall").on("click", function() {
    console.log("Marshall");
    $(".marshallbox").show();
    all.css("filter", "blur(5px)");
});

$("#Lily").on("click", function() {
    console.log("Lily");
    $(".lilybox").show();
    all.css("filter", "blur(5px)");
});