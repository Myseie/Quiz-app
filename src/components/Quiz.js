import React, { useState } from "react";
import questions from '../data/questions';
import Question from './Question';
import Results from './Results';
import ScoreTracker from './ScoreTracker';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    const [bgColor, setBgColor] = useState("#d4f7d4");


    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
          setScore(score + 1);
          setBgColor("#d4f7d4"); // Återställ till grön vid rätt svar
        } else {
          setBgColor("#f7d4d4"); // Ändra till ljusröd vid fel svar
        }
    
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          setShowResults(true);
        }
      };

    return (
        <div 
            className="quiz-container"
            style={{backgroundColor: bgColor, padding: "20px", borderRadius: "8px"}}
        >
        
            {!showResults ? (
            <>
            
            <ScoreTracker score={score} total={questions.length} />
            <Question 
                question={questions[currentQuestion]}
                handleAnswer={handleAnswer}
            />
            </>
        ): (
            <Results score={score} total={questions.length} />
        )}
        </div>
    );
};

export default Quiz;