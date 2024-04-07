$(document).ready(function(){
    $("#nav-cougar").click(function() {
        window.location.href = "../html/home.html";
    });
});
//---------------------------------------------------------------------------------
$(document).ready(function(){
    $("#sponsor-img").click(function() {
        alert("cha-ching!");
    });
});
//----------------------------------------------------------------------------------
var sponsor_img = [
    "../assets/img/sponsor.png",
    "../assets/img/sponsor2.png",
];

var count = 0;

function changeSponsor() {
    count++;
    if(count == sponsor_img.length) {
        count = 0;
    }

    document.getElementById("sponsor-img").src = sponsor_img[count];
}

setInterval(changeSponsor, 8000);
//------------------------------------------------------------------------------------