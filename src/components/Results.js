import React from "react";

const Results = ({ score, total}) => {
    return (
        <div className="results-container">
            <h2>Quiz Complete!</h2>
            <p>Your score is {score} out of total {total}</p>
            <button 
                className="btn btn-primary"
                onClick={() => window.location.reload()}
            >
                Play Again
            </button>
        </div>
    );
};

export default Results;