var btn = document.querySelector("button").addEventListener('click', func);

function func(){

    var random1 = Math.floor(Math.random() * 6) + 1;
    var random2 = Math.floor(Math.random() * 6) + 1;

    var randImage1 = "dice" + random1 + ".png";
    var randImage2 = "dice" + random2 + ".png";

    randImage1 = "images/" + randImage1;
    randImage2 = "images/" + randImage2;

    document.querySelectorAll("img")[0].setAttribute("src", randImage1);
    document.querySelectorAll("img")[1].setAttribute("src", randImage2);


    if (random1 > random2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins!";
    } 
    else if (random1 < random2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!";
    } 
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }

}