
$(".northbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/5.JPG");
  console.log("im over the northbutton");
});

$(".northbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/3.JPG");
});

$(".southbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/lala.JPG");
});

$(".southbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/3.JPG");
});

$(".rightbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/4.JPG");
});

$(".rightbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/3.JPG");
});

$(".leftbutton").on("mouseenter", function(){
  $(".backgroundimage").attr("src", "img/1.JPG");
});

$(".leftbutton").on("mouseleave", function(){
  $(".backgroundimage").attr("src", "img/3.JPG");
});
