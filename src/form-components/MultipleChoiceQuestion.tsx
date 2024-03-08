import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState(options[0]);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedChoice(e.target.value);
    };
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select value={selectedChoice} onChange={handleSelectChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedChoice === expectedAnswer ? (
                <span>✔️</span>
            ) : (
                <span>❌</span>
            )}
        </div>
    );
}
