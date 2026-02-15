export default function Preview({
  label,
  text, 
  styles, 
  textColors, 
  backgroundColors 
}) {

  const textStyles = {
    color: styles.color
      ? textColors[styles.color]
      : "black",

    fontWeight: styles.modifiers.includes("bold")
      ? "bold"
      : "normal",

    fontStyle: styles.modifiers.includes("italic")
      ? "italic"
      : "normal",

    textDecoration: `
      ${styles.modifiers.includes("underline") ? "underline " : ""}
      ${styles.modifiers.includes("strikethrough") ? "line-through " : ""}
      ${styles.modifiers.includes("overline") ? "overline" : ""}
    `,

    visibility: styles.modifiers.includes("hidden")
      ? "hidden"
      : "visible",
  };

  return (
    <>
     <h3>{label}</h3>
     <div
    style={{
        backgroundColor: styles.background
        ? backgroundColors[styles.background]
        : "white",

        padding: "20px",
        borderRadius: "8px"
    }}
    >
    <span style={textStyles}>
        {text || "Preview"}
    </span>
     </div>
    </>
  );
}
