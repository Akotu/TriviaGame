$(document).ready(function () {
            console.log("ready!");

            var pick;

            var correctAnswer = 0;

            var wrongAnswer = 0;

            var unAnswer = 0;

            var question = 0;

            var images;

            var counter = 10;

            //Setting up audio for the start screen, make it loop so it never stops running if user decides to not start the game..
            var audio1 = new Audio("assets/music/startMusic.mp3");

            audio1.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
            audio1.play();

           
                


            var mainQuestions = [{//0
                
                    question: "'The Mountain' is the nickname for which character?",
                    choices: ["Gerold Clegane", "Sandor Clegane", "Oberyn Martell", "Gregor Clegane"],                   
                    validAnswer: 3
                },  {//1
                    question: "Who is the youngest child of Lord Tywin Lannister?",
                    choices: ["Tyrion Lannister", "Jon Snow", "Jaime Lannister", "Cersei Lannister"],
                    validAnswer: 0

                }, {//2
                    question: "Who is the King of the North?",
                    choices: ["Bran Stark", "Jon Snow", "Tommen Baratheon", "LittleFinger"],
                    validAnswer: 1

                }, {//3
                    question: "Who is the head of house Stark?",
                    choices: ["Tyrion Lannister", "Jon Snow", "Bran Stark", "Ned Stark"],
                    validAnswer: 3

                }, {//4
                    question: "Which persons are the 'Night's Watch' trying to stop by using a giant wall of ice?",
                    choices: ["White Walkers", "Wildings", "Mother of Dragons", "Night walkers"],
                    validAnswer: 0

                }

            ];

            $(".b1").on("click", function () {
                $(this).hide();
                $(".myCard").hide();
                countdown();
                showCountdown();
                displayGame();
                
                
              
               
            });

            

            

            function countdown(){
                seconds = 20;
                $('#timer').html('<h3 style="font-family:got;">Time Remaining: ' + seconds + '</h3>');
                
                time = setInterval(showCountdown,1000);
            }
            function showCountdown(){
                seconds--;
                $('#timer').html('<h2 style="font-family:got;">Time Remaining: ' + seconds + '</h2>');
                    if(seconds < 1){
                        clearInterval(time);
                        
                        
                }
            }


            function displayGame() {
                $("#question").html(mainQuestions[0].question);
                
                
                  var choicesArr = mainQuestions[0].choices;
                  var buttonsArr = [];
                
                  for (let i = 0; i < choicesArr.length; i++) {
                    var button = $('<button>');
                    button.text(choicesArr[i]);
                    button.attr('data-id', i);
                    $('#choices').append(button);
                   }
                
                  } 
                
                 $('#choices').on('click', 'button', function(){
                 pick = $(this).data("id");
                 mainQuestions[0].validAnswer;
                 if(pick != mainQuestions[0].validAnswer) {
                
                 $('#choices').text("Nope!");
                 wrongAnswer++;
                
                } else if (pick === mainQuestions[0].validAnswer) {
                $('#choices').text("Good Job!");
                correctAnswer++;
                
                }
                
                });

            });