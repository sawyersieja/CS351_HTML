$(document).ready(function(){
    $("#nav-cougar").click(function() {
        window.location.href = "../html/home.html";
    });
});

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