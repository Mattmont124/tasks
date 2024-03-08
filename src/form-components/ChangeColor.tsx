import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    const handleColorChange = (color: string) => {
        setSelectedColor(color);
    };
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color, index) => (
                    <label key={index}>
                        <input
                            type="radio"
                            name="color"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                        />
                        {color}
                    </label>
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    width: "100px",
                    height: "100px",
                    marginTop: "10px"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
