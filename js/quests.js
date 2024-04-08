$(document).ready(function(){
    $("#nav-cougar").click(function() {
        window.location.href = "../html/home.html";
    });
});
//----------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
    const exclamationMark = document.getElementById("quest-exclamation-title");
    let yPos = 0;
    let yPosChange = 1;

    function animate() {

        yPos += yPosChange * 0.075;
        exclamationMark.style.top = yPos + "px";

        if (yPos > 10) {
            yPosChange = -1;
        }
        else if(yPos < 0) {
            yPosChange = 1;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
});

//-------------------------------------------------------------------------------------





//! below not working atm

document.querySelectorAll(".quest-question-button").forEach(function(button) {
    button.addEventListener('click', function() {
        if(this.style.backgroundColor === "rgb(65,105,225)") {
            this.style.backgroundColor = "";
        }
        else {
            this.style.backgroundColor = "royalblue";
        }
    });
});
/*
function questQuestionButton() {
    var button = document.getElementById("quest-question-button");
    var currentColor = button.style.backgroundColor;

    if (currentColor === "royalblue") {
        button.style.backgroundColor = "lightgrey";
        button.style.color = "black";
    }
    else {
        button.style.backgroundColor = "royalblue";
        button.style.color = "yellow";
    }
}
*/
//document.getElementById("quest-question-button").onclick = questQuestionButton;