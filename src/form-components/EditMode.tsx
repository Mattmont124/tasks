import React, { useState, ChangeEvent } from "react";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [userName, setUserName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitchChange = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleCheckboxChange = () => {
        setIsStudent((prevIsStudent) => !prevIsStudent);
    };
    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <label>
                    Edit Mode:
                    <input
                        type="checkbox"
                        checked={editMode}
                        onChange={handleSwitchChange}
                    />
                </label>
            </div>
            {editMode ? (
                <div>
                    <label>
                        Your Name:
                        <input
                            type="text"
                            value={userName}
                            onChange={handleNameChange}
                        />
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            checked={isStudent}
                            onChange={handleCheckboxChange}
                        />
                        Are you a student?
                    </label>
                </div>
            ) : (
                <div>
                    {userName} is {isStudent ? "a student" : "not a student"}
                </div>
            )}
        </div>
    );
}
