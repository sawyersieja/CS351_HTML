//Rotates the circular matrix cougar on the landing page
$(document).ready(function(){
    $("#matrixCougar").addClass("rotated");
});
//-------------------------------------------------------------------

$(document).ready(function(){
    $("#matrixCougar").click(function() {
        window.location.href = "../html/home.html";
    });
});

//----------------------------------------------------------------------

$("body").bind("mousemove", function(e){
    console.log("mousemove")
});