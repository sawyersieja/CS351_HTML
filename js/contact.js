import { User } from "./User.js";
import { UserProfile } from "./UserProfile.js";

$(document).ready(function(){
    $("#nav-cougar").click(function() {
        window.location.href = "../html/home.html";
    });
});

/*
Everything under this is garbage.
It's 5:16pm the night it's due.
Just going to check off all the assignment criteria for now.
And keep working if I have more time after.
I still have calc2 hw too.
mehhhhhh about 4ish hours if I'm lucky.
*/



let username = "sawyersieja";
let at = "@email.com"
let email = username + at;

for(let i = 0; i < 1; i++) {
    console.log("Username: ", username);
    console.log("@: ", at);
    console.log("email: ", email);
}

let studentScores = {John: 90, Jacob: 82, Jingleheimerschmidt: 100};
for(let student in studentScores) {
    console.log(`${student}: ${studentScores[student]}`);
}

const hnimnt = ["His", "name", "is", "my", "name", "too", "!"];
for(const value of hnimnt) {
    console.log(value + " ");
}

let number = 10;
while(number != 0) {
    console.log(number);
    number--;
}

let statementLogged = false;
do{
    console.log("Statement logged: ", statementLogged);
    statementLogged = true;
    console.log("Statement logged: ", statementLogged);
}while(!statementLogged);

const userProfile = new UserProfile(
    "Smitty",
    "Werbenjaegermanjensen",
    "smittywerbenjaegermanjensen@smcougars.com",
    "987-654-3210",
    "1",
    "../asets/img/matrix_cougar_profile.webp",
    "He was #1!",
    ["'Novelty' Soda Drinking Hat", "Being #1"]
);
console.log(userProfile);

