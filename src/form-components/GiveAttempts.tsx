import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseAttempts = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts - 1);
        }
    };

    const handleGainAttempts = () => {
        const parsedAttempts = parseInt(requestedAttempts);
        if (!isNaN(parsedAttempts) && parsedAttempts > 0) {
            setAttemptsLeft((prevAttempts) => prevAttempts + parsedAttempts);
            setRequestedAttempts("");
        }
    };

    const handleAttemptInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(e.target.value);
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleAttemptInputChange}
            />
            <button onClick={handleUseAttempts} disabled={attemptsLeft === 0}>
                Use
            </button>
            <button onClick={handleGainAttempts}>Gain</button>
        </div>
    );
}
