(function() {
    function buildQuiz() {
     
      var output = [];
  
      
      questions.forEach((currentQuestion, questionNumber) => {
        
        var answers = [];
  
       
        for (letter in currentQuestion.answers) {
          
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join("")} </div>`
        );
      });
  
      
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      
      var answerContainers = quizContainer.querySelectorAll(".answers");
  
      
      let numCorrect = 0;
  
      
      questions.forEach((currentQuestion, questionNumber) => {
        
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        
        if (userAnswer === currentQuestion.correctAnswer) {
          
          numCorrect++;
  
          
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;
    }
  
    var quizContainer = document.getElementById("quiz");
    var resultsContainer = document.getElementById("results");
    var submitButton = document.getElementById("submit");
    var questions = [
      {
        question: "What is the cyborgs real name?",
        answers: {
          a: "Victor Stone",
          b: "Victor Lewis",
          c: "Victor Marshall"
        },
        correctAnswer: "a"
      },
      {
        question: "Who is the first Robin?",
        answers: {
          a: "Jason Todd",
          b: "Dick Grayson",
          c: "Tim Drake"
        },
        correctAnswer: "b"
      },
      {
        question: "Who gave Dick Grayson the name Nightwing in the comics?",
        answers: {
          a: "Batman",
          b: "Starfire",
          c: "Superman",
    
        },
        correctAnswer: "c"
      }
    ];
  
    
    buildQuiz();
  
    
    submitButton.addEventListener("click", showResults);
  })();