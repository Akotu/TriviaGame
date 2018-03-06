$(document).ready(function () {
            console.log("ready!");

            var question1 = $('.q1');
            var question2 = $('.q2');
            var question3 = $('.q3');
            var question4 = $('.q4');
            var question5 = $('.q5');

            var correctAnswers = 0;
            var wrongAnswers = 0;
            var gameArr = [question1, question2, question3, question4, question5];
            var lastGame = 0;
            var prevGame = -1;

           

            function nextGame() {
                gameArr[lastGame].show() 
                lastGame++;
               



            };

            function restartGame() {
                location.reload();
            };

            //My startGame button
            $('.b1').on("click", function () {
                $('.b1').hide();
                $('.myCard').hide();
                nextGame();
                

                console.log(gameArr[0]);
               
                countdown();
                showCountdown();
            });

            //Setting up audio for the start screen, make it loop so it never stops running
            var audio1 = new Audio("assets/music/startMusic.mp3");

            audio1.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
            audio1.play();

            //code to make my quiz responsive
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

            //timer
            function countdown() {
                seconds = 60;
                $('#timer').html('<h6>Time Remaining: ' + seconds + '</h6>');

                time = setInterval(showCountdown, 1000);
            };

            function showCountdown() {

                seconds--;
                $('#timer').html('<h3>Time Remaining: ' + seconds + '</h3>');
                if (seconds < 1) {
                    clearInterval(time);
                    alert("You ran out of time!");
                    restartGame();






                };
            };

                //submit your answer
                $('.submit').on("click", function () {
                    nextGame();
                    game();
                    
                    console.log(gameArr);
                });
            
            }); 