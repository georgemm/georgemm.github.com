$(".box1").hide();
$(".box2").hide();
$(".bbox1").click(function(){
    $(".box1").fadeToggle('slow');
    return false;
});
$(".bbox2").click(function(){
    $(".box2").fadeToggle('slow');
    return false;
});