$(document).ready(function () {
    console.log("ready!");

    // $('.q1').hide();
    // $('.q2').hide();
    // $('.q3').hide();
    // $('.q4').hide();
    // $('.q5').hide();
    var question1 = $('.q1');
    var question2 = $('.q2');
    var question3 = $('.q3');
    var question4 = $('.q4');
    var question5 = $('.q5');
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var gameArr = [question1, question2, question3, question4, question5];

    for (i = 0; i < gameArr.length; i++) {
        gameArr[i].hide();
    }






    $('.b1').on("click", function () {
        console.log(gameArr[0]);
    //THIS WORKS BUT IT ADDS A STYLE OF DISPLAY:NONE TO MY HTML
    //also it is going in to my timer div just for testing purposes 
        $('#timer').html(gameArr[0]);

    });

    //Setting up audio for the start screen, make it loop so it never stops running
    var audio1 = new Audio("assets/music/startMusic.mp3");

    audio1.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    audio1.play();


    function game() {
        var answer = $("input[name='q']:checked").val();
        if (answer === "correct") {
            alert("Correct!");
            correctAnswers = correctAnswers + 1
        } else {
            wrongAnswers = wrongAnswers + 1
            alert("Wrong!");
        }
    }

    function countdown() {
        seconds = 60;
        $('#timer').html('<h6>Time Remaining: ' + seconds + '</h6>');

        time = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        seconds--;
        $('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
        if (seconds < 1) {
            clearInterval(time);


        }
    }


    $('.submit').on("click", function () {

        // game();
        // $('.q1').push(gameArr);
        // console.log(gameArr);
    });




    // $(".submit").on("click", function () {


    //     var answer = $("input[name='q']:checked").val();
    //     console.log(answer);

    //     if (answer === "correct") {

    //         $('.questions').append("<p style='color:green;'><b>CORRECT!</b></p>")
    //         correctAnswers = correctAnswers + 1
    //         setTimeout(() => {


    //             $('.q1').hide();
    //             $('.q2').show();

    //         }, 1000);
    //     } else {
    //         $('.questions').append("<p style='color:red;'><b>Wrong!</b></p>");
    //     }

    //     console.log("you clicked submit!");
    // })












});