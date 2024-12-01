import React from "react";

const ScoreTracker = ({score, total}) => {
    return (
        <div className="score-tracker">
            <h3>Score: {score} / {total}</h3>
        </div>
    );
};

export default ScoreTracker;