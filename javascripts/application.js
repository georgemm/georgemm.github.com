$(".box1").hide();
$(".box2").hide();
$(".box3").hide();
$(".bbox1").click(function(){
    $(".box1").fadeToggle('slow');
    return false;
});
$(".bbox2").click(function(){
    $(".box2").fadeToggle('slow');
    return false;
});
$(".bbox3").click(function(){
    $(".box3").fadeToggle('slow');
    return false;
});