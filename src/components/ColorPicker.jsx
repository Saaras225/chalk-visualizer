import React from "react";

function getContrastColor(hex) {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);

  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.6 ? "#000000" : "#ffffff";
}

const ColorPicker = ({label, colors, selectedColor, onSelect}) => {
  return (
    <>
      <h3>{label}</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {Object.entries(colors).map(([name, hex]) => (
            <button
            key={name}
            onClick={() => onSelect(name)}
            style={{
                backgroundColor: hex,
                border:
                selectedColor === name
                    ? "3px solid black"
                    : "1px solid #ccc",
                padding: "5px 5px",
                cursor: "pointer",
                borderRadius: "6px",
                minWidth: "50px",
                color: getContrastColor(hex)
            }}
            >
            {name}
            </button>
        ))}
       </div>
    </>
  );
};

export default ColorPicker;
