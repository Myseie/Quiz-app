import React from "react";

const Question = ({ question, handleAnswer }) => {
    return (
        <div className="question-container">
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="btn btn-primary"
                        onClick={() => handleAnswer(option === question.answer)}
                        style={{
                            padding: "10px, 20px",
                            margin: "10px",
                            backgroundColor: "f0f8ff",
                            border: "2px solid #008000",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;